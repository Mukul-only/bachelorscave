import Card from "../../UI/Card";

const InfoCard = (props) => {
  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden  xl:w-64 xl:h-32 cursor-pointer isolate img-university border-1 border-deepBlue group ${
        props.className ? props.className : ""
      }`}
    >
      <img
        src={props.src}
        className="group-hover:scale-110 duration-500 ease-in-out w-full h-full object-cover"
      />
      <p className="absolute bottom-0 left-0 px-3 py-2 text-white font-bebas  z-10 group-hover:scale-110 duration-500 ease-in-out text-lg md:text-xl">
        {props.label}
      </p>
    </div>
  );
};

const SecondSection = (props) => {
  return (
    <Card className="py-20">
      <h1 className="text-deepBlue font-semibold text-center  text-2xl md:text-3xl">
        Find room near your university/college!
      </h1>
      <p className=" max-w-sm md:max-w-xl mx-auto text-center mt-2">
        Discover Your Ideal Home: Find the Perfect Room Near Your University
      </p>
      <div className="mt-12  grid xl:grid-cols-5 gap-3 md:grid-cols-4 grid-cols-2 ">
        <InfoCard
          src={require("../../assets/university/punjab university chandigarh.webp")}
          label="Punjab university, chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/DAV College - [DAVC], Chandigarh.webp")}
          label="DAV College - [DAVC],Chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/GMCH chandigarh.jpg")}
          label="GMCH chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/chandigarhuniversity.avif")}
          label="Chandigarh University"
        />
        <InfoCard
          src={require("../../assets/university/Sri Guru Gobind Singh College of Pharmacy, Chandigarh.jpg")}
          label="SGGCP Chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/University Business School, Panjab University - [UBS], Chandigarh.jpg")}
          label="[UBS], Chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/University Institute of Engineering, Chandigarh University - [UIE], Chandigarh.jpg")}
          label="[UIE], Chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/[CCET], Chandigarh.jpg")}
          label="[CCET], Chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/[ITFT], Chandigarh.jpg")}
          label="[ITFT], Chandigarh"
        />
        <InfoCard
          src={require("../../assets/university/IITT Institutions, Chandigarh.jpg")}
          label="IITT Institutions, Chandigarh"
        />
      </div>
    </Card>
  );
};
export default SecondSection;
