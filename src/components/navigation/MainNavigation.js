import NavigationLink from "./NavigationLink";
import Card from "../../UI/Card";
import brandlogo from "../../assets/brandlogo.svg";
import Button from "../../UI/Button";

const MainNavigation = (props) => {
  return (
    <div className="relative z-10 shadow-lg">
      <Card className="flex justify-between py-3">
        <div className="flex space-x-2 items-center">
          <img src={brandlogo} alt="brand" className=" w-8 md:w-12" />
          <h1 className=" text-xl md:text-2xl">Bachelors Cave</h1>
        </div>
        <div className="xl:flex space-x-6 items-center hidden">
          <NavigationLink to="/" title="Home" />
          {/* <NavigationLink to="/listproperty" title="List Property" /> */}
          <NavigationLink to="/help" title="Help" />
          <NavigationLink to="/aboutus" title="About Us" />
        </div>
        <div className="hidden xl:flex items-center space-x-3 ">
          <Button className="px-6 py-2 text-semibold  bg-deepBlue text-white hover:bg-opacity-90">
            List property
          </Button>
          <Button className="w-28 py-2 hover:bg-darkBlue duration-300 hover:text-white font-semibold">
            Login
          </Button>
          <Button className="w-28 py-2 hover:bg-darkBlue duration-300 hover:text-white font-semibold">
            Signup
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default MainNavigation;
