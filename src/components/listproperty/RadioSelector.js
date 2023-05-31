import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { validationActions } from "../../store/validation-slice";
import { propertydataActions } from "../../store/propertydata-slice";

const RadioBox = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`flex flex-col  justify-center items-center text-center rounded-lg border w-max px-4 py-2 xl:px-12 xl:py-3 cursor-pointer select-none duration-300 ${
        props.active
          ? "bg-cyan-50 border-cyan-600"
          : "hover:bg-cyan-50 hover:border-cyan-400"
      } `}
    >
      <img src={props.src} className="w-6 xl:w-10 mb-2" />
      <h1 className="text-sm xl:text-lg font-semibold">{props.title}</h1>
      <p className="text-xs xl:text-sm">{props.des}</p>
    </div>
  );
};

const RadioSelector = ({ id, label }) => {
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
    <>
      <div className="flex gap-3 flex-wrap">
        <RadioBox
          src={require("../../assets/routine.png")}
          title="Everyday"
          des="Mon-Sun"
          onClick={() => {
            clickHandler("Everyday");
          }}
          active={value === "Everyday" ? true : false}
        />
        <RadioBox
          src={require("../../assets/weekday.png")}
          title="Weekday"
          des="Mon-Fri"
          onClick={() => {
            clickHandler("Weekday");
          }}
          active={value === "Weekday" ? true : false}
        />
        <RadioBox
          src={require("../../assets/weekend.png")}
          title="Weekend"
          des="Sat-Sun"
          onClick={() => {
            clickHandler("Weekend");
          }}
          active={value === "Weekend" ? true : false}
        />
      </div>
      {hasError && (
        <p className="text-red-500 px-2 text-xs md:text-sm mt-2">
          This feild is required!
        </p>
      )}
    </>
  );
};

export default RadioSelector;
