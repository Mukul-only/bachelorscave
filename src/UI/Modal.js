import Button from "./Button";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { ReactSVG } from "react-svg";
const Overlay = (props) => {
  return <div className="fixed z-40 inset-0  bg-black bg-opacity-40 "></div>;
};
const OverlayModal = ({ heading, text, src, btnLabel, showModal, onClick }) => {
  return (
    <CSSTransition
      in={showModal}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "puff-in-center",
        exit: "",
        exitActive: "puff-out-center",
      }}
    >
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="  bg-white rounded-lg shadow-lg mx-4 px-6  py-8 md:p-12 text-center ">
          <h1 className="text-xl md:text-2xl">{heading}</h1>
          <p className="max-w-[250px] mx-atuo md:max-w-none text-xs md:text-sm text-gray-400 ">
            {text}
          </p>
          {/* <img src={src} className="w-64 md:w-80 my-8 mx-auto" /> */}
          <div className="w-48 h-36 md:w-80 md:h-64 my-8 mx-auto">
            <ReactSVG src={src} className="svg " />
          </div>
          <Button
            onClick={onClick}
            className="px-6 py-1 bg-darkBlue text-white font-semibold"
          >
            {btnLabel}
          </Button>
        </div>
      </div>
    </CSSTransition>
  );
};
const overlay = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {props.showModal && ReactDOM.createPortal(<Overlay />, overlay)}
      {ReactDOM.createPortal(<OverlayModal {...props} />, overlay)}
    </>
  );
};

export default Modal;
