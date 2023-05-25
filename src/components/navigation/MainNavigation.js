import NavigationLink from "./NavigationLink";
import Card from "../../UI/Card";
import brandlogo from "../../assets/brand/deal.svg";
import Button from "../../UI/Button";
import Hamburger from "../../UI/Hamburger";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import MobileMenu from "./MobileMenu";
export const Brand = (props) => (
  <div className="flex space-x-2 items-center">
    <img src={brandlogo} alt="brand" className=" w-14 md:w-12" />
    <h1
      className={`text-xl md:text-2xl ${
        props.className ? props.className : ""
      }`}
    >
      Bachelors Cave
    </h1>
  </div>
);

export const UserBtn = (props) => {
  return (
    <div
      className={` items-center space-x-3 ${
        props.className ? props.className : ""
      }`}
    >
      <Button className="w-28 py-2 hover:bg-darkBlue duration-300 hover:text-white font-semibold">
        Login
      </Button>
      <Button className="w-28 py-2 hover:bg-darkBlue duration-300 hover:text-white font-semibold">
        Signup
      </Button>
    </div>
  );
};

const MainNavigation = (props) => {
  const dispatch = useDispatch();
  const pageChangeHandler = () => {
    dispatch(uiActions.toogle(0));
  };
  return (
    <>
      <div className="relative z-10 shadow-lg bg-white">
        <Card className="flex justify-between xl:py-3">
          <Brand className="hidden md:block" />
          <div className="xl:flex space-x-6 items-center hidden">
            <NavigationLink to="/" title="Home" />
            <NavigationLink to="/help" title="Help" />
            <NavigationLink to="/aboutus" title="About Us" />
          </div>
          <div className="flex space-x-2 items-center">
            <Link to="/listproperty" onClick={pageChangeHandler}>
              <button className="px-4 text-sm md:text-base rounded-full py-1 h-max text-semibold bg-deepBlue text-white  hover:bg-opacity-90">
                List property
              </button>
            </Link>
            <UserBtn className="hidden xl:flex" />
            <Hamburger className="flex xl:hidden cursor-pointer" />
          </div>
        </Card>
      </div>
      <MobileMenu />
    </>
  );
};
export default MainNavigation;
