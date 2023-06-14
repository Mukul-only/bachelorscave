import Card from "../../UI/Card";
import BlurEllipse from "../../svgComponents/BlurEllipse";
import search from "../../assets/search.svg";
import BlueEllipse from "../../svgComponents/BlueEllipse";
import LocatoinIcon from "../../svgComponents/LocationIcon";
import RupeesIcon from "../../svgComponents/RupeesIcon";
import HomeIcon from "../../svgComponents/HomeIcon";
import HeroImage from "../../svgComponents/HeroImage";

const SearchSpan = (props) => {
  return (
    <span className="flex flex-col md:flex-row gap-2 items-center">
      <span className="relative flex justify-center items-center w-8 h-8 xl:w-[4rem] xl:h-[4rem]">
        {props.src}
      </span>
      <span>
        <h1 className="text-xs md:text-base xl:text-lg font-semibold">
          {props.title}
        </h1>
        <p className="text-[8px] md:text-xs xl:text-sm text-gray-400">
          {props.subtitle}
        </p>
      </span>
    </span>
  );
};
const HeroSection = (props) => {
  return (
    <div className={`relative bg-Black-600 xl:mt-14`}>
      <span className="absolute top-0 left-0 block w-screen md:w-[700px] h-[400px] ">
        <BlurEllipse className="w-full h-full " />
      </span>
      <Card className="flex flex-col xl:flex-row justify-between items-center space-y-12 xl:space-y-0 xl:space-x-3  py-24">
        <div className="flex flex-col items-center xl:items-start">
          <div className="relative isolate">
            <h1 className="text-4xl text-center xl:text-left xl:text-5xl max-w-sm xl:max-w-md font-bold text-white tracking-tight fade-in-top">
              Discover a place you will love to{" "}
              <span className="relative">
                live
                <span className="absolute block  -bottom-4  -right-3 md:-right-8 w-16 h-16 xl:w-20 xl:h-20 -z-10">
                  <BlueEllipse className="w-full h-full" />
                </span>
              </span>
            </h1>
          </div>
          <p className="text-sm xl:text-lg  max-w-md mt-6 text-center xl:text-left text-gray-200 fade-in-left ">
            Connect with more than 75K renters looking for new homes using our
            comprehensive marketing platform.
          </p>
          <div className="flex pl-4 xl:pl-6 py-2 pr-2 items-center bg-white shadow-lg rounded-xl max-w-max space-x-4 md:space-x-6 xl:space-x-12 mt-20 fade-in-left ">
            <SearchSpan
              title="Locations"
              subtitle="Delhi,Chandigarh"
              src={<LocatoinIcon className="w-full h-full" />}
            />
            <SearchSpan
              title="Price"
              subtitle="₹3xx-₹4xx"
              src={<RupeesIcon className="w-full h-full" />}
            />
            <SearchSpan
              title="Type"
              subtitle="Apartment"
              src={<HomeIcon className="w-full h-full" />}
            />
            <div className="bg-primary rounded-full p-4 md:rounded-xl  text-white   md:py-4 md:px-4 xl:py-6 xl:px-6">
              <img src={search} alt="search" className="w-6 md:w-4 xl:w-6  " />
            </div>
          </div>
          <div className="flex  space-x-4 xl:space-x-6 mt-12 fade-in-left ">
            <div className="flex flex-col md:flex-row gap-2">
              <h1 className="text-3xl xl:text-5xl text-white">1500+</h1>
              <p className="max-w-min text-xs xl:text-base text-gray-200">
                Property Ready
              </p>
            </div>

            <span className="block h-12 w-[2px] bg-blue-200" />
            <div className="flex flex-col md:flex-row gap-2">
              <h1 className="text-3xl xl:text-5xl text-white">500+</h1>
              <p className="max-w-min text-xs xl:text-base text-gray-200">
                Happy Costumer
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full xl:w-0 xl:basis-1/3 h-[400px] xl:h-[600px] fade-in-right">
          <HeroImage className="w-full h-full" />
        </div>
      </Card>
    </div>
  );
};
export default HeroSection;
