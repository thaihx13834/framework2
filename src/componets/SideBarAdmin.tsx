import React from "react";
import styled from "styled-components";
import {
  LaptopOutlined,
  MobileOutlined,
  SoundOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
type Props = {};

const { Sider } = Layout;
const SideBarAdmin = (props: Props) => {
  const menuItem = [
    {
      key: "phone",
      label: <Link to="/admin/products">Sản phẩm</Link>,
      icon: <MobileOutlined />,
    },
    {
      key: "1",
      label: <Link to="/admin/categories">Danh mục sản phẩm</Link>,
      icon: <LaptopOutlined />,
    },
    { key: "2", label: "Máy tính bảng", icon: <TabletOutlined /> },
    { key: "3", label: "Âm thanh", icon: <SoundOutlined /> },
  ];
  return (
    <SideBar theme="light" width={300}>
      <Menu items={menuItem} />
    </SideBar>
  );
};

const SideBar = styled(Sider)`
  padding: 30px 0;

  .ant-menu-vertical {
    padding: 0 20px;
  }
  .ant-menu-item:hover {
    color: #fff;
    background-color: #00b0d7;
    border-radius: 10px;
  }

  .ant-menu-item:active {
    color: #fff;
    background-color: #00b0d7;
    border-radius: 10px;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    color: #fff;
    background-color: #00b0d7;
    border-radius: 10px;
  }
  .ant-menu-item-selected a {
    color: #fff;
  }
`;

const LinkAdmin = styled(Link)``;

export default SideBarAdmin;
