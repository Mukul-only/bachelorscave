import Card from "../../UI/Card";
import { Brand } from "../navigation/MainNavigation";
import classes from "./MainFooter.module.css";
const MainFooter = (props) => {
  return (
    <>
      <section id="footer" className="bg-Black-600 text-white">
        <Card
          className={`flex flex-col md:flex-row items-center md:items-stretch text-center  md:text-left justify-between md:space-x-4 ${classes.footer}`}
        >
          <div>
            <Brand className="block" />
            <p>Rent</p>
            <p>Our vision</p>
            <p>How it works</p>
            <p>Our tips</p>
            <p>FAQs</p>
            <p>Real estate professionals</p>
          </div>
          <div>
            <h1>Partners</h1>
            <p>Schools and universities</p>
            <p>Terms of use</p>
            <p>Legal mentions</p>
            <p>Help</p>
          </div>
          <div>
            <h1>Join us!</h1>
            <p>Our team</p>
            <p>Inside the culture</p>
            <p>Contact us</p>
          </div>
        </Card>
      </section>
    </>
  );
};
export default MainFooter;
