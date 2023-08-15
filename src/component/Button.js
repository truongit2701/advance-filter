import React from "react";

const Button = ({ onClickHandle, value, title }) => {
  return (
    <>
      <button className="btns" onClick={onClickHandle} value={value}>
        {title}
      </button>
    </>
  );
};

export default Button;
