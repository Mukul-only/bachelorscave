import Card from "../UI/Card";
import { Link } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import MainFooter from "../components/footer/MainFooter";

const ErrorPage = (props) => {
  return (
    <div className="bg-[#e5e8f5] min-h-screen">
      <MainNavigation />

      <Card className="flex flex-col items-center mt-12  space-y-6 text-center pb-32">
        <img
          src={require("../assets/UnderConstruction.png")}
          alt="under construction"
          className="w-[44rem]"
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-deepBlue">
          This page is under construction!
        </h1>
        <Link
          to="/"
          className="rounded-lg bg-darkBlue text-white font-semibold shadow-btn px-10 py-2 text-md md:text-lg hover:bg-opacity-95 duration-500"
        >
          Go to home
        </Link>
      </Card>
      <MainFooter />
    </div>
  );
};
export default ErrorPage;
