import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Card from "../../UI/Card";
import { UserBtn } from "./MainNavigation";
import AnimateHeight from "react-animate-height";

const MobileNavItem = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? "font-semibold text-lg" : "")}
      end
      onClick={props.onClick}
    >
      <div className="flex space-x-2 items-center">
        <img src={props.src} className="w-6" />
        <p>{props.title}</p>
      </div>
    </NavLink>
  );
};

const MobileMenu = (props) => {
  const dispatch = useDispatch();
  const { mobileNavVisible } = useSelector((state) => state.ui);

  const pageChagneHandler = () => {
    dispatch(uiActions.toogle());
  };

  const height = mobileNavVisible ? "auto" : 0;

  return (
    <AnimateHeight
      height={height}
      duration={400}
      easing="ease-in-out"
      className={` xl:hidden bg-white`}
    >
      <Card className="flex flex-col py-6 space-y-2">
        <MobileNavItem
          to="/"
          onClick={pageChagneHandler}
          src={require("../../assets/home.png")}
          title="Home"
        />
        <hr className="w-full border-t border-stone-200" />
        <MobileNavItem
          to="/help"
          onClick={pageChagneHandler}
          src={require("../../assets/support.png")}
          title="Help"
        />

        <hr className="w-full border-t border-stone-200" />
        <MobileNavItem
          to="/aboutus"
          onClick={pageChagneHandler}
          src={require("../../assets/about.png")}
          title="About Us"
        />

        <hr className="w-full border-t border-stone-200" />
        <UserBtn className="flex justify-center pt-6" />
      </Card>
    </AnimateHeight>
  );
};
export default MobileMenu;
