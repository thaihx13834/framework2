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
import { listCategory } from "../../../api/category";
import {
  deleteProduct,
  editStatusProduct,
  GetPrWithCategory,
  listProduct,
} from "../../../api/product";
import { CategoryType } from "../../../types/CategoryType";
import { ProductType } from "../../../types/ProductType";

type Props = {};

interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: string[]) => void;
  selectedKeys: string[];
  confirm: (closeDropdown?: any) => void;
  clearFilters: () => void;
}

const Product: React.FC = (props: Props) => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [textsearch, setTextsearch] = useState<string>("");
  const { Option } = Select;

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listProduct();
      setProduct(data);
    };
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
    getProducts();
  }, []);

  const onChange = async (checked: boolean, id: string) => {
    console.log(checked);

    const status = checked ? 0 : 1;

    const { data } = await editStatusProduct({ status: status }, id);

    setProduct(product.map((item) => (item.id == id ? data : item)));
  };

  const onFilerCategory = async (value: any) => {
    if (value === undefined) {
      const { data } = await listProduct();
      setProduct(data);
    } else {
      const { data } = await GetPrWithCategory(value);
      console.log(data);
      setProduct(data);
    }
  };

  const handleRemove = async (id: string) => {
    const { data } = await deleteProduct(id);
    setProduct(product.filter((item) => item.id !== id));
  };

  const data = product.map((item, index) => {
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
      render: (text: string, record: ProductType) => {
        return <Image width={200} src={text} />;
      },
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      align: "center" as "center",

      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }: FilterDropdownProps) => {
        return (
          <div style={{ padding: "10px" }}>
            <Input
              autoFocus
              placeholder="Nhap ten sp!"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
            ></Input>
            <Space style={{ marginTop: "20px" }}>
              <Button
                onClick={() => {
                  confirm();
                }}
                type="primary"
              >
                Oke
              </Button>

              <Button
                onClick={() => {
                  clearFilters();
                }}
                type="dashed"
              >
                Reset
              </Button>
            </Space>
          </div>
        );
      },
      onFilter: (value: any, record: any) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
        // console.log(record.name.toLowerCase().includes(value.toLowerCase()));
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
    },

    {
      title: "Danh mục sản phẩm",
      dataIndex: "categoryId",
      key: "categoryId",
      align: "center" as "center",
      render: (text: string) => {
        let name;
        category.map((item) => {
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
      sorter: (a: any, b: any) => a.originalPrice - b.originalPrice,
    },

    {
      title: "Giá khuyến mại",
      dataIndex: "saleOffPrice",
      key: "saleOffPrice",
      align: "center" as "center",
      sorter: (a: any, b: any) => a.saleOffPrice - b.saleOffPrice,
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
      render: (text: string, record: ProductType) => {
        return (
          <>
            <Link to={`/admin/products/edit/${record.id}`}>
              <FormOutlined style={{ fontSize: "20px" }} />
            </Link>

            <BtnDelete
              onClick={() => {
                Modal.confirm({
                  title: `Bạn chắc chắn muốn xóa sản phẩm ${record.name}`,
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

  const handleChangeTextSeach = async (e: any) => {
    if (e.target.value == "") {
      const { data } = await listProduct();
      setProduct(data);
    }
    setTextsearch(e.target.value);
  };

  const handleSearch = async () => {
    const productList: ProductType[] = [...product];

    const dataSearch = productList.filter((item) => {
      return (
        item.name.toLowerCase().includes(textsearch.toLowerCase()) ||
        item.desc.toLowerCase().includes(textsearch.toLowerCase()) ||
        item.feature.toLowerCase().includes(textsearch.toLowerCase())
      );
    });

    setProduct(dataSearch);
  };

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
        title="Danh sách sản phẩm"
        extra={[
          <Link to="/admin/products/add" key="1">
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

        <Input
          placeholder="Tìm kiếm"
          onChange={handleChangeTextSeach}
          allowClear={true}
          onPressEnter={handleSearch}
        />
        <Button type="primary" onClick={handleSearch}>
          Tìm kiếm
        </Button>
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

export default Product;
