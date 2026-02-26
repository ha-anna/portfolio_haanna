import { useRef, useState, cloneElement } from "react";

export default function DraggableIcon({ id, x, y, onMove, children }) {
  const offsetRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  function handlePointerDown(e) {
    e.preventDefault();
    offsetRef.current = {
      x: e.clientX - x,
      y: e.clientY - y,
    };
    setIsDragging(true);

    function onPointerMove(e) {
      onMove(
        id,
        e.clientX - offsetRef.current.x,
        e.clientY - offsetRef.current.y,
      );
    }

    function onPointerUp() {
        setIsDragging(false);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

return (
    <div
      onPointerDown={handlePointerDown}
      style={{
        position: "absolute",
        left: x,
        top: y,
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {cloneElement(children, { isDragging })}
    </div>
  );
}
