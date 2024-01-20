// const array = [1, 3, 4, 56, 1, 23, 4];
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const result = array.reduce((acc, item) => {
//   acc.push(acc + item);
//   return acc;
// }, []);

// console.log(result);
// const today = new Date();
// console.log(today);

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD"
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN"
      },
      {
        name: " Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY"
      },
      {
        name: " Create Student",
        path: "create-faculty",
        element: "CREATE_STUDENT"
      }
    ]
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newArray = adminPaths2.reduce((acc, item) => {
  if (item.children) {
    item.children.forEach((children) => {
      acc.push({
        path: children.path,
        element: children.element
      });
    });
  }
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element
    });
  }
  // console.log("Item", item);

  return acc;
}, []);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = [
  {
    key: "Dashboard",
    label: "This is a Nlink"
  },
  {
    key: "Profile",
    label: "Profile"
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "1",
        label: "This is a Nlink"
      },
      {
        key: "2",
        label: "This is a Nlink"
      }
    ]
  }
];
const newArray1 = items.reduce((acc, item) => {
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NAV-LINK"
      }))
    });
    // item.children.forEach((children) => {
    //   acc.push({
    //     path: children.path,
    //     element: children.element
    //   });
    // });
  }
  if (item.path && item.name) {
    acc.push({
      path: item.name,
      label: "This should be a NavLink"
    });
  }
  // console.log("Item", item);

  return acc;
}, []);

console.log(newArray1);
