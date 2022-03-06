import React from "react";
import { Counter, Timer, Input } from "../components";
import { useTheme } from "../context/ThemeContext";

const Test = () => {
  const { theme, setLight, setDark } = useTheme();
  return (
    <div className="test" style={theme}>
      <Counter />
      <Timer />
      <div className="theme-button">
        <button
          className="toggle-theme"
          onClick={() => (theme.backgroundColor === "white" ? setDark() : setLight())}
        >
          Toggle Theme
        </button>
      </div>
      <Input />
    </div>
  );
};
export default Test;
