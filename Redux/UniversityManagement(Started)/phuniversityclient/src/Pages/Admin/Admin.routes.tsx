import CreateFaculty from "../Faculty/CreateFaculty";
import CreateStudent from "../Student/CreateStudent";
import AdminDashboard from "./AdminDashboard";
import CreateAdmin from "./CreateAdmin";

export const adminRoutes = [
  { path: "dashboard", element: <AdminDashboard></AdminDashboard> },
  { path: "create-admin", element: <CreateAdmin></CreateAdmin> },

  { path: "create-student", element: <CreateStudent></CreateStudent> },
  { path: "create-faculty", element: <CreateFaculty></CreateFaculty> }
];
//doindg p[layground]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const adminRoutes2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard></AdminDashboard>
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create-Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin></CreateAdmin>
      }
    ]
  }
];
