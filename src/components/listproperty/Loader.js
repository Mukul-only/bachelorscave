import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Loader = ({ className }) => {
  const { isSectionValid } = useSelector((state) => state.validation);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const values = Object.values(isSectionValid);

    let count = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i]) {
        if (i !== 4 && i !== 5) {
          count += 20;
        } else {
          count += 10;
        }
      }
    }
    setWidth(count);
  }, [isSectionValid, setWidth]);

  return (
    <div className={`${className ? className : ""}`}>
      <p className="text-sm font-[500] text-center md:text-left">
        {width}% Done
      </p>
      <div
        className={`w-52 md:w-80 h-2 rounded-full overflow-hidden bg-blue-100 `}
      >
        <span
          className={` h-full block loader duration-500`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};
export default Loader;
