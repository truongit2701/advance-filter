import React from "react";
import "./Recomended.css";
import Button from "../component/Button";

const Recomended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="recomended-title">Recomended</h2>
      <div className="recomended-flex">
        <Button onClickHandle={handleClick} value="" title="All Products" />
        <Button onClickHandle={handleClick} value="Nike" title="Nike" />
        <Button onClickHandle={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandle={handleClick} value="Puma" title="Puma" />
        <Button onClickHandle={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recomended;
