import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "230px",
  height: "250px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  padding: '0 10px',
  
  borderTop:'5px solid #002942'
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
