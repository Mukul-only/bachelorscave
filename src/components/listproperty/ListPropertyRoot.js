import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./Styels.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { validationActions } from "../../store/validation-slice";
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
  const { isFormValid, current, next, prev } = useSelector(
    (state) => state.validation
  );
  const navigate = useNavigate();
  const goToNextHandler = () => {
    dispatch(validationActions.setIsTouched());
    if (isFormValid) {
      navigate(next);
      dispatch(validationActions.setSectionValidity(current));
      dispatch(validationActions.reset());
    }
  };
  const goToPrevHandler = () => {
    navigate(prev);
    dispatch(validationActions.reset());
  };
  return (
    <>
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
        <div className="flex-1 rounded-l-3xl md:-ml-4 bg-white p-6 md:p-7 xl:p-10 rounded-r-xl ">
          <props.Outlet />
        </div>
      </Card>
      <div className="mx-auto w-max space-x-4 text-sm md:text-base">
        {current !== 0 && (
          <Button
            className="w-32 py-2 md:py-3 hover:bg-deepBlue hover:text-white duration-300 "
            onClick={goToPrevHandler}
          >
            Back
          </Button>
        )}
        {current !== 5 && (
          <Button
            className=" bg-deepBlue text-white  p-2 md:p-3  my-12 hover:bg-opacity-90"
            onClick={goToNextHandler}
          >
            Save & Continue
          </Button>
        )}
      </div>
    </>
  );
};
export default ListPropertyRoot;
