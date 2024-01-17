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
// merging admin routes and main layout below
export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashBoard></AdminDashBoard>
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>
      },
      {
        name: " Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>
      },
      {
        name: " Create Student",
        path: "create-faculty",
        element: <CreateStudent></CreateStudent>
      }
    ]
  }
];
export const adminRoutes = adminPaths2.reduce((acc, item) => {
  if (item.children) {
    item.children.forEach((children) => {
      acc.push({
        path: children.path,
        element: children.element
      });
    });
  }
  // if (item.path && item.element) {
  //   acc.push({
  //     path: item.path,
  //     element: item.element
  //   });
  // }
  // console.log("Item", item);

  return acc;
}, []);
