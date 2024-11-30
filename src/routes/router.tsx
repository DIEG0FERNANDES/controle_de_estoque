import { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
