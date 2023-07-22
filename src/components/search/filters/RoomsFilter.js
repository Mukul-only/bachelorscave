import classes from "./Filter.module.css";
const RangeDiv = () => {
  return (
    <div className="flex items-center my-2 space-x-2">
      <input
        type="number"
        min={0}
        max={10}
        className="flex-1 w-0 pl-2 overflow-hidden text-sm border border-gray-300 rounded-md outline-primary xl:text-base"
        placeholder="min"
      />
      <span className="block w-3 h-[2px] bg-stroke" />
      <input
        type="number"
        min={0}
        max={10}
        className="flex-1 w-0 pl-2 overflow-hidden text-sm border border-gray-300 rounded-md outline-primary xl:text-base"
        placeholder="max"
      />
    </div>
  );
};
const RoomsFilter = (props) => {
  return (
    <div className="pb-3 xl:pr-8">
      <h1 className={`${classes.heading}`}>Rooms</h1>
      <p className="text-sm font-semibold tracking-tight xl:text-base">
        Bedroom
      </p>
      <RangeDiv />
      <p className="text-sm font-semibold tracking-tight xl:text-base">
        Bathroom
      </p>
      <RangeDiv />
    </div>
  );
};
export default RoomsFilter;
