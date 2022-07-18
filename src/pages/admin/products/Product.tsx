import {
  DeleteOutlined,
  FormOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Image,
  Modal,
  PageHeader,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { CategoryType } from "../../../types/CategoryType";
import { ProductType } from "../../../types/ProductType";

type Props = {
  products: ProductType[];
  onRemove: (id?: string) => void;
  categories: CategoryType[];
  onUpdateStatus: (status: number, id: string) => void;
  onGetPrWithCategory: (id: string) => void;
};

const Product = (props: Props) => {
  const { Option } = Select;

  const notify = () => toast("Wow so easy!");

  const onChange = (checked: boolean, id: string) => {
    console.log(checked);
    props.onUpdateStatus(checked ? 0 : 1, id);
  };

  const onFilerCategory = (value: any) => {
    props.onGetPrWithCategory(value);
  };
  const data = props.products.map((item, index) => {
    return {
      key: index + 1,
      id: item.id,
      name: item.name,
      originalPrice: item.originalPrice,
      saleOffPrice: item.saleOffPrice,
      feature: item.feature,
      desc: item.desc,
      status: item.status,
      img: item.img,
      categoryId: item.categoryId,
    };
  });

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "img",
      align: "center" as "center",
      key: "img",
      render: (text: string, record: ProductType) => {
        return <Image width={200} src={text} />;
      },
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      align: "center" as "center",
    },

    {
      title: "Danh mục sản phẩm",
      dataIndex: "categoryId",
      key: "categoryId",
      align: "center" as "center",
      render: (text: string) => {
        let name;
        props.categories.map((item) => {
          if (item.id == text) {
            name = item.name;
          }
        });
        return <span>{name}</span>;
      },
    },

    {
      title: "Giá gốc",
      dataIndex: "originalPrice",
      key: "originalPrice",
      align: "center" as "center",
    },

    {
      title: "Giá khuyến mại",
      dataIndex: "saleOffPrice",
      key: "saleOffPrice",
      align: "center" as "center",
    },

    {
      title: "Đặc điểm nổi bật",
      dataIndex: "feature",
      key: "feature",
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
      dataIndex: "status",
      align: "center" as "center",
      render: (text: number, record: any) => {
        return (
          <Switch
            defaultChecked={text == 0 ? true : false}
            onChange={() => {
              onChange(text == 0 ? false : true, record.id);
            }}
          />
        );
      },
    },

    {
      title: "Thao tác",
      key: "action",

      align: "center" as "center",
      render: (text: string, record: ProductType) => {
        return (
          <>
            <Link to="../edit">
              <FormOutlined style={{ fontSize: "20px" }} />
            </Link>

            <BtnDelete
              onClick={() => {
                Modal.confirm({
                  title: `Bạn chắc chắn muốn xóa sản phẩm ${record.name}`,
                  okText: "Đồng ý",
                  okType: "danger",
                  onOk: () => {
                    props.onRemove(record.id);
                    toast.success("Xóa thành công rồi!");
                  },
                });
              }}
            >
              <DeleteOutlined style={{ fontSize: "20px", border: "none" }} />
            </BtnDelete>
          </>
        );
      },
    },
  ];

  return (
    <>
      <TitlePage
        title="Danh sách sản phẩm"
        extra={[
          <Link to="/admin/products/add" key="1">
            <PlusSquareOutlined style={{ fontSize: "35px" }} />
          </Link>,
        ]}
      />
      <Space>
        <FilterTitle>Lọc:</FilterTitle>
        <Select
          placeholder="Danh mục cần tìm kiếm"
          onChange={onFilerCategory}
          allowClear={true}
        >
          {props.categories.map((item, index) => {
            return (
              <Option value={item.id} key={index}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Space>
      <Divider></Divider>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
      <ToastContainer />
    </>
  );
};

const TitlePage = styled(PageHeader)`
  font-size: 20px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 20px;
`;

const FilterTitle = styled.h4`
  font-size: 16px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  display: flex;
  align-items: center;
`;

const BtnDelete = styled(Button)`
  border: none;
  color: red;
`;

export default Product;
