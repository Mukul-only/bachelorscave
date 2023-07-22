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
    <Link className="flex items-center space-x-2 " to="/">
      <Icon className="w-8 h-8 xl:h-10 xl:w-10" />
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
      <Button className="py-1 font-semibold text-black duration-300 border border-black w-28 hover:bg-black hover:text-white">
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
      <div className={`sticky left-0 right-0 top-0 z-40 shadow-lg  bg-white`}>
        <Card className="flex justify-between py-2 xl:py-2">
          <div className="flex items-center gap-4">
            <span
              className="relative w-6 h-6 cursor-pointer xl:hidden"
              onClick={navOpenHandler}
            >
              <Hamburger className="w-full h-full" />
            </span>
            <Brand className="hidden text-black md:block" />
          </div>

          <div className="flex items-center space-x-2 xl:space-x-6">
            <span className="relative flex w-10 h-5 ">
              <SearchIcon className="w-full h-full" />
            </span>
            <Link to="/listproperty" onClick={pageChangeHandler}>
              <button className="px-4 py-1 text-sm font-semibold tracking-tight text-black rounded-full md:text-base h-max ">
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
