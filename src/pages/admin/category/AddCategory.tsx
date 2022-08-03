import { InboxOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  UploadFile,
  UploadProps,
} from "antd";
import Dragger from "antd/lib/upload/Dragger";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { addCategory, listCategory } from "../../../api/category";
import { onPreview, upload, validateFile } from "../../../utils/upload";

type Props = {};

const AddCategory = (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { Option } = Select;

  const [fileList, setfileList] = useState<UploadFile[] | any>([]);

  const onFinish = async (values: any) => {
    const imglink = await upload(fileList[0]);

    try {
      addCategory({
        name: values.name,
        status: 0,
        img: imglink,
      });
      toast.success("Thêm thành công");
      setTimeout(() => {
        navigate("/admin/categories");
      }, 1000);
    } catch (error) {
      toast.error("Thêm không thành công");
    }
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setfileList(newFileList);
  };

  return (
    <>
      <TitlePage>Thêm mới Danh mục sản phẩm</TitlePage>
      <FormAdd layout="vertical" onFinish={onFinish}>
        <Row>
          <Col span={12}>
            <LeftContent>
              <Form.Item
                name="imgfile"
                rules={[{ required: true, message: "Hãy thêm 1 ảnh" }]}
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
            </LeftContent>
          </Col>
          <Col span={12}>
            <InfoProduct>Thông tin danh mục</InfoProduct>

            <Form.Item
              name="name"
              label="Tên danh mục sản phẩm"
              rules={[{ required: true, message: "Tên không được để trống!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <BtnSubmit type="primary" htmlType="submit">
                Thêm mới
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
export default AddCategory;
