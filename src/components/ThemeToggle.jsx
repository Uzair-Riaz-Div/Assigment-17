import React from "react";

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      <ion-icon name="moon" className="moon" />
      <ion-icon name="sunny" className="sun" />
    </button>
  );
};

export default ThemeToggle;
