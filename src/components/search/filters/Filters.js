import Category from "./CategoryFilter";
import FurnishingFilter from "./FurnishingFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import RoomsFilter from "./RoomsFilter";

const Filters = (props) => {
  return (
    <div className=" min-h-[100%] p-4 border-r w-max border-stroke">
      <Category />
      <PriceRangeFilter />
      <FurnishingFilter />
      <RoomsFilter />
      <button className="block px-4 py-2 mx-auto my-12 text-sm font-medium text-white duration-300 border rounded-full xl:text-base bg-primary border-primary hover:bg-transparent hover:text-black hover:shadow-lg">
        Apply filters
      </button>
    </div>
  );
};
export default Filters;
