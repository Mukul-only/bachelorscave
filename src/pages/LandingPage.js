import { useEffect } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import ProcedureSection from "../components/HomePage/ProcedureSection";
import SecondSection from "../components/HomePage/SecondSection";
import WhyUsSection from "../components/HomePage/WhyUsSection";

const LandingPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ProcedureSection />
      <WhyUsSection />
    </>
  );
};
export default LandingPage;
