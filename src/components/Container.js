import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};
