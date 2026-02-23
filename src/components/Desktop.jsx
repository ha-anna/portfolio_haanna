import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import MenuBar from "./MenuBar";
import Window from "./Window";

export default function Desktop({ windows, openWindow, closeWindow }) {
return (
    <div style={styles.desktop}>
      <MenuBar openWindow={openWindow} />

      <TransformWrapper
        panning={{ velocityDisabled: true }}
        wheel={{ disabled: true }}
      >
        <TransformComponent>
          <div style={styles.canvas}>
            {windows.map((win) => (
              <Window
                key={win.id}
                id={win.id}
                type={win.type}
                x={win.x}
                y={win.y}
                closeWindow={closeWindow}
              />
            ))}
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
}
};