import { useState } from "react";
import Desktop from "./components/Desktop"

function App() {
  const [windows, setWindows] = useState([]);

  const openWindow = (type) => {
    setWindows((prev) => [
      ...prev,
      {
        id: Date.now(),
        type,
        x: 200,
        y: 150,
      },
    ]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <Desktop
      windows={windows}
      openWindow={openWindow}
      closeWindow={closeWindow}
    />
  );
}

export default App
