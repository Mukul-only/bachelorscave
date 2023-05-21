import Card from "../../UI/Card";

const WhyUsCard = (props) => {
  return (
    <div className="flex justify-center flex-col rounded-lg  border bg-white shadow-lg px-10 py-6 max-w-sm">
      <img src={props.src} className="w-16" />
      <h1 className="text-xl font-semibold mt-2">{props.title}</h1>
      <p className="text-sm text-gray-500">{props.description}</p>
    </div>
  );
};

const WhyUsSection = (props) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={require("../../assets/5570869.jpg")}
        className="absolute inset-0 -z-10 object-cover h-full w-full"
      />
      <Card className="flex flex-col xl:flex-row justify-between mt-36 py-16 items-center space-y-12 xl:space-y-0">
        <div className="space-y-4 text-center xl:text-left">
          <h1 className="text-2xl md:text-4xl">
            What makes us <span className="text-orangeY">DIFFERENT</span>
          </h1>
          <p className="max-w-lg text-sm md:text-base">
            Bachelors Cave is all you need to find perfect house for you without
            paying extra money to anyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WhyUsCard
            src={require("../../assets/houseadd.png")}
            title="Free Listing"
            description="Reach a wide audience of college students and effortlessly showcase your rental spaces to ensure maximum occupancy and a seamless rental process. "
          />
          <WhyUsCard
            src={require("../../assets/shortlist.png")}
            title="Short List without visit"
            description="Our Short List Without Visit feature streamlines finding college accommodations. Personalized options based on location, price, and amenities.  "
          />
          <WhyUsCard
            src={require("../../assets/handshake.png")}
            title="Rental Agreement"
            description="Our rental agreement streamlines the house renting process, helps in providing clear and concise documentation for a hassle-free and secure living arrangement.  "
          />
          <WhyUsCard
            src={require("../../assets/24-hours-support.png")}
            title="24/7 Support of experts"
            description="Our dedicated 24/7 support is here to ensure a seamless experience for college students seeking nearby rooms or apartments.  "
          />
        </div>
      </Card>
    </div>
  );
};
export default WhyUsSection;
