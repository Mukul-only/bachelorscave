import Card from "../../UI/Card";
import classes from "./HeroSection.module.css";
import search from "../../assets/search.svg";

const SearchSpan = (props) => {
  return (
    <span className="flex space-x-2 items-center">
      <img src={props.src} className="hidden md:block md:w-10 xl:w-12" />
      <span>
        <h1 className="text-sm md:text-base xl:text-lg font-semibold">
          {props.title}
        </h1>
        <p className="text-[12px] md:text-xs xl:text-sm text-gray-400">
          {props.subtitle}
        </p>
      </span>
    </span>
  );
};
const HeroSection = (props) => {
  return (
    <div className={`${classes.hero}`}>
      <Card className="flex flex-col items-center xl:items-start pt-24 pb-44">
        <h1 className="text-4xl text-center xl:text-left xl:text-5xl max-w-sm xl:max-w-lg font-bold">
          Discover a place you will love to live.
        </h1>
        <p className="text-sm xl:text-lg  max-w-md mt-6 text-center xl:text-left">
          Connect with more than 75K renters looking for new homes using our
          comprehensive marketing platform.
        </p>
        <div className="flex pl-6 py-2 pr-2 items-center bg-white shadow-lg rounded-xl max-w-max space-x-2 md:space-x-6 xl:space-x-12 mt-20">
          <SearchSpan
            title="Locations"
            subtitle="Delhi,Chandigarh"
            src={require("../../assets/location.png")}
          />
          <SearchSpan
            title="Price"
            subtitle="₹3xx-₹4xx"
            src={require("../../assets/price.png")}
          />
          <SearchSpan
            title="Type of home"
            subtitle="Apartment"
            src={require("../../assets/home .png")}
          />
          <div className="bg-deepBlue rounded-xl text-white py-4 px-4 md:py-6 md:px-6">
            <img src={search} alt="search" className="w-4 md:w-6 fill-white" />
          </div>
        </div>
        <div className="flex space-x-4 xl:space-x-6 mt-12">
          <h1 className="text-3xl xl:text-5xl">1500+</h1>
          <p className="max-w-min text-xs xl:text-base">Property Ready</p>
          <span className="block h-12 w-[2px] bg-blue-200" />
          <h1 className="text-3xl xl:text-5xl">500+</h1>
          <p className="max-w-min text-xs xl:text-base">Happy Costumer</p>
        </div>
      </Card>
    </div>
  );
};
export default HeroSection;
