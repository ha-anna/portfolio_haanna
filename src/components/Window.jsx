import { useDraggable } from "@dnd-kit/core";

export default function Window({ window, openWindow, closeWindow }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: window.id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} style={{ ...styles.window, ...style }}>
      {/* TITLE BAR = DRAG HANDLE */}
      <div style={styles.titleBar} {...listeners} {...attributes}>
        <div style={styles.buttons}>
          <div
            style={{ ...styles.dot, background: "#ff5f57" }}
            onClick={() => closeWindow(window.id)}
          />
          <div style={{ ...styles.dot, background: "#febc2e" }} />
          <div style={{ ...styles.dot, background: "#28c840" }} />
        </div>

        <span style={styles.title}>{window.title}</span>
      </div>

      <div style={styles.content}>
        This is the {window.type} window
      </div>
    </div>
  );
}

const styles = {
  window: {
    position: "absolute",
    width: 420,
    borderRadius: 12,
    overflow: "hidden",
    background: "#f6f6f6",
    boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
  },

  titleBar: {
    height: 32,
    background: "linear-gradient(#e5e5e5,#d5d5d5)",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    cursor: "grab",
    position: "relative",
  },

  buttons: {
    display: "flex",
    gap: 8,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    cursor: "pointer",
  },

  title: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 13,
  },

  content: {
    background: "white",
    padding: 16,
    minHeight: 200,
  },
};