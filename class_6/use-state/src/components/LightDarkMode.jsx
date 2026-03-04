import { useState } from "react";

const LightDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3 ease ",
        height: "100vh",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode "}</h1>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button
        onClick={toggleMode}
        style={{
          backgroundColor: darkMode ? "white" : "black",
          color: darkMode ? "black" : "white",
          padding: "5px 14px 5px 14px",
          borderRadius: "8px",
          border: "1px",
          fontSize: "18px",
        }}
      >
        Change Mode
      </button>
    </div>
  );
};

export default LightDarkMode;
