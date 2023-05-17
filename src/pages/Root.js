import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
const Root = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};
export default Root;
