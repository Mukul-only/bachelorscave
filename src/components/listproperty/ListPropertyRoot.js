import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import { useState } from "react";
import classes from "./Styels.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { validationActions } from "../../store/validation-slice";
import homeSvg from "../../assets/completedListing.svg";
import Loader from "./Loader";
import { propertydataActions } from "../../store/propertydata-slice";
import Modal from "../../UI/Modal";
import ErrorPopout from "./ErrorPopout";
const ListPropNavLink = (props) => {
  const { isFormValid, current } = useSelector((state) => state.validation);

  const dispatch = useDispatch();
  const navigateClickHandler = (e) => {
    dispatch(validationActions.setIsTouched());
    if (!isFormValid) {
      if (props.id > current) {
        e.preventDefault();
        props.state((prev) => !prev);
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
        <img src={props.src} className={`w-6`} alt="img" />
        <p>{props.title}</p>
      </div>
    </NavLink>
  );
};

const ListPropertyRoot = (props) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { isListpropertyValid, isFormValid, current, next, prev, isTouched } =
    useSelector((state) => state.validation);
  const [showModal, setShowModal] = useState(false);
  const { propertydata } = useSelector((state) => state.propertydata);
  const navigate = useNavigate();
  const hasError = isTouched && current === 5 && !isListpropertyValid;
  const [showPopout, setShowPopout] = useState(false);
  const goToNextHandler = () => {
    dispatch(validationActions.setIsTouched());
    if (isFormValid && current !== 5) {
      window.scrollTo(0, 0);
      navigate(next);
      dispatch(validationActions.setSectionValidity(current));
      dispatch(validationActions.reset());
    } else if (isFormValid && current === 5 && isListpropertyValid) {
      console.log("success");

      const data = { ...propertydata };
      delete data.Gallery;
      submitForm(JSON.stringify(data));
    } else {
      setShowPopout((prev) => !prev);
    }
  };

  const modalHandler = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  const submitForm = async (data) => {
    try {
      setIsSubmitting(true);
      setError(null);
      const response = await fetch(
        "https://bachelors-cave-26141-default-rtdb.firebaseio.com/propertydata.json",
        {
          method: "POST",
          body: data,
        }
      );
      if (!response.ok) {
        throw new Error(`Error code :${response.status}`);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsSubmitting(false);

    modalHandler();
  };

  const goToPrevHandler = () => {
    window.scrollTo(0, 0);
    navigate(prev);

    dispatch(validationActions.reset());
    if (isFormValid) {
      dispatch(validationActions.setSectionValidity(current));
    }
  };

  const removeModalHandler = () => {
    dispatch(propertydataActions.finalReset());
    dispatch(validationActions.finalReset());
    setShowModal(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <>
      <ErrorPopout state={showPopout} />
      <Card className="flex flex-col md:flex-row py-8 items-center justify-between space-y-6 md:space-y-0">
        <h1 className="text-xl  md:text-3xl md:ml-4 text-darkBlue tracking-in-contract ">
          List Property
        </h1>
        <Loader className=" md:mr-6" />
      </Card>
      <Card className="flex rounded-xl   shadow-lg  border fade-in-top">
        <div
          className={`hidden rounded-l-xl md:block py-12 md:px-2 xl:px-4 ${classes.gradeint} text-white`}
        >
          <ListPropNavLink
            id={0}
            to="/listproperty"
            title="Property details"
            src={require("../../assets/listprop/home_.png")}
            state={setShowPopout}
          />
          <ListPropNavLink
            id={1}
            to="/listproperty/localitydetails"
            title="Locality details"
            src={require("../../assets/listprop/location.png")}
            state={setShowPopout}
          />
          <ListPropNavLink
            id={2}
            to="/listproperty/rentaldetails"
            title="Rental details"
            src={require("../../assets/listprop/buildings.png")}
            state={setShowPopout}
          />
          <ListPropNavLink
            id={3}
            to="/listproperty/amenities"
            title="Amenities"
            src={require("../../assets/listprop/amenities.png")}
            state={setShowPopout}
          />
          <ListPropNavLink
            id={4}
            to="/listproperty/gallery"
            title="Gallery"
            src={require("../../assets/listprop/gallery.png")}
            state={setShowPopout}
          />
          <ListPropNavLink
            id={5}
            to="/listproperty/schedule"
            title="Schedule"
            src={require("../../assets/listprop/schedule.png")}
            state={setShowPopout}
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
      {error && (
        <Card className="mt-4">
          <p className="text-red-500 px-2 text-xs md:text-sm mt-2 ">{error}</p>
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
          className={`bg-deepBlue text-white  p-2 md:p-3   hover:bg-opacity-90 ${
            isSubmitting ? "cursor-not-allowed" : ""
          }`}
          onClick={goToNextHandler}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
            : current !== 5
            ? "Save & Continue"
            : "Finish Posting"}
        </Button>
      </div>

      <Modal
        heading="Successfully Submitted"
        text="Congratulations your property is now successfully listed"
        src={homeSvg}
        btnLabel="Continue"
        onClick={removeModalHandler}
        showModal={showModal}
      />
    </>
  );
};
export default ListPropertyRoot;
