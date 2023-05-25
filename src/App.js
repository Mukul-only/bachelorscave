import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import Error from "./pages/Error";
import ListPropertyPage from "./pages/ListPropertyPage";
import PropertyDetails from "./components/listproperty/PropertyDetails";
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
          { path: "localitydetails", element: <p>locality</p> },
          { path: "rentaldetails", element: <p>rental</p> },
          { path: "amenities", element: <p>amenities</p> },
          { path: "gallery", element: <p>gallery</p> },
          { path: "schedule", element: <p>schedule</p> },
          { path: "schedule", element: <p>schedule</p> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
