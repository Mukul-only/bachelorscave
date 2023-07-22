import { useState } from "react";
import classes from "./Filter.module.css";
export const CheckBox = (props) => {
  const { id } = props;
  return (
    <div className="">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer"
        onChange={props.onClick}
        checked={props.checked}
      />
      <label
        htmlFor={id}
        className="px-2 text-sm font-medium tracking-tight text-gray-600 cursor-pointer select-none xl:text-base"
        onClick={props.onClick}
      >
        {id}
      </label>
    </div>
  );
};
const Category = (props) => {
  const [checked, setChecked] = useState("");

  return (
    <div className="pb-3 border-b xl:pr-8 border-stroke">
      <h1 className={`${classes.heading}`}>Category</h1>
      <CheckBox
        id={"Apartements"}
        onClick={() => setChecked("Apartements")}
        checked={checked === "Apartements" ? true : false}
      />
      <CheckBox
        id={"Flat"}
        onClick={() => setChecked("Flat")}
        checked={checked === "Flat" ? true : false}
      />
      <CheckBox
        id={"Boys Hostel"}
        onClick={() => setChecked("Boys hostel")}
        checked={checked === "Boys hostel" ? true : false}
      />
      <CheckBox
        id={"Girls Hostel"}
        onClick={() => setChecked("Girls hostel")}
        checked={checked === "Girls hostel" ? true : false}
      />
    </div>
  );
};
export default Category;
