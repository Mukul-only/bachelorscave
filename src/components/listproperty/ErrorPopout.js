import { useSelector } from "react-redux";
import Popout from "../../UI/Popout";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
const ErrorPopout = (props) => {
  const { isFormValid } = useSelector((state) => state.validation);
  const { isTouched } = useSelector((state) => state.validation);
  const { current } = useSelector((state) => state.validation);
  const { isListPropertyValid } = useSelector((state) => state.validation);

  const [showPopout, setShowPopout] = useState(false);
  useEffect(() => {
    let identifier;
    if (
      (!isFormValid && isTouched) ||
      (!isListPropertyValid && current === 5)
    ) {
      setShowPopout(true);
      identifier = setTimeout(() => {
        setShowPopout(false);
      }, 3000);
    }

    return () => {
      clearTimeout(identifier);
    };
  }, [setShowPopout, props.state]);

  return (
    <CSSTransition
      in={showPopout}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{ enterActive: "slide-in-top", exitActive: "slide-out-top" }}
    >
      <Popout
        src={require("../../assets/warning.png")}
        message="You got some errors!"
        className=" border-red-400"
      />
    </CSSTransition>
  );
};
export default ErrorPopout;
