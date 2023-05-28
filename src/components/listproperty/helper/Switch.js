import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { validationActions } from "../../../store/validation-slice";
import { propertydataActions } from "../../../store/propertydata-slice";

const Switch = ({ id, label, src, className }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { isTouched } = useSelector((state) => state.validation);
  const isValid = value.trim().length !== 0;
  const hasError = isTouched && !isValid;
  const preValue = useSelector(
    (state) => state.propertydata.propertydata[id][label]
  );
  useEffect(() => {
    if (preValue) {
      setValue(preValue);
    }
  }, [setValue]);
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

  const clickHandler = (val) => {
    setValue(val);
  };

  return (
    <div>
      <div
        className={`flex justify-between space-x-3 border p-2 rounded-lg items-center text-center text-sm  ${
          className ? className : ""
        } ${hasError ? "border-red-400 bg-red-50" : "bg-gray-50 "} `}
      >
        <img src={src} className="w-8" />
        <p>{label}</p>
        <div className="flex space-x-1 text-sm">
          <button
            className={`w-12 py-1 border rounded-md ${
              value === "No" ? "border-red-400 bg-red-50" : "border-darkBlue"
            }`}
            onClick={() => {
              clickHandler("No");
            }}
          >
            No
          </button>
          <button
            className={`w-12 py-1 border rounded-md ${
              value === "Yes"
                ? "border-green-500 bg-green-50"
                : "border-darkBlue"
            }`}
            onClick={() => {
              clickHandler("Yes");
            }}
          >
            Yes
          </button>
        </div>
      </div>
      {hasError && (
        <p className="text-red-500 px-2 text-xs md:text-sm">
          This feild is required!
        </p>
      )}
    </div>
  );
};
export default Switch;
