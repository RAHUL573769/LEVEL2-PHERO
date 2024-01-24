import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../../Pages/About/About";

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
  }
]);
export default router;
