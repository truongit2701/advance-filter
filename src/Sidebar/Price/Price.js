import React from "react";
import "./Price.css";
import Input from "../../component/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value={50}
          title="$50 - $100"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$100 - $150"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$150 - $200"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $200"
          name="test3"
        />
      </div>
    </div>
  );
};

export default Price;
