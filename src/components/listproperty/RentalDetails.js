import { useDispatch, useSelector } from "react-redux";
import Select from "./helper/Select";
import { useEffect, useState } from "react";
import { validationActions } from "../../store/validation-slice";
import Input from "./helper/Input";

import Checkbox from "./helper/Checkbox";
import Textarea from "./helper/Textarea";
import { propertydataActions } from "../../store/propertydata-slice";

const RentalDetails = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validationActions.setCurrent(2));
    dispatch(validationActions.setNext("/listproperty/amenities"));
    dispatch(validationActions.setPrev("/listproperty/localitydetails"));
  }, [dispatch]);

  const monthlyMaintenance = useSelector(
    (state) =>
      state.propertydata.propertydata["Rental details"]["Monthly Maintenance"]
  );
  useEffect(() => {
    if (monthlyMaintenance === "Maintenance Included") {
      dispatch(validationActions.removeFeildValidity("Maintenance Amount"));
      dispatch(
        propertydataActions.removePropertyData({
          id: "Rental details",
          name: "Maintenance Amount",
        })
      );
    }
  }, [monthlyMaintenance]);

  const currentDate = new Date().toJSON().slice(0, 10);

  const expectedRentRaw = useSelector(
    (state) =>
      state.propertydata.propertydata["Rental details"]["Expected Rent"]
  );
  let expectedRent;
  if (expectedRentRaw) expectedRent = parseInt(expectedRentRaw.trim());
  const depositRentRaw = useSelector(
    (state) =>
      state.propertydata.propertydata["Rental details"]["Expected Deposit"]
  );
  let depositRent;
  if (depositRentRaw) depositRent = parseInt(depositRentRaw.trim());

  const depositValidation = (value) => {
    if (parseInt(value) < expectedRent || value.trim() === "") {
      return false;
    } else {
      return true;
    }
  };

  const depositError = () => {
    if (depositRent < expectedRent) {
      return "Deposit can not be less than rent!";
    } else {
      return "Deposit is required!";
    }
  };

  return (
    <>
      <h1 className="text-lg md:text-xl font-semibold text-darkBlue">
        Rental details
      </h1>
      <hr className="border-t my-2 border-gray-300" />
      <Select
        id="Rental details"
        className="w-full md:w-1/2 mt-6"
        label="Property available for"
        options={["Rent", "Lease"]}
      />
      <div className="flex justify-between flex-col xl:flex-row xl:space-x-12 space-y-2 xl:space-y-0 mt-4">
        <Input
          id="Rental details"
          input={{
            type: "number",
            min: "1",

            placeholder: "Enter Amount",
          }}
          className="basis-1/2"
          label="Expected Rent"
          validation={(value) =>
            parseInt(value.trim()) <= 0 ? false : value.trim() !== ""
          }
          errMsg={`${
            expectedRent <= 0
              ? "Rent cannot be a negative value!"
              : expectedRent
              ? ""
              : "Rent is required!"
          }`}
          icon={{ left: "₹", right: "/month" }}
        />
        <Input
          id="Rental details"
          input={{
            type: "number",
            min: "1",

            placeholder: "Enter Amount",
          }}
          className="basis-1/2"
          label="Expected Deposit"
          validation={(value) => depositValidation(value)}
          errMsg={depositError()}
          icon={{ left: "₹" }}
        />
      </div>
      <Checkbox label="Rent Negotiable" className="mt-2" id="Rental details" />
      <div className="flex justify-between flex-col xl:flex-row xl:space-x-12 space-y-2 xl:space-y-0 mt-4">
        <Select
          id="Rental details"
          className="w-full md:w-1/2  "
          label="Monthly Maintenance"
          options={["Maintenance Included", "Maintenance Extra"]}
        />
        {monthlyMaintenance === "Maintenance Extra" && (
          <Input
            id="Rental details"
            input={{
              type: "number",
              min: "1",

              placeholder: "Enter Amount",
            }}
            className="basis-1/2"
            label="Maintenance Amount"
            validation={(value) => value.trim().length !== 0}
            errMsg="Maintenance Amount is required!"
            icon={{ left: "₹", right: "/ Month" }}
          />
        )}
      </div>
      <div className="flex justify-between flex-col xl:flex-row xl:space-x-12  space-y-2 xl:space-y-0 mt-4">
        <Input
          id="Rental details"
          input={{
            type: "date",
            min: currentDate,

            placeholder: "Enter Date",
          }}
          val={currentDate}
          className="basis-1/2 select-none"
          label="Available from"
          validation={(value) => value.trim().length !== 0}
          errMsg="This feild is required!"
        />
        <Select
          id="Rental details"
          className="w-full md:w-1/2  "
          label="Preferred tenants"
          options={["Does't matter", "Bachelors", "Students"]}
          src={require("../../assets/tenant.png")}
        />
      </div>
      <div className="flex justify-between flex-col md:flex-row xl:space-x-12 md:space-x-6 space-y-2 md:space-y-0 mt-4">
        <Select
          id="Rental details"
          className="w-full md:w-1/2  "
          label="Furnishing"
          options={["Fully furnished", "Semi-furnished", "Unfurnished"]}
          src={require("../../assets/cabinet.png")}
        />
        <Select
          id="Rental details"
          className="w-full md:w-1/2  "
          label="Parking"
          options={["Bike", "Car", "Both", "None"]}
          src={require("../../assets/parking-area.png")}
        />
      </div>
      <Textarea
        id="Rental details"
        label="Description"
        className="mt-12"
        options={{
          placeholder:
            "Write a few lines about your property something which is special and makes your property stand out. Please do not mention your contact details in any format.",
        }}
      />
    </>
  );
};
export default RentalDetails;
