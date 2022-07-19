import { InboxOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  PageHeader,
  Row,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import Meta from "antd/lib/card/Meta";
import TextArea from "antd/lib/input/TextArea";
import { RcFile } from "antd/lib/upload";
import Dragger from "antd/lib/upload/Dragger";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { listCategory } from "../../../api/category";
import { product, updateProduct } from "../../../api/product";
import { CategoryType } from "../../../types/CategoryType";
import { onPreview, upload, validateFile } from "../../../utils/upload";

type Props = {};

const EditProduct = (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { Option } = Select;

  const [fileList, setfileList] = useState<UploadFile[] | any>([]);

  const [category, setCategory] = useState<CategoryType[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await product(id as string);
      form.setFieldsValue(data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
  }, []);

  const onFinish = async (values: any) => {
    const dataInput = {
      name: values.name,
      originalPrice: values.originalPrice,
      saleOffPrice: values.saleOffPrice,
      feature: values.feature,
      desc: values.desc,
      brief: values.brief,
      categoryId: values.categoryId,
      status: values.status,
      img: values.img,
    };

    const file = fileList[0];
    if (file) {
      dataInput.img = await upload(fileList[0]);
    }

    try {
      updateProduct(dataInput, id);
      toast.success("Sửa thành công");
      setTimeout(() => {
        navigate("/admin/products");
      }, 1000);
    } catch (error) {
      toast.error("Sửa không thành công");
    }
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setfileList(newFileList);
  };

  return (
    <>
      <TitlePage>Chỉnh sửa Điện thoại</TitlePage>
      <FormAdd layout="vertical" onFinish={onFinish} form={form}>
        <Row>
          <Col span={12}>
            <LeftContent>
              <Form.Item
                name="imgfile"
                // rules={[{ required: true, message: "Hãy thêm 1 ảnh" }]}
              >
                <UploadImage
                  listType="picture"
                  multiple={false}
                  maxCount={1}
                  beforeUpload={validateFile}
                  onChange={onChange}
                  onPreview={onPreview}
                  fileList={fileList}
                >
                  <p className="ant-upload-drag-icon">
                    <PlusSquareOutlined />
                  </p>
                  <p>Thêm ảnh!</p>
                </UploadImage>
              </Form.Item>

              <Form.Item label="Ảnh" valuePropName="src" name="img">
                <img width={200} />
              </Form.Item>

              <Form.Item name="brief" label="Mô tả ngắn">
                <TextArea rows={5} placeholder="Mô tả ngắn : " />
              </Form.Item>
            </LeftContent>
          </Col>
          <Col span={12}>
            <InfoProduct>Thông tin sản phẩm</InfoProduct>

            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input />
            </Form.Item>

            <DivLine>
              <Form.Item
                name="originalPrice"
                label="Giá gốc"
                style={{ display: "inline-block", width: "48%" }}
                rules={[
                  { required: true, message: "Price is required" },
                  {
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Price is not number",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="saleOffPrice"
                dependencies={["originalPrice"]}
                label="Giá khuyến mại"
                style={{ display: "inline-block", width: "48%" }}
                rules={[
                  {
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Price is not number",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        !value ||
                        Number(getFieldValue("originalPrice")) <= Number(value)
                      ) {
                        return Promise.reject(
                          new Error("Giá khuyến mại phải nhỏ hơn giá gốc")
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input />
              </Form.Item>
            </DivLine>

            <Form.Item
              name="categoryId"
              label="Danh mục"
              style={{ display: "inline-block", width: "48%" }}
              rules={[
                { required: true, message: "Vui lòng chọn danh mục sản phẩm" },
              ]}
            >
              <Select placeholder="Danh mục sản phẩm">
                {category.map((item, index) => {
                  return (
                    <Option value={item.id} key={index}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="feature" label="Đặc điểm nổi bật">
              <TextArea rows={5} />
            </Form.Item>

            <Form.Item name="desc" label="Mô tả dài">
              <TextArea rows={5} />
            </Form.Item>

            <Form.Item>
              <BtnSubmit type="primary" htmlType="submit">
                Sửa sản phẩm
              </BtnSubmit>
            </Form.Item>
          </Col>
        </Row>
      </FormAdd>
      <ToastContainer />
    </>
  );
};

const TitlePage = styled.h3`
  font-size: 20px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 20px;
`;

const InfoProduct = styled.h3`
  font-size: 16px;
  color: #5f5e61;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e5eb;
`;

const FormAdd = styled(Form)`
  background-color: #fff;
  padding: 20px;
`;

const DivLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnSubmit = styled(Button)`
  width: 140px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

const LeftContent = styled.div`
  padding: 20px;
`;

const UploadImage = styled(Dragger)`
  margin-top: 20px;
  padding: 20px;
  background: #fff !important;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid #ccc !important;
  margin-bottom: 20px;
`;
export default EditProduct;
