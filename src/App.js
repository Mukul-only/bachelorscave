import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import Error from "./pages/Error";
import ListPropertyPage from "./pages/ListPropertyPage";
import PropertyDetails from "./components/listproperty/PropertyDetails";
import LocalityDetails from "./components/listproperty/LocalityDetails";
import RentalDetails from "./components/listproperty/RentalDetails";
import Amenities from "./components/listproperty/Amenities";
import Gallery from "./components/listproperty/Gallery";
import Schedule from "./components/listproperty/Schedule";
import Card from "./UI/Card";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "listproperty",
        element: <ListPropertyPage />,

        children: [
          { index: true, element: <PropertyDetails /> },
          { path: "localitydetails", element: <LocalityDetails /> },
          { path: "rentaldetails", element: <RentalDetails /> },
          { path: "amenities", element: <Amenities /> },
          { path: "gallery", element: <Gallery /> },
          { path: "schedule", element: <Schedule /> },
        ],
      },
      {
        path: "/search",
        children: [
          {
            path: ":location/:type",
            element: <Card className="my-16">teri maa ki chut</Card>,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
