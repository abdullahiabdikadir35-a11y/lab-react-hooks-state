import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // Toggles between true and false
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleToggle}>
      {/* MUST contain the word "Toggle" for tests */}
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
