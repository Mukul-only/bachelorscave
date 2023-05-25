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
      e.preventDefault();
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
  const { isFormValid, current, next } = useSelector(
    (state) => state.validation
  );
  const navigate = useNavigate();
  const clickHandler = () => {
    dispatch(validationActions.setIsTouched());
    if (isFormValid) {
      navigate(next);
      dispatch(validationActions.setSectionValidity(current));
      dispatch(validationActions.reset());
    }
  };
  return (
    <>
      <Card className="flex rounded-xl   shadow-lg  border">
        <div
          className={`hidden rounded-l-xl md:block py-12 px-4 ${classes.gradeint} text-white`}
        >
          <ListPropNavLink
            to="/listproperty"
            title="Property details"
            src={require("../../assets/listprop/home_.png")}
          />
          <ListPropNavLink
            to="/listproperty/localitydetails"
            title="Locality details"
            src={require("../../assets/listprop/location.png")}
          />
          <ListPropNavLink
            to="/listproperty/rentaldetails"
            title="Rental details"
            src={require("../../assets/listprop/buildings.png")}
          />
          <ListPropNavLink
            to="/listproperty/amenities"
            title="Amenities"
            src={require("../../assets/listprop/amenities.png")}
          />
          <ListPropNavLink
            to="/listproperty/gallery"
            title="Gallery"
            src={require("../../assets/listprop/gallery.png")}
          />
          <ListPropNavLink
            to="/listproperty/schedule"
            title="Schedule"
            src={require("../../assets/listprop/schedule.png")}
          />
        </div>
        <div className="flex-1 rounded-l-3xl md:-ml-4 bg-white p-10 rounded-r-xl">
          <props.Outlet />
        </div>
      </Card>
      <Button
        className="block bg-deepBlue mx-auto text-white p-3 my-12"
        onClick={clickHandler}
      >
        Save & Continue
      </Button>
    </>
  );
};
export default ListPropertyRoot;
