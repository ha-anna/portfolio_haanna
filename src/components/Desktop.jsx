import { useState, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import MenuBar from "./MenuBar";
import DesktopCanvas from "./DesktopCanvas";

export default function Desktop({ windows, openWindow, closeWindow, moveWindow }) {
  const [icons, setIcons] = useState([
    { id: "computer", name: "computer", title: "my computer", x: 20, y: 20 },
    { id: "cv", name: "CV", title: "my cv", x: 40, y: 120 },
    { id: "folder", name: "Folder", title: "cats", x: 40, y: 220 },
    { id: "coding", name: "Coding Projects", title: "my projects", x: 20, y: 320 },
  ]);
  const scaleRef = useRef(1);

  return (
    <div style={styles.desktop}>
      <MenuBar openWindow={openWindow} />
      <TransformWrapper
        panning={{ excluded: ["icon"] }}
        wheel={{ disabled: true }}
        doubleClick={{ disabled: true }}
        onTransformed={(_, state) => { scaleRef.current = state.scale; }}
      >
        <TransformComponent>
          <div style={styles.canvas}>
            <DesktopCanvas
              icons={icons}
              setIcons={setIcons}
              windows={windows}
              moveWindow={moveWindow}
              closeWindow={closeWindow}
              scale={scaleRef}
            />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

const styles = {
  desktop: {
    width: "100%",
    height: "calc(100vh - 32px)",
    overflow: "hidden",
    position: "relative",
  },

  canvas: {
    width: "calc(100vw - 32px)",
    height: "calc(100vh - 32px)",
    marginTop: "32px",
    overflow: "hidden",
  },
};