import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routerGenerator } from "./../utils/routeGeneator";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/admin",
    element: <App />,
    children: routerGenerator(adminPaths)
  },
  {
    path: "/faculty",
    element: <App />,
    children: routerGenerator(adminPaths)
  },
  {
    path: "/student",
    element: <App />,
    children: routerGenerator(adminPaths)
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router;
