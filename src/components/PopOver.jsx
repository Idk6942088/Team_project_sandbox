import React, { useState } from "react";

export const PopOver = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={togglePopover}>Kattints ide</button>

      {isVisible && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            background: "#f9f9f9",
            border: "1px solid #ccc",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1,
          }}
        >
          Ez egy popover üzenet!
        </div>
      )}
    </div>
  );
};
