import Card from "../../UI/Card";
import ReactDOM from "react-dom";
import Button from "../../UI/Button";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import BrandIcon from "../../svgComponents/BrandIcon";
import Hamburger from "../../svgComponents/Hamburger";
import SearchIcon from "../../svgComponents/SearchIcon";
import MobileMenu from "./MobileMenu";
export const Icon = (props) => {
  return (
    <span className={`block relative  ${props.className}`}>
      <BrandIcon className="w-full h-full" />
    </span>
  );
};
export const Brand = (props) => {
  return (
    <Link className="flex space-x-2 items-center " to="/">
      <Icon className="xl:h-10 xl:w-10 h-8 w-8" />
      <h1
        className={`text-xl md:text-2xl ${
          props.className ? props.className : ""
        }`}
      >
        Bachelors Cave
      </h1>
    </Link>
  );
};

export const UserBtn = (props) => {
  return (
    <div className={` items-center  ${props.className ? props.className : ""}`}>
      <Button className="w-28 py-1 border border-black text-black hover:bg-black duration-300 hover:text-white font-semibold">
        Register
      </Button>
    </div>
  );
};

const MainNavigation = (props) => {
  const dispatch = useDispatch();

  const pageChangeHandler = () => {
    dispatch(uiActions.toogle(0));
  };
  const { mobileNavVisible } = useSelector((state) => state.ui);
  const overlay = document.querySelector("#overlay");
  const navOpenHandler = () => {
    dispatch(uiActions.toogle());
  };
  return (
    <>
      <div className={`fixed w-screen top-0 z-20 shadow-lg  bg-white`}>
        <Card className="flex justify-between py-2 xl:py-2">
          <div className="flex items-center gap-4">
            <span
              className="relative w-6 h-6 xl:hidden cursor-pointer"
              onClick={navOpenHandler}
            >
              <Hamburger className="w-full h-full" />
            </span>
            <Brand className="hidden md:block text-black" />
          </div>

          <div className="flex space-x-2 xl:space-x-6 items-center">
            <span className="relative w-10 h-5 flex ">
              <SearchIcon className="w-full h-full" />
            </span>
            <Link to="/listproperty" onClick={pageChangeHandler}>
              <button className="px-4 text-sm md:text-base rounded-full tracking-tight py-1 h-max font-semibold text-black ">
                List property
              </button>
            </Link>
            <UserBtn className="hidden xl:flex" />
          </div>
        </Card>
      </div>

      {ReactDOM.createPortal(<MobileMenu />, overlay)}
    </>
  );
};
export default MainNavigation;
