import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useRef, useEffect, useState } from "react";
import Card from "../../UI/Card";
import { UserBtn } from "./MainNavigation";
const MobileMenu = (props) => {
  const dispatch = useDispatch();
  const { mobileNavVisible } = useSelector((state) => state.ui);
  const [h, setH] = useState("");
  const mobileMenuRef = useRef();

  const pageChagneHandler = () => {
    dispatch(uiActions.toogle());
  };

  useEffect(() => {
    setH("h-[" + mobileMenuRef.current.scrollHeight + "px]");
  }, []);
  return (
    <div
      className={`block xl:hidden bg-white overflow-hidden  ${
        mobileNavVisible ? h : "h-0"
      } duration-300`}
      ref={mobileMenuRef}
    >
      <Card className="flex flex-col py-6 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold text-lg" : ""
          }
          end
          onClick={pageChagneHandler}
        >
          Home
        </NavLink>
        <hr className="w-full border-t border-stone-200" />
        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive ? "font-semibold text-lg" : ""
          }
          end
          onClick={pageChagneHandler}
        >
          Help
        </NavLink>
        <hr className="w-full border-t border-stone-200" />
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive ? "font-semibold text-lg" : ""
          }
          end
          onClick={pageChagneHandler}
        >
          About Us
        </NavLink>
        <hr className="w-full border-t border-stone-200" />
        <UserBtn className="flex justify-center pt-6" />
      </Card>
    </div>
  );
};
export default MobileMenu;
