import {
  DeleteOutlined,
  FormOutlined,
  PlusSquareOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Image,
  Input,
  Modal,
  PageHeader,
  Select,
  Space,
  Switch,
  Table,
  TableProps,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import {
  deleteCategory,
  detailCategory,
  detailPr,
  editStatusCategory,
  listCategory,
} from "../../../api/category";
import { CategoryType } from "../../../types/CategoryType";

type Props = {};

interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: string[]) => void;
  selectedKeys: string[];
  confirm: (closeDropdown?: any) => void;
  clearFilters: () => void;
}

const Category: React.FC = (props: Props) => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [textsearch, setTextsearch] = useState<string>("");
  const { Option } = Select;

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
  }, []);

  const onChange = async (checked: boolean, id: string) => {
    console.log(checked);
    const status = checked ? 0 : 1;
    const { data } = await editStatusCategory({ status: status }, id);
    setCategory(category.map((item) => (item.id == id ? data : item)));
  };

  const onFilerCategory = async (value: any) => {
    console.log(value);

    if (value === undefined) {
      const { data } = await listCategory();
      setCategory(data);
    } else {
      const { data } = await detailCategory(value);
      console.log(data);

      setCategory([data]);
    }
  };

  const handleRemove = async (id: string) => {
    const { data } = await deleteCategory(id);

    setCategory(category.filter((item) => item.id !== id));
  };

  const data = category.map((item, index) => {
    return {
      key: index + 1,
      id: item.id,
      name: item.name,
      status: item.status,
      img: item.img,
    };
  });

  const columns: any = [
    {
      title: "Stt",
      dataIndex: "key",
      align: "center" as "center",
      key: "key",
    },
    {
      title: "Ảnh",
      dataIndex: "img",
      align: "center" as "center",
      key: "img",
      render: (text: string, record: CategoryType) => {
        return <Image width={200} src={text} />;
      },
    },
    {
      title: "Danh mục sản phẩm sản phẩm",
      dataIndex: "name",
      key: "name",
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
              toast.success("Thanh đổi trạng thái thành công!");
            }}
          />
        );
      },

      filters: [
        {
          text: "Hiện",
          value: 0,
        },
        {
          text: "Ẩn",
          value: 1,
        },
      ],
      onFilter: (value: string, record: any) => value == record.status,
    },

    {
      title: "Thao tác",
      key: "action",
      align: "center" as "center",
      render: (text: string, record: CategoryType) => {
        return (
          <>
            <Link to={`/admin/categories/edit/${record.id}`}>
              <FormOutlined style={{ fontSize: "20px" }} />
            </Link>

            <BtnDelete
              onClick={() => {
                Modal.confirm({
                  title: `Bạn chắc chắn muốn xóa danh mục ${record.name}, khi xóa danh mục sẽ xóa những sản phẩm của danh mục đó!`,
                  okText: "Đồng ý",
                  okType: "danger",
                  onOk: () => {
                    handleRemove(record.id as string);
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

  const onChangee: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <TitlePage
        title="Danh sách danh mục sản phẩm"
        extra={[
          <Link to="/admin/categories/add" key="1">
            <PlusSquareOutlined style={{ fontSize: "35px" }} />
          </Link>,
        ]}
      />
      <Space>
        <Select
          placeholder="Danh mục cần tìm kiếm"
          onChange={onFilerCategory}
          allowClear={true}
        >
          {category.map((item, index) => {
            return (
              <Option value={item.id} key={index}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Space>
      <Divider></Divider>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 4 }}
        onChange={onChangee}
      />
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

export default Category;
