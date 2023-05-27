import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { propertydataActions } from "../../../store/propertydata-slice";
const Textarea = ({ id, label, className, options }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const preValue = useSelector(
    (state) => state.propertydata.propertydata[id][label]
  );

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(
        propertydataActions.setPropertyData({
          id: id,
          name: label,
          value: value,
        })
      );
    }, 300);

    return () => {
      clearTimeout(identifier);
    };
  }, [dispatch, value]);

  useEffect(() => {
    if (preValue) {
      setValue(preValue);
    }
  }, [setValue]);

  return (
    <>
      <div className={`${className ? className : ""}`}>
        <label
          className="block font-[500] text-sm md:text-base px-1"
          htmlFor={label}
        >
          {label}
        </label>
        <textarea
          className="w-full h-32 resize-none outline-none bg-gray-50 border rounded-lg p-3 mt-2 text-sm md:text-base"
          value={value}
          id={label}
          {...options}
          onChange={valueChangeHandler}
        />
      </div>
    </>
  );
};
export default Textarea;
