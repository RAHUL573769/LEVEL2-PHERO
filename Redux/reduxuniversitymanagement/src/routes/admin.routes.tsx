import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashBoard></AdminDashBoard>
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>
  }
];

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashBoard></AdminDashBoard>
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin></CreateAdmin>
      },
      {
        name: " Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty></CreateFaculty>
      },
      {
        name: " Create Student",
        path: "/admin/create-faculty",
        element: <CreateStudent></CreateStudent>
      }
    ]
  }
];
