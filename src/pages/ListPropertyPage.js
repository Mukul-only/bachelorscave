import { Outlet, json, redirect } from "react-router-dom";
import ListPropertyRoot from "../components/listproperty/ListPropertyRoot";
const ListPropertyPage = (props) => {
  return (
    <div className="pt-24 pb-10  bg-ghostWhite">
      <ListPropertyRoot Outlet={Outlet} />
    </div>
  );
};
export default ListPropertyPage;
