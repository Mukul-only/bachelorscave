import { useDispatch, useSelector } from "react-redux";
import classes from "./Select.module.css";
import React, { useState, useEffect } from "react";
import { validationActions } from "../../../store/validation-slice";
import { propertydataActions } from "../../../store/propertydata-slice";
const Select = ({ id, label, options, className, selected }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("select");
  const { isTouched } = useSelector((state) => state.validation);
  const isValid = value !== "select";
  const hasError = isTouched && !isValid;

  useEffect(() => {
    if (selected) {
      setValue(selected);
    }
  }, [setValue, selected]);

  const openDropDownHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const valueChangeHandler = (item) => {
    setValue(item);
  };
  const selectBlurHandler = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };
  useEffect(() => {
    dispatch(
      validationActions.setFeildValidity({ id: label, isValid: isValid })
    );
  }, [dispatch, isValid, label]);
  useEffect(() => {
    dispatch(
      propertydataActions.setPropertyData({ id: id, name: label, value: value })
    );
  }, [dispatch, value]);
  return (
    <div
      className={`relative ${className ? className : ""} cursor-pointer ${
        classes["prevent-select"]
      }`}
    >
      <p className="font-[500] text-sm md:text-base">{label}</p>
      <div
        className={`flex space-x-2 justify-between mt-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-lg  border ${
          hasError ? "bg-red-50 border-red-500" : "bg-gray-50"
        } text-sm md:text-base`}
        tabIndex={0}
        onClick={openDropDownHandler}
        onBlur={selectBlurHandler}
      >
        <p>{value}</p>
        <img
          src={require("../../../assets/down-arrow.png")}
          className={`w-3 ${isOpen ? "rotate-180" : ""} duration-300`}
        />
      </div>
      <ul
        className={`absolute z-10 top-full left-0 right-0 max-h-64 overflow-y-auto bg-white ${
          isOpen ? "block" : "hidden"
        } border rounded-lg`}
      >
        {options.map((item) => (
          <li
            className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base${
              item === value ? " bg-gray-200" : " hover:bg-gray-100"
            } `}
            key={item}
            onClick={() => {
              valueChangeHandler(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {hasError && (
        <p className="text-red-500 px-2 text-xs md:text-sm">invalid</p>
      )}
    </div>
  );
};
export default Select;
