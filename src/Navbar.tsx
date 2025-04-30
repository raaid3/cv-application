import { useState } from "react";
import darkModeIcon from "./assets/dark-icon.svg";
import lightModeIcon from "./assets/light-icon.svg";

export default function Navbar() {
  const [mode, setMode] = useState("light");
  const root = document.querySelector(":root");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      root?.classList.add("dark");
    } else {
      setMode("light");
      root?.classList.remove("dark");
    }
  }

  return (
    <div className="w-full h-12 bg-light-secondary dark:bg-dark-surface-secondary shadow-md relative z-10 flex justify-end p-[0.5%]">
      {mode === "dark" ? (
        <img
          src={darkModeIcon}
          alt="Dark mode icon"
          onClick={toggleMode}
          className="hover:scale-110 ease-in-out duration-200"
        />
      ) : (
        <img
          src={lightModeIcon}
          alt="Light mode icon"
          onClick={toggleMode}
          className="hover:scale-110 ease-in-out duration-200"
        />
      )}
    </div>
  );
}
