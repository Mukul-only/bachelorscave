import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [{ index: true, element: <LandingPage /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
