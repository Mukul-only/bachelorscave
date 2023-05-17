import Button from "../../UI/Button";
import Card from "../../UI/Card";
const ProcedureCard = (props) => {
  return (
    <div className="flex flex-row md:flex-col md:basis-1/3 space-x-3 md:space-x-0 justify-center ">
      <div className="flex flex-col md:flex-row items-center ">
        <img src={props.src} className="min-w-[30px] w-4 md:w-10" />
        {props.hr && (
          <hr className=" flex-1 border-l-2 md:border-t-2 border-dashed md:mx-6 my-3" />
        )}
      </div>
      <div className="max-w-[280px] md:mt-4 space-y-2 pb-6 ">
        <h1 className="text-lg  xl:text-xl font-semibold text-deepBlue">
          {props.title}
        </h1>
        <p className="text-sm md:text-md xl:text-md text-gray-500">
          {props.description}
        </p>
      </div>
    </div>
  );
};
const ProcedureSection = (props) => {
  return (
    <div className="bg-lightBlue">
      <Card className="py-12">
        <div className="flex items-center xl:items-start justify-between xl:space-x-4 flex-col xl:flex-row xl:pr-44">
          <div className="pt-28 max-w-md md:max-w-lg xl:max-w-2xl space-y-3">
            <h1 className="text-2xl md:text-4xl text-center xl:text-4xl xl:text-left ">
              Rentals made efficient and smooth with{" "}
              <span className="text-orangeY">Bachelors Cave</span>
            </h1>
            <p className="text-sm md:text-base xl:text-lg xl:max-w-xl text-center xl:text-left">
              Book accomodation online with certified lessors. Enjoy
              personalised support all the way through.
            </p>
          </div>
          <img
            src={require("../../assets/house-hand.png")}
            className="w-80 md:w-96 xl:w-auto"
          />
        </div>
        <div className="relative z-10 space-y-12 -mb-40 -mt-20 rounded-lg shadow-lg bg-white p-8 xl:mx-16 ">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <ProcedureCard
              src={require("../../assets/file.png")}
              hr
              title="1. Specify your terms"
              description="You give us your terms and we take care of selecting tailor made
          offers for you."
            />
            <ProcedureCard
              src={require("../../assets/target.png")}
              hr
              title="2. Target your home"
              description="Found the one? Contact the landlord and arrange the visit if you like."
            />
            <ProcedureCard
              src={require("../../assets/rent.png")}
              title="3. Book and pay online"
              description="Make your payment online and complete your booking securely on the platform."
            />
          </div>
          <div className="max-w-lg mx-auto space-y-3 md:text-center">
            <div className="flex space-x-2 justify-center items-center">
              <img
                src={require("../../assets/technical-support.png")}
                className="w-10 h-10"
              />
              <h1 className="text-lg md:text-2xl font-semibold">
                Seamless support, even after booking
              </h1>
            </div>
            <p className="text-gray-500 text-center text-sm md:text-base">
              Our multilingual expert team is here to assist you from start to
              finish and commits to finding you a new home in case things go
              unplanned. Focus on what matters: a fresh start!
            </p>
          </div>
          <Button className="mx-auto block bg-deepBlue text-white font-semibold px-6 py-3 hover:bg-opacity-90">
            Find out more
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default ProcedureSection;
