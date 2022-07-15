import { InboxOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  PageHeader,
  Row,
  Select,
  Upload,
} from "antd";
import Meta from "antd/lib/card/Meta";
import TextArea from "antd/lib/input/TextArea";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const AddPhone = (props: Props) => {
  const { Option } = Select;
  return (
    <>
      <TitlePage>Thêm mới Điện thoại</TitlePage>
      <FormAdd
        layout="vertical"
        initialValues={{
          category: "Điện thoại",
        }}
      >
        <Row>
          <Col span={12}>
            <LeftContent>
              <UploadImage>
                <p className="ant-upload-drag-icon">
                  <PlusSquareOutlined />
                </p>
                <p>Thêm ảnh!</p>
              </UploadImage>

              <Form.Item name="name" label="Mô tả ngắn">
                <TextArea rows={5} placeholder="Mô tả ngắn : " />
              </Form.Item>
            </LeftContent>
          </Col>
          <Col span={12}>
            <InfoProduct>Thông tin sản phẩm</InfoProduct>

            <Form.Item name="name" label="Tên sản phẩm">
              <Input />
            </Form.Item>

            <DivLine>
              <Form.Item
                name="name"
                label="Giá gốc"
                style={{ display: "inline-block", width: "48%" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="name"
                label="Giá khuyến mại"
                style={{ display: "inline-block", width: "48%" }}
              >
                <Input />
              </Form.Item>
            </DivLine>

            <Form.Item
              name="category"
              label="Danh mục"
              style={{ display: "inline-block", width: "48%" }}
            >
              <Select placeholder="Select province">
                <Option value="phone">Điện thoại</Option>
                <Option value="laptop">Laptop</Option>
                <Option value="tablet">Máy tính bảng</Option>
                <Option value="sound">Âm thanh</Option>
              </Select>
            </Form.Item>

            <Form.Item name="name" label="Đặc điểm nổi bật">
              <TextArea rows={5} />
            </Form.Item>

            <Form.Item name="name" label="Mô tả dài">
              <TextArea rows={5} />
            </Form.Item>

            <Form.Item>
              <BtnSubmit type="primary" htmlType="submit">
                Thêm mới
              </BtnSubmit>
            </Form.Item>
          </Col>
        </Row>
      </FormAdd>
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
export default AddPhone;
