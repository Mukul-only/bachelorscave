import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { validationActions } from "../../store/validation-slice";
import RadioSelector from "./RadioSelector";
import Select from "./helper/Select";
import Checkbox from "./helper/Checkbox";

const timeOptions = [
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
];

const Schedule = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validationActions.setCurrent(5));
    dispatch(validationActions.setPrev("/listproperty/gallery"));
  }, [dispatch]);
  const available = useSelector(
    (state) => state.propertydata.propertydata.Schedule["Available all day"]
  );

  const startTime = useSelector(
    (state) => state.propertydata.propertydata.Schedule["Start time"]
  );

  const endTimeValidation = (val) => {
    if (startTime) {
      const startTimeIndex = timeOptions.findIndex(
        (item) => item === startTime
      );
      const endTimeIndex = timeOptions.findIndex((item) => item === val);
      if (
        startTimeIndex >= endTimeIndex &&
        startTimeIndex !== -1 &&
        endTimeIndex !== -1
      ) {
        return {
          state: false,
          errMsg: "End time cannot be less than Start time",
        };
      } else {
        return { state: true, errMsg: "" };
      }
    }
  };

  return (
    <>
      <h1 className="text-lg md:text-xl font-semibold text-darkBlue">
        Schedule visit
      </h1>
      <hr className="border-t my-2 border-gray-300" />
      <h1 className="text-lg  font-semibold mb-2 mt-6">Availability</h1>
      <RadioSelector id="Schedule" label="Availability" />
      <h1 className="text-lg  font-semibold mb-2 mt-6">Select time schedule</h1>
      <div className="flex justify-between flex-col md:flex-row md:space-x-12  space-y-2 md:space-y-0 ">
        <Select
          id="Schedule"
          className="w-full md:w-1/2  "
          label="Start time"
          options={timeOptions}
          src={require("../../assets/clock.png")}
          selected={available ? "7:00 AM" : false}
          disabled={available ? true : false}
        />
        <Select
          id="Schedule"
          className="w-full md:w-1/2  "
          label="End time"
          options={timeOptions}
          src={require("../../assets/clock (1).png")}
          selected={available ? "10:00 PM" : false}
          disabled={available ? true : false}
          validation={(value) => endTimeValidation(value)}
        />
      </div>
      <Checkbox id="Schedule" label="Available all day" className="mt-2" />
    </>
  );
};
export default Schedule;
