import { FormOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  PageHeader,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Phone = (props: Props) => {
  const { Option } = Select;

  const data: any = [
    {
      key: "1",
      id: "1",
      name: "product A",
      price: 2000,
      desc: "San pham cua thai ahihi",
    },
    {
      key: "2",
      id: "2",
      name: "product b",
      price: 2000,
      desc: "San pham cua thai ahihi",
    },
    {
      key: "3",
      id: "3",
      name: "product c",
      price: 2000,
      desc: "San pham cua thai ahihi",
    },
    {
      key: "4",
      id: "4",
      name: "product d",
      price: 2000,
      desc: "San pham cua thai ahihi",
    },
    {
      key: "5",
      id: "5",
      name: "product e",
      price: 2000,
      desc: "San pham cua thai ahihi",
    },
    {
      key: "6",
      id: "6",
      name: "product f",
      price: 2000,
      desc: "San pham cua thai ahihi",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      align: "center" as "center",
      key: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      align: "center" as "center",
    },
    {
      title: "Thành tiền",
      dataIndex: "price",
      key: "price",
      align: "center" as "center",
    },

    {
      title: "Mô tả",
      dataIndex: "desc",
      key: "desc",
      align: "center" as "center",
    },

    {
      title: "Ẩn/hiện",
      key: "status",
      align: "center" as "center",
      render: () => {
        return <Switch defaultChecked />;
      },
    },

    {
      title: "Thao tác",
      key: "action",
      align: "center" as "center",
      render: () => {
        return (
          <Link to="../edit">
            <FormOutlined style={{ fontSize: "20px" }} />
          </Link>
        );
      },
    },
  ];

  return (
    <>
      <TitlePage
        title="Điện thoại"
        extra={[
          <Link to="/admin/phones/add">
            <PlusSquareOutlined style={{ fontSize: "35px" }} />
          </Link>,
        ]}
      />
      <Space>
        <FilterTitle>Lọc:</FilterTitle>
        <Select placeholder="Danh mục cần tìm kiếm">
          <Option value="phone">Điện thoại</Option>
          <Option value="laptop">Laptop</Option>
          <Option value="tablet">Máy tính bảng</Option>
          <Option value="sound">Âm thanh</Option>
        </Select>
      </Space>
      <Divider></Divider>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

const TitlePage = styled(PageHeader)`
  font-size: 20px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 50px;
`;

const FilterTitle = styled.h4`
  font-size: 16px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  display: flex;
  align-items: center;
`;

export default Phone;
