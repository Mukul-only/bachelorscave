import useInput from "../../../hook/use-input";
import { useDispatch, useSelector } from "react-redux";
import { validationActions } from "../../../store/validation-slice";
import { useEffect } from "react";
import { propertydataActions } from "../../../store/propertydata-slice";
const Input = ({ id, label, input, validation, className, errMsg, val }) => {
  const dispatch = useDispatch();
  const { isTouched } = useSelector((state) => state.validation);
  const {
    value,
    isValid,
    hasError,
    setIsTouched,
    setInput,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((value) => validation(value));

  const preValue = useSelector(
    (state) => state.propertydata.propertydata[id][label]
  );
  useEffect(() => {
    if (preValue) {
      setInput(preValue);
    }
  }, [setInput]);

  useEffect(() => {
    if (val) {
      setInput(val);
    }
  }, [val, setInput]);

  useEffect(() => {
    dispatch(
      validationActions.setFeildValidity({ id: label, isValid: isValid })
    );
  }, [dispatch, isValid, label]);
  useEffect(() => {
    setIsTouched(isTouched);
  }, [isTouched]);
  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(
        propertydataActions.setPropertyData({
          id: id,
          name: label,
          value: value,
        })
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [dispatch, value]);
  return (
    <div className={`${className ? className : ""}`}>
      <label className="block font-[500] text-sm md:text-base" htmlFor={label}>
        {label}
      </label>
      <input
        className={`mt-1 md:mt-2 w-full outline-none px-2 py-1 md:px-4 md:py-2 rounded-lg border text-sm md:text-base ${
          hasError ? "bg-red-50 border-red-500" : "bg-gray-50"
        }`}
        {...input}
        value={value}
        id={label}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
      />
      {hasError && (
        <p className="text-red-500 px-2 text-xs md:text-sm">{errMsg}</p>
      )}
    </div>
  );
};
export default Input;
