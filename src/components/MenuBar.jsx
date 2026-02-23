import { useState, useRef, useEffect } from "react";

export default function MenuBar({ openWindow }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleItemClick = (type) => {
    openWindow(type);
    setActiveMenu(null);
  };

  return (
    <div style={styles.bar} ref={menuRef}>
      <div style={styles.left}>
        <button
          style={{
            ...styles.menuItem,
            ...(activeMenu === "about" && styles.activeMenuItem),
          }}
          onClick={() => toggleMenu("about")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M30.47 21.33H32v1.53h-1.53Zm0-7.61h-6.09v-6.1h1.52V6.1h-1.52V4.57H7.62V6.1H6.09v1.52H4.57v1.52H3.05v1.53H1.52v1.52H0v4.57h1.52v-1.52h7.62v3.05h1.52v3.04h1.53v3.05h1.52v3.05h1.53V15.24h6.09v3.05h-1.52v3.04h-1.53v3.05h-1.52v3.05h-1.52v1.52h-1.53v1.53h1.53V32h1.52v-1.52h1.52v-1.53h1.53v-1.52h1.52v-1.52h1.53v-1.53h1.52v-1.52h1.52v-1.53h1.53v-1.52h1.52v-1.52h1.52v-1.53H32v-4.57h-1.53Zm-9.14 0H10.66v-1.53H9.14V6.1h6.1v1.52h1.52v1.52h1.52v1.53h1.53v1.52h1.52Zm7.62 12.19h1.52v1.52h-1.52Z" /><path fill="currentColor" d="M28.95 10.67h1.52v1.52h-1.52Zm-1.52 16.76h1.52v1.52h-1.52Zm0-3.05h1.52v1.53h-1.52Zm0-15.24h1.52v1.53h-1.52Zm0-6.09H25.9v1.52h1.53V6.1h1.52V4.57h1.52V3.05h-1.52V1.52h-1.52zM25.9 25.91h1.53v1.52H25.9Zm0-18.29h1.53v1.52H25.9Zm-3.04 22.86h1.52V32h-1.52Zm0-30.48h1.52v1.52h-1.52Zm-9.15 7.62h1.53v1.52h-1.53Zm0-6.1h1.53v1.53h-1.53Zm-1.52 25.91h1.52v1.52h-1.52Zm0-18.29h1.52v1.53h-1.52Zm-1.53 16.77h1.53v1.52h-1.53Zm0-15.24h1.53v1.52h-1.53ZM9.14 28.95h1.52v1.53H9.14Zm0-4.57h1.52v1.53H9.14Zm-1.52-1.52h1.52v1.52H7.62Zm-1.53-1.53h1.53v1.53H6.09Zm-1.52-1.52h1.52v1.52H4.57Zm0-16.76h1.52v1.52H4.57ZM3.05 24.38v1.53H1.52v1.52h1.53v1.52h1.52v-1.52h1.52v-1.52H4.57v-1.53zm0-6.09h1.52v1.52H3.05Zm0-13.72h1.52V6.1H3.05Zm0-3.05h1.52v1.53H3.05ZM1.52 16.76h1.53v1.53H1.52Zm0-13.71h1.53v1.52H1.52ZM0 21.33h1.52v1.53H0Z" /></svg>
          {activeMenu === "about" && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownItem} onClick={() => handleItemClick("about")}>
                About Me
              </div>
              <div style={styles.dropdownItem} onClick={() => handleItemClick("projects")}>
                Projects
              </div>
            </div>
          )}
        </button>

        <button
          style={{
            ...styles.menuItem,
            ...(activeMenu === "file" && styles.activeMenuItem),
          }}
          onClick={() => toggleMenu("file")}
        >
          File

          {activeMenu === "file" && (
            <div style={styles.dropdown}>
              <div
                style={styles.dropdownItem}
                onClick={() => handleItemClick("about")}
              >
                About Me
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleItemClick("projects")}
              >
                Projects
              </div>
            </div>
          )}
        </button>
        <button style={{
            ...styles.menuItem,
            ...(activeMenu === "edit" && styles.activeMenuItem),
          }} onClick={() => toggleMenu("edit")}>
          Edit
          {activeMenu === "edit" && styles.activeMenuItem && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownItem}>Undo</div>
              <div style={styles.dropdownItem}>Redo</div>
            </div>
          )}
        </button>
      </div>


      <div style={styles.right}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M30.48 9.14h-1.53V6.09h-1.52V4.57H25.9V3.05h-3.04V1.52h-3.05V0h-7.62v1.52H9.14v1.53H6.09v1.52H4.57v1.52H3.05v3.05H1.52v3.05H0v7.62h1.52v3.05h1.53v3.04h1.52v1.53h1.52v1.52h3.05v1.53h3.05V32h7.62v-1.52h3.05v-1.53h3.04v-1.52h1.53V25.9h1.52v-3.04h1.53v-3.05H32v-7.62h-1.52ZM19.81 25.9h-1.52v1.53h-4.58V25.9h-1.52v-4.57h1.52v-1.52h4.58v1.52h1.52Zm4.57-13.71h-1.52v1.52h-1.53v1.53h-1.52v1.52h-1.52v1.53h-4.58v-3.05h1.53v-1.53h1.52v-1.52h1.53V9.14h-1.53V7.62h-3.05v1.52h-1.52v3.05H7.62V7.62h1.52V6.09h1.53V4.57h1.52V3.05h7.62v1.52h1.52v1.52h1.53v1.53h1.52Z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M22.85 7.62v3.05h-1.52v4.57h1.52v1.52h1.53v1.53h-4.57v1.52h-1.53v1.52h4.57v3.05h-1.52v3.05h1.52v1.52h3.05v-1.52h1.53V25.9h1.52v-3.04h1.52v-3.05H32v-7.62h-1.53V9.14h-1.52V6.1h-1.52v1.52zm3.05-3.05h1.53V6.1H25.9Zm-3.05-1.52h3.05v1.52h-3.05Z" /><path fill="currentColor" d="M19.81 28.95h3.04v1.53h-3.04Zm0-27.43h3.04v1.53h-3.04Z" /><path fill="currentColor" d="M16.76 28.95h-1.52v-1.52h-4.58v1.52H9.14v1.53h3.05V32h7.62v-1.52h-3.05zM12.19 0h7.62v1.52h-7.62Zm-1.53 16.76h1.53v1.53h1.52v-4.58h-3.05zM6.09 27.43h3.05v1.52H6.09ZM4.57 25.9h1.52v1.53H4.57Z" /><path fill="currentColor" d="M3.05 22.86v3.04h1.52v-1.52h1.52v-1.52h1.53v-4.57H6.09v-1.53H4.57v-1.52H3.05v-1.53h1.52v-1.52h4.57v-1.52h1.52V9.14h1.53v1.53h1.52V9.14h1.53V6.1h-1.53V4.57h-3.05V3.05h1.53V1.52H9.14v1.53H6.09v1.52H4.57V6.1H3.05v3.04H1.52v3.05H0v7.62h1.52v3.05z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M29.71 11.43h-1.52v1.52h-1.52v1.53h1.52V16h1.52v-1.52h1.53v-1.53h-1.53zM28.19 22.1h1.52v1.52h-1.52ZM26.67.76v1.53h-1.53v1.52h1.53v1.52h1.52V3.81h1.52V2.29h-1.52V.76zm-1.53 7.62h1.53v1.53h-1.53Zm0 18.29h-1.52v1.52h-1.53v1.53h1.53v1.52h1.52v-1.52h1.53v-1.53h-1.53zm-1.52-7.62h1.52v1.52h-1.52Zm-1.53 3.05h-9.14v1.52h7.62v1.52h1.52zM12.95 8.38v1.53h9.14V6.86h-1.52v1.52zm4.57 16.76h3.05v1.53h-3.05Zm1.53-6.09v-1.52h1.52V16h-1.52v-1.52h-1.53V16H16v1.53h1.52v1.52zM17.52 5.33h3.05v1.53h-3.05ZM9.9 26.67h7.62v1.52H9.9Zm1.53-6.1h1.52v1.53h-1.52Zm0-10.66h1.52v1.52h-1.52ZM9.9 3.81h7.62v1.52H9.9Zm0 7.62h1.53v9.14H9.9ZM6.86 25.14H9.9v1.53H6.86Zm0-19.81H9.9v1.53H6.86ZM5.33 23.62h1.53v1.52H5.33Zm0-16.76h1.53v1.52H5.33ZM3.81 20.57h1.52v3.05H3.81Zm0-12.19h1.52v3.05H3.81ZM2.29 29.72h1.52v1.52H2.29Zm0-18.29h1.52v9.14H2.29ZM.76 3.81h1.53v1.52H.76Z" /></svg>
        {/* https://icones.js.org/collection/streamline-pixel */}
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

const styles = {
  bar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 32,
    background: "#f2f2f2",
    backdropFilter: "blur(20px)",
    color: "#28282B",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 12px",
    fontSize: 13,
    zIndex: 9999,
    fontFamily: "'ChicagoFLF', 'sans-serif'",
    borderBottom: "solid 2px #28282B"
  },
  left: {
    display: "flex",
    gap: 4,
    alignItems: "center",
  },
  right: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
  span: {
    cursor: "pointer",
  },
  menuItem: {
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    border: "none",
    height: "32px",
    padding: "0px 10px",
    fontFamily: "'ChicagoFLF', 'sans-serif'",
    background: "none",
    color: "#28282B",
  },
  dropdown: {
    position: "absolute",
    left: 0,
    top: 32,
    background: "#f2f2f2",
    border: "2px solid #28282B",
    color: "#28282B",
    minWidth: 120,
    zIndex: 9999,
    textAlign: "left",
  },
  dropdownItem: {
    padding: "6px 12px",
    cursor: "pointer",
  },
  activeMenuItem: {
    background: "#28282B",
    color: "white",
  },
};