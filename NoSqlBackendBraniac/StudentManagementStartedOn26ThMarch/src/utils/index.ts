import express from "express";
import { UserRoute } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/AdmissionSemester/admission.Semester.route";
import { AcademicFacultyRoutes } from "../modules/AcademicFaculty/academic.faculty.route";

const globalRouter = express.Router();

globalRouter.use("/users", UserRoute);

globalRouter.use("/academic-semesters", AcademicSemesterRoutes);

globalRouter.use("/academic-faculty", AcademicFacultyRoutes);
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
