import { useState } from "react";
import { CheckBox } from "./CategoryFilter";
import classes from "./Filter.module.css";
const FurnishingFilter = (props) => {
  const [checked, setChecked] = useState("");
  return (
    <div className="pb-3 xl:pr-8 border-b border-stroke">
      <h1 className={`${classes.heading}`}>Furnishing</h1>
      <CheckBox
        id={"Fully furnished"}
        onClick={() => setChecked("Fully furnished")}
        checked={checked === "Fully furnished" ? true : false}
      />
      <CheckBox
        id={"Semi furnished"}
        onClick={() => setChecked("Semi furnished")}
        checked={checked === "Semi furnished" ? true : false}
      />
      <CheckBox
        id={"Unfurnished"}
        onClick={() => setChecked("Unfurnished")}
        checked={checked === "Unfurnished" ? true : false}
      />
    </div>
  );
};
export default FurnishingFilter;
