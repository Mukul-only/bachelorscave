import { useDispatch } from "react-redux";
import Select from "./helper/Select";
import { useEffect } from "react";
import { validationActions } from "../../store/validation-slice";
import Input from "./helper/Input";

import Checkbox from "./helper/Checkbox";
import Textarea from "./helper/Textarea";

import Switch from "./helper/Switch";
const Amenities = (props) => {
  const dispatch = useDispatch();
  let phno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  useEffect(() => {
    dispatch(validationActions.setCurrent(3));
    dispatch(validationActions.setNext("/listproperty/gallery"));
    dispatch(validationActions.setPrev("/listproperty/rentaldetails"));
  }, [dispatch]);
  return (
    <>
      <h1 className="text-lg md:text-xl font-semibold text-darkBlue">
        Amenities
      </h1>
      <hr className="border-t my-2 border-gray-300" />
      <div className="flex justify-between flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4">
        <Select
          id="Amenities"
          className="basis-1/3"
          label="Bathroom(s)"
          options={["1 ", "2 ", "3 ", "4 ", "5 ", "5+ "]}
          src={require("../.././assets/bathroom.png")}
        />
        <Select
          id="Amenities"
          className="basis-1/3"
          label="Balcony"
          options={["1 ", "2 ", "3 ", "4 ", "5 ", "5+ "]}
          src={require("../.././assets/balcony.png")}
        />
        <Select
          id="Amenities"
          className="basis-1/3"
          label="Water supply"
          options={["Corporation", "Borewell", "Both"]}
          src={require("../.././assets/water-tap.png")}
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4 mt-6 items-center">
        <Switch
          id="Amenities"
          label="GYM"
          className=" "
          src={require("../../assets/dumbbell.png")}
        />
        <Switch
          id="Amenities"
          label="Non-Veg allowed"
          className=" "
          src={require("../../assets/no-meat.png")}
        />
        <Switch
          id="Amenities"
          label="Gated security"
          className=""
          src={require("../../assets/guard.png")}
        />
        <Switch
          id="Amenities"
          label="Smoking allowed"
          className=""
          src={require("../../assets/smoking.png")}
        />
      </div>
      <div className="flex justify-between flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0 mt-6">
        <Select
          id="Amenities"
          className="basis-1/2"
          label="Who will show the property?"
          options={[
            "Need help",
            "I will show",
            "Neighbours",
            "Friends/Relatives",
            "Security",
            "Tenants",
            "Others",
          ]}
        />
        <Input
          id="Amenities"
          input={{ type: "tel", placeholder: "Secondary number" }}
          className="basis-1/2"
          label="Secondary number"
          validation={(value) => {
            const res = value.match(phno);
            if (res) {
              return true;
            } else {
              return false;
            }
          }}
          errMsg="Enter a valid tel. (10 digits)"
          icon={{ src: require("../../assets/india.png"), left: "+91" }}
        />
      </div>
      <Textarea
        id="Amenities"
        label="Any direction tip for your tenants"
        className="mt-12"
        options={{
          placeholder:
            "Write a few lines about how to reach your property. Eg. Opposite to the Supermarket.",
        }}
      />
      <hr className="border-t my-12 border-gray-300" />
      <h1 className="text-lg md:text-xl font-semibold text-darkBlue">
        Select the available amenities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
        <Checkbox
          id="Amenities"
          label="Lift"
          className=""
          src={require("../../assets/Amenities/elevator.png")}
        />
        <Checkbox
          id="Amenities"
          label="Internet service"
          className=""
          src={require("../../assets/Amenities/internet.png")}
        />
        <Checkbox
          id="Amenities"
          label="Air conditioner"
          className=""
          src={require("../../assets/Amenities/air-conditioner.png")}
        />
        <Checkbox
          id="Amenities"
          label="Club house"
          className=""
          src={require("../../assets/Amenities/golf-club.png")}
        />
        <Checkbox
          id="Amenities"
          label="Intercom"
          className=""
          src={require("../../assets/Amenities/video-doorbell.png")}
        />
        <Checkbox
          id="Amenities"
          label="Swimming pool"
          className=""
          src={require("../../assets/Amenities/swimming.png")}
        />
        <Checkbox
          id="Amenities"
          label="Children play area"
          className=""
          src={require("../../assets/Amenities/playground.png")}
        />
        <Checkbox
          id="Amenities"
          label="Fire safety"
          className=""
          src={require("../../assets/Amenities/fire-extinguisher.png")}
        />
        <Checkbox
          id="Amenities"
          label="Servant room"
          className=""
          src={require("../../assets/Amenities/housekeeper.png")}
        />
        <Checkbox
          id="Amenities"
          label="Shoping cener"
          className=""
          src={require("../../assets/Amenities/shopping-mall.png")}
        />
        <Checkbox
          id="Amenities"
          label="Gas pipeline"
          className=""
          src={require("../../assets/Amenities/gas-pipe.png")}
        />
        <Checkbox
          id="Amenities"
          label="Park"
          className=""
          src={require("../../assets/Amenities/park.png")}
        />
        <Checkbox
          id="Amenities"
          label="Rain water harvesting"
          className=""
          src={require("../../assets/Amenities/rain.png")}
        />
        <Checkbox
          id="Amenities"
          label="Seawage treatement plant"
          className=""
          src={require("../../assets/Amenities/plant.png")}
        />
        <Checkbox
          id="Amenities"
          label="House keeping"
          className=""
          src={require("../../assets/Amenities/cleaner.png")}
        />
        <Checkbox
          id="Amenities"
          label="Power backup"
          className=""
          src={require("../../assets/Amenities/electric-generator.png")}
        />
        <Checkbox
          id="Amenities"
          label="Visitor parking"
          className=""
          src={require("../../assets/Amenities/parking-lot.png")}
        />
      </div>
    </>
  );
};
export default Amenities;
