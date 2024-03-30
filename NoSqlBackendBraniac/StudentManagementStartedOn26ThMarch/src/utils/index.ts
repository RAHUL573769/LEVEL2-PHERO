import express from "express";
import { UserRoute } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/AdmissionSemester/admission.Semester.route";

const globalRouter = express.Router();

globalRouter.use("/users", UserRoute);

globalRouter.use("/academic-semesters", AcademicSemesterRoutes);
// const randomArray = [
//   {
//     path: "/users",
//     route: UserRoute
//   }
// ];

// randomArray.forEach((item) => {
//   globalRouter.use((item.path, item.route));
// });
export default globalRouter;
