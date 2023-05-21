import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import MainFooter from "../components/footer/MainFooter";
const Root = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <MainFooter />
    </>
  );
};
export default Root;
