import { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  {
    key: "dashboard",
    label: "Dashboard"
  },
  {
    key: "profile",
    label: "Profile"
  },
  {
    key: "user-management",
    label: "User Management",
    children: [
      {
        key: "create-admin",
        label: "Create Admin"
      },
      {
        key: "create-student",
        label: "Create Student"
      }
    ]
  }
];
