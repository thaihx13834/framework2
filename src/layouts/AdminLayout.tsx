import { Layout, Menu } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../componets/HeaderAdmin";
import styled from "styled-components";
import {
  LaptopOutlined,
  MobileOutlined,
  SoundOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import SideBarAdmin from "../componets/SideBarAdmin";
type Props = {};

const { Sider, Content } = Layout;
const AdminLayout = (props: Props) => {
  return (
    <>
      <HeaderAdmin />

      <Layout>
        <SideBarAdmin />
        <ContentMain>
          <Outlet />
        </ContentMain>
      </Layout>
    </>
  );
};

const ContentMain = styled(Content)`
  padding: 37px 20px;
`;

export default AdminLayout;
