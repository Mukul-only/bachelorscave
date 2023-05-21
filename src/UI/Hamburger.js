import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import classes from "./Hamburger.module.css";
const Hamburger = (props) => {
  const mobileNavVisible = useSelector((state) => state.ui.mobileNavVisible);
  const dispatch = useDispatch();
  const hamburgerClickHandler = () => {
    dispatch(uiActions.toogle());
  };
  return (
    <>
      <div
        className={`${classes.plates} ${
          props.className ? props.className : ""
        }`}
        onClick={hamburgerClickHandler}
      >
        <div
          className={`${classes.plate} ${classes.plate5} ${
            mobileNavVisible ? classes.active : ""
          }`}
        >
          <svg
            className={classes.burger}
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className={`${classes.line} ${classes.line1}`}
              d="M 30,35 H 70"
            />
            <path
              className={`${classes.line} ${classes.line2}`}
              d="M 50,50 H 30 L 34,32"
            />
            <path
              className={`${classes.line} ${classes.line3}`}
              d="M 50,50 H 70 L 66,68"
            />
            <path
              className={`${classes.line} ${classes.line4}`}
              d="M 30,65 H 70 "
            />
          </svg>
          <svg
            className={classes.x}
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className={classes.line} d="M 34,32 L 66,68" />
            <path className={classes.line} d="M 66,32 L 34,68" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
