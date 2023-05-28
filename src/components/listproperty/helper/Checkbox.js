import { useDispatch, useSelector } from "react-redux";
import { validationActions } from "../../../store/validation-slice";
import { useEffect, useState } from "react";
import { propertydataActions } from "../../../store/propertydata-slice";

const Checkbox = ({ id, label, className, src }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const checkHandler = (e) => {
    setChecked(e.target.checked);
  };
  const preValue = useSelector(
    (state) => state.propertydata.propertydata[id][label]
  );

  useEffect(() => {
    if (preValue) {
      setChecked(preValue);
    }
  }, [setChecked]);
  useEffect(() => {
    dispatch(
      propertydataActions.setPropertyData({
        id: id,
        name: label,
        value: checked,
      })
    );
  }, [checked, dispatch]);
  return (
    <>
      <div
        className={`flex cursor-pointer items-center  ${
          className ? className : ""
        }`}
      >
        <input
          type="checkbox"
          id={label}
          className="cursor-pointer"
          onChange={checkHandler}
          checked={checked}
        />

        <label
          className="flex items-center space-x-2 font-[500] select-none text-sm md:text-base cursor-pointer px-2"
          htmlFor={label}
        >
          {src && <img src={src} className="w-8" />}
          <p>{label}</p>
        </label>
      </div>
    </>
  );
};
export default Checkbox;
