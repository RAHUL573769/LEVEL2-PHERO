import Sider from "antd/es/layout/Sider";
import React from "react";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPaths2 } from "../../routes/admin.routes";
import { Menu } from "antd";

const SideBar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div />

      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem"
        }}
      >
        <h1>P-hero University Management</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        // items={adminSideBarItems}
        items={sideBarItemsGenerator(adminPaths2, "admin")}
      />
    </Sider>
  );
};

export default SideBar;
