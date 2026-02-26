import { useState } from "react";
import Desktop from "./components/Desktop";

function App() {
  const [windows, setWindows] = useState([]);

  function openWindow(type) {
    const newWindow = {
      id: crypto.randomUUID(),
      type,
      x: 200,
      y: 150,
    };

    setWindows((prev) => [...prev, newWindow]);
  }

  function moveWindow(id, dx, dy) {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, x: win.x + dx, y: win.y + dy } : win,
      ),
    );
  }

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <Desktop
      windows={windows}
      moveWindow={moveWindow}
      openWindow={openWindow}
      closeWindow={closeWindow}
    />
  );
}

export default App;
