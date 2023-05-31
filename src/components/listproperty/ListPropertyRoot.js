import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./Styels.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { validationActions } from "../../store/validation-slice";
import { useEffect, useState } from "react";
import { propertydataActions } from "../../store/propertydata-slice";
import Loader from "./Loader";
const ListPropNavLink = (props) => {
  const { isFormValid, current } = useSelector((state) => state.validation);
  const dispatch = useDispatch();
  const navigateClickHandler = (e) => {
    dispatch(validationActions.setIsTouched());
    if (!isFormValid) {
      if (props.id > current) {
        e.preventDefault();
      } else {
        dispatch(validationActions.reset());
      }
    } else {
      dispatch(validationActions.setSectionValidity(current));

      dispatch(validationActions.reset());
    }
  };

  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? classes.active : "")}
      onClick={navigateClickHandler}
      end
    >
      <div
        className={`flex space-x-2 items-center p-4 rounded-l-full ${classes.hov}`}
      >
        <img src={props.src} className={`w-6`} />
        <p>{props.title}</p>
      </div>
    </NavLink>
  );
};

const ListPropertyRoot = (props) => {
  const dispatch = useDispatch();
  const { isListpropertyValid, isFormValid, current, next, prev, isTouched } =
    useSelector((state) => state.validation);
  const navigate = useNavigate();
  const hasError = isTouched && current === 5 && !isListpropertyValid;
  const goToNextHandler = () => {
    dispatch(validationActions.setIsTouched());
    if (isFormValid && current !== 5) {
      navigate(next);
      dispatch(validationActions.setSectionValidity(current));
      dispatch(validationActions.reset());
    } else if (isFormValid && current === 5 && isListpropertyValid) {
      alert("success");
    }
  };
  const goToPrevHandler = () => {
    navigate(prev);

    dispatch(validationActions.reset());
    if (isFormValid) {
      dispatch(validationActions.setSectionValidity(current));
    }
  };

  return (
    <>
      <Card className="flex flex-col md:flex-row py-8 items-center justify-between space-y-6 md:space-y-0">
        <h1 className="text-3xl md:ml-4 text-darkBlue">List Property</h1>
        <Loader className=" md:mr-6" />
      </Card>
      <Card className="flex rounded-xl   shadow-lg  border ">
        <div
          className={`hidden rounded-l-xl md:block py-12 md:px-2 xl:px-4 ${classes.gradeint} text-white`}
        >
          <ListPropNavLink
            id={0}
            to="/listproperty"
            title="Property details"
            src={require("../../assets/listprop/home_.png")}
          />
          <ListPropNavLink
            id={1}
            to="/listproperty/localitydetails"
            title="Locality details"
            src={require("../../assets/listprop/location.png")}
          />
          <ListPropNavLink
            id={2}
            to="/listproperty/rentaldetails"
            title="Rental details"
            src={require("../../assets/listprop/buildings.png")}
          />
          <ListPropNavLink
            id={3}
            to="/listproperty/amenities"
            title="Amenities"
            src={require("../../assets/listprop/amenities.png")}
          />
          <ListPropNavLink
            id={4}
            to="/listproperty/gallery"
            title="Gallery"
            src={require("../../assets/listprop/gallery.png")}
          />
          <ListPropNavLink
            id={5}
            to="/listproperty/schedule"
            title="Schedule"
            src={require("../../assets/listprop/schedule.png")}
          />
        </div>
        <div className="flex-1 w-0 rounded-l-3xl md:-ml-4 bg-white p-6 md:p-7 xl:p-10 rounded-r-xl ">
          <props.Outlet />
        </div>
      </Card>
      {hasError && (
        <Card className="mt-4">
          <p className="text-red-500 px-2 text-xs md:text-sm mt-2 ">
            You have missed some section please complete them!
          </p>
        </Card>
      )}
      <div className="mx-auto w-max py-12 space-x-4 text-sm md:text-base">
        {current !== 0 && (
          <Button
            className="w-32 py-2 md:py-3 hover:bg-deepBlue hover:text-white duration-300 "
            onClick={goToPrevHandler}
          >
            Back
          </Button>
        )}

        <Button
          className=" bg-deepBlue text-white  p-2 md:p-3   hover:bg-opacity-90"
          onClick={goToNextHandler}
        >
          {current !== 5 ? "Save & Continue" : "Finish Posting"}
        </Button>
      </div>
    </>
  );
};
export default ListPropertyRoot;
