import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const NavigationLink = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? classes.active : "")}
      end
    >
      <div className="group ">
        <p>{props.title}</p>
        <span className={`${classes.underline} group-hover:scale-100`} />
      </div>
    </NavLink>
  );
};
export default NavigationLink;
