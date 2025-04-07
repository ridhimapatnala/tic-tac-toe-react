import React from "react";

const Square = ({ value, onClick }) => {
  const className = `square ${value}`;
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
