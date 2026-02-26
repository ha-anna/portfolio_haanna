import Window from "./Window";
import DraggableIcon from "./DraggableIcon";
import Icon from "./Icon";

export default function DesktopCanvas({ icons, setIcons, windows, closeWindow }) {
  function handleMove(id, newX, newY) {
    setIcons(prev =>
      prev.map(icon => icon.id === id ? { ...icon, x: newX, y: newY } : icon)
    );
  }

  return (
    <div style={styles.desktop}>
      {windows.map(win => (
        <Window key={win.id} window={win} closeWindow={closeWindow} />
      ))}
      {icons.map(icon => (
        <DraggableIcon key={icon.id} id={icon.id} x={icon.x} y={icon.y} onMove={handleMove}>
          <Icon fileName={icon.name} title={icon.title} />
        </DraggableIcon>
      ))}
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
};