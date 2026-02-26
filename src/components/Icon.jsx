import "./Icon.css";

const icons = import.meta.glob("../assets/icons/*.svg", {
  eager: true,
  import: "default",
});

export default function Icon({
  fileName,
  size = 48,
  title = "",
  isDragging = false,
}) {
  const path = `../assets/icons/${fileName}.svg`;
  const src = icons[path];

  if (!src) {
    console.warn(`Icon "${fileName}" not found`);
    return null;
  }

  return (
    <div className={`container ${isDragging ? "dragging" : ""}`}>
      <img
        src={src}
        width={size}
        height={size}
        className="icon"
        alt={fileName}
      />
      <span className="title">{title}</span>
    </div>
  );
}
