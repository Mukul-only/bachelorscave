import { useDispatch, useSelector } from "react-redux";
import BackIcon from "../../svgComponents/BackIcon";
import { Icon } from "./MainNavigation";
import { uiActions } from "../../store/ui-slice";
import { CSSTransition } from "react-transition-group";
import Grid from "../../svgComponents/NavSvgs/Grid";
import Buildingsvg from "../../svgComponents/NavSvgs/Buildingsvg";
import About from "../../svgComponents/NavSvgs/About";
import Agreement from "../../svgComponents/NavSvgs/Agreement";
import Clipboard from "../../svgComponents/NavSvgs/Clipboard";
import Handshake from "../../svgComponents/NavSvgs/Handshake";
import Trending from "../../svgComponents/NavSvgs/Trending";
import UserVerified from "../../svgComponents/NavSvgs/UserVerified";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = (props) => {
  const dispatch = useDispatch();
  const navCloseHandler = () => {
    dispatch(uiActions.toogle(0));
  };
  const { mobileNavVisible } = useSelector((state) => state.ui);
  return (
    <CSSTransition
      in={mobileNavVisible}
      timeout={600}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: "slide-right",
        exitActive: "slide-left",
      }}
    >
      <div className="flex flex-col top-0 bottom-0 left-0  bg-white fixed z-30 shadow-mobile-nav overflow-y-auto">
        <div className=" flex justify-between h-28  w-full px-8 items-end pb-6 rounded-b-3xl bg-Purple-100 ">
          <Link to="/" onClick={navCloseHandler}>
            <Icon className="w-10 h-10" />
          </Link>
          <span
            className="block relative w-7 h-7 cursor-pointer"
            onClick={navCloseHandler}
          >
            <BackIcon className="w-full h-full" />
          </span>
        </div>
        <div className="flex flex-col px-6 mr-4">
          <Heading>Explore</Heading>
          <NavItems to="/dashboard" svg={Grid} label="Dashboard" />
          <NavItems
            to="/listproperty"
            svg={Buildingsvg}
            label="List Property"
          />
          <Heading>Content</Heading>
          <NavItems to="/guides" svg={Clipboard} label="Guides" />
          <NavItems
            to="/trendingproperty"
            svg={Trending}
            label="Trending Property"
          />
          <Heading>Legal Assistance</Heading>
          <NavItems
            to="/rentalagreement"
            svg={Agreement}
            label="Rental Agreement"
          />
          <NavItems
            to="/tenantverification"
            svg={UserVerified}
            label="Tenant Verification"
          />
          <Heading>Support</Heading>
          <NavItems to="/help" svg={Handshake} label="Help" />
          <NavItems to="/aboutus" svg={About} label="About us" />
        </div>
      </div>
    </CSSTransition>
  );
};
export default MobileMenu;

const Heading = (props) => {
  return (
    <h1 className="text-base font-normal tracking-tight mt-6 mb-2 text-gray-500">
      {props.children}
    </h1>
  );
};

const NavItems = (props) => {
  const dispatch = useDispatch();
  const navClickHandler = () => {
    dispatch(uiActions.toogle(0));
  };
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? "nav-active" : "")}
      onClick={navClickHandler}
    >
      <div className="flex  space-x-3 items-center my-1 rounded-lg pl-3 pr-2">
        <span className="relative block w-6 h-6">
          <props.svg className="w-full h-full " />
        </span>
        <p className="text-lg font-[500] text-Brown">{props.label}</p>
      </div>
    </NavLink>
  );
};
