import { useSelector } from "react-redux";

const useBuildAreaValidation = (vlaue) => {
  const val = parseInt(vlaue);
  const standard = [
    {
      bhk: "1 BHK",
      from: 450,
      to: 600,
    },
    {
      bhk: "2 BHK",
      from: 650,
      to: 800,
    },
    {
      bhk: "3 BHK",
      from: 900,
      to: 1100,
    },
    {
      bhk: "4 BHK",
      from: 1300,
      to: 1700,
    },
    {
      bhk: "5 BHK",
      from: 1800,
      to: 2300,
    },
    {
      bhk: "5+ BHK",
      from: 2300,
    },
  ];

  const bhk = useSelector(
    (state) => state.propertydata.propertydata["Property details"]["BHK Type"]
  );

  if (bhk === "select") {
    return {
      valid: false,
      errMsg: "BHK type is empty!",
    };
  } else {
    const existingItem = standard.find((item) => item.bhk === bhk);
    if (existingItem && bhk === "5+ BHK") {
      if (val >= 2300) {
        return {
          valid: true,
          errMsg: "",
        };
      } else {
        return {
          valid: false,
          errMsg: `Build area must grater than ${existingItem.from} `,
        };
      }
    } else if (existingItem) {
      if (val >= existingItem.from && val <= existingItem.to) {
        return {
          valid: true,
          errMsg: "",
        };
      } else {
        return {
          valid: false,
          errMsg: `Build area must be between ${existingItem.from} & ${existingItem.to}`,
        };
      }
    }
  }
  return {
    valid: true,
    errMsg: "",
  };
};
export default useBuildAreaValidation;
