import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../../Pages/About/About";
import AdminDashboard from "../../Pages/Admin/adminDashboard";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>
      }
    ]
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      { path: "dashboard", element: <AdminDashboard></AdminDashboard> }
    ]
  }
]);
export default router;
