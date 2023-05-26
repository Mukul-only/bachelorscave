import { useDispatch, useSelector } from "react-redux";
import Select from "./helper/Select";
import { useEffect, useState } from "react";
import { validationActions } from "../../store/validation-slice";
import Input from "./helper/Input";
import useBuildAreaValidation from "./helper/use-BuildAreaValidation";

const PropertyDetails = (props) => {
  const dispatch = useDispatch();

  const totalFloor = useSelector(
    (state) =>
      state.propertydata.propertydata["Property details"]["Total floor"]
  );
  const floor = useSelector(
    (state) => state.propertydata.propertydata["Property details"].Floor
  );
  const totalFloorValidation = (value) => {
    return parseInt(value.trim()) <= 99 && parseInt(value.trim()) >= 0;
  };
  const floorValidation = (value) => {
    const val = parseInt(value.trim());

    return val < 99 && val >= 0 && val <= totalFloor;
  };
  const [er, setEr] = useState("");
  const BuildValidation = (value) => {
    const { valid, errMsg } = useBuildAreaValidation(value);
    useEffect(() => {
      setEr(errMsg);
    }, [errMsg]);
    return valid;
  };

  useEffect(() => {
    dispatch(validationActions.setCurrent(0));
    dispatch(validationActions.setNext("/listproperty/localitydetails"));
  }, [dispatch]);

  return (
    <>
      <h1 className="text-lg md:text-xl font-semibold text-darkBlue">
        Property details
      </h1>
      <hr className="border-t my-2 border-gray-300" />
      <Select
        id="Property details"
        className="w-full md:w-1/2 mt-6"
        label="Apartement Type"
        options={[
          "Apartement",
          "Independent House/Villa",
          "Gated community villa",
        ]}
      />
      <div className="flex justify-between flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4">
        <Select
          id="Property details"
          className="basis-1/3"
          label="BHK Type"
          options={["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "5+ BHK"]}
        />
        <Input
          id="Property details"
          input={{
            type: "number",
            min: "1",
            max: "99",
            placeholder: "Enter total floor",
          }}
          className="basis-1/3"
          label="Total floor"
          validation={(value) => totalFloorValidation(value)}
          errMsg="total floor must be between 0 and 99"
        />
        <Input
          id="Property details"
          input={{
            type: "number",
            min: "1",
            max: "99",
            placeholder: "Enter floor",
          }}
          className="basis-1/3"
          label="Floor"
          validation={(value) => floorValidation(value)}
          errMsg={
            floor > totalFloor
              ? `floor must be less than total floor (${totalFloor})`
              : "floor must be between 0 and 99"
          }
        />
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0  md:space-x-6 mt-4">
        <Select
          id="Property details"
          className="basis-1/2"
          label="Property age"
          options={[
            "Less than a year",
            "1 to 3 years",
            "5 to 10 years",
            "More than 10 years",
          ]}
        />
        <Select
          id="Property details"
          className="basis-1/2"
          label="Facing"
          options={[
            "North ",
            "East",
            "West",
            "South",
            "North-East",
            "South-East",
            "North-West",
            "South-West",
            "Don't know",
          ]}
        />
      </div>
      <Input
        id="Property details"
        input={{
          type: "number",
          min: "1",
          placeholder: "area sqft.",
        }}
        className="w-full md:w-1/3 mt-4"
        label="Built up area in sq.ft"
        validation={(value) => {
          return BuildValidation(value);
        }}
        errMsg={er}
      />
    </>
  );
};
export default PropertyDetails;
