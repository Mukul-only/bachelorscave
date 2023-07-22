import Card from "../../UI/Card";
import BlurEllipse from "../../svgComponents/BlurEllipse";
import search from "../../assets/search.svg";
import BlueEllipse from "../../svgComponents/BlueEllipse";
import Select from "../listproperty/helper/Select";
import HeroImage from "../../svgComponents/HeroImage";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchSpan = (props) => {
  return (
    <span className="flex flex-col flex-1 px-2 md:px-4 basis-1/3">
      {/* <span className="relative flex justify-center items-center w-8 h-8 xl:w-[4rem] xl:h-[4rem]">
        {props.src}
      </span> */}

      <h1 className="text-sm font-[400] text-gray-500 ml-2">{props.title}</h1>
      {/* <p className="text-base font-medium ">{props.subtitle}</p> */}
      <Select
        className="w-full "
        id={props.title}
        options={props.options}
        search
      />
    </span>
  );
};
const HeroSection = (props) => {
  const dispatch = useDispatch();
  const isSearchValid = useSelector((state) => state.search.formValidity);
  const { searchData } = useSelector((state) => state.search);
  const navigate = useNavigate();
  const searchSubmitHandler = () => {
    dispatch(searchActions.setTouched());
    if (isSearchValid) {
      navigate(`/search/${searchData.Locations}/${searchData.Type}`);
    }
  };
  useEffect(() => {
    return () => {
      dispatch(searchActions.reset());
    };
  }, []);

  return (
    <div className={`relative bg-Black-600 `}>
      <span className="absolute top-0 left-0 block w-screen md:w-[700px] h-[400px] ">
        <BlurEllipse className="w-full h-full " />
      </span>
      <Card className="flex flex-col items-center justify-between py-24 space-y-12 xl:flex-row xl:space-y-0 xl:space-x-3">
        <div className="flex flex-col items-center xl:items-start">
          <div className="relative isolate">
            <h1 className="max-w-sm text-4xl font-bold tracking-tight text-center text-white xl:text-left xl:text-5xl xl:max-w-md fade-in-top">
              Discover a place you will love to{" "}
              <span className="relative">
                live
                <span className="absolute block w-16 h-16 -bottom-4 -right-3 md:-right-8 xl:w-20 xl:h-20 -z-10">
                  <BlueEllipse className="w-full h-full" />
                </span>
              </span>
            </h1>
          </div>
          <p className="max-w-md mt-6 text-sm text-center text-gray-200 xl:text-lg xl:text-left fade-in-left ">
            Connect with more than 75K renters looking for new homes using our
            comprehensive marketing platform.
          </p>
          <div className="relative z-20 flex items-center w-full py-4 mt-20 bg-white shadow-lg rounded-xl fade-in-left">
            <SearchSpan title="Locations" options={["Chandigarh", "Delhi"]} />
            <span className="block w-[2px] h-12 bg-gray-300" />
            <SearchSpan
              title="Type"
              options={["Apartement", "Flat", "Boys Hostel", "Girls Hostel"]}
            />
            <button
              className="flex items-center justify-center p-4 mr-2 space-x-2 text-white bg-primary rounded-xl md:py-4 md:px-4 xl:py-6 xl:px-6 hover:shadow-lg"
              onClick={searchSubmitHandler}
            >
              <img src={search} alt="search" className="w-3 " />
              <p className="hidden md:block md:text-base">Search</p>
            </button>
          </div>
          <div className="flex mt-12 space-x-4 xl:space-x-6 fade-in-left ">
            <div className="flex flex-col gap-2 md:flex-row">
              <h1 className="text-3xl text-white xl:text-5xl">1500+</h1>
              <p className="text-xs text-gray-200 max-w-min xl:text-base">
                Property Ready
              </p>
            </div>

            <span className="block h-12 w-[2px] bg-blue-200" />
            <div className="flex flex-col gap-2 md:flex-row">
              <h1 className="text-3xl text-white xl:text-5xl">500+</h1>
              <p className="text-xs text-gray-200 max-w-min xl:text-base">
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
