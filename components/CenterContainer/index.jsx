import React from "react";

export const CenterContainer = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: "100vh",
      minWidth: "100vm",
      margin: 50,
    }}
  >
    {children}
  </div>
);
