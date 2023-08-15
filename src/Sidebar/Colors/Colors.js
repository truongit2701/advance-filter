import React from "react";
import "./Colors.css";
import Input from "../../component/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test2"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test2"
          color="Red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test2"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="white"
            name="test2"
          />
          <span
            className="checkmark"
            style={{ backgroundColor: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </div>
  );
};

export default Colors;
