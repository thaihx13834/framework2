import { RightOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { listCategory } from "../api/category";
import Banner from "../componets/Banner";
import { CategoryType } from "../types/CategoryType";

type Props = {};

const Homepage = (props: Props) => {
  const { Header, Footer, Sider, Content } = Layout;
  const [category, setCategory] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
  }, []);

  const menuCategory = category.map((item) => ({
    key: item.id as string,
    label: item.name,
    icon: <RightOutlined />,
  }));
  return (
    <Container>
      <BannerAndCategory>
        <Category>
          <MenuC items={menuCategory} />
        </Category>
        <Content>
          <Banner />
        </Content>
      </BannerAndCategory>
    </Container>
  );
};

const BannerAndCategory = styled(Layout)`
  /* margin: 20px 290px; */
`;
const Container = styled.div`
  margin: 20px 290px;
`;

const Category = styled(Layout.Sider)`
  background-color: #fff;
`;

const MenuC = styled(Menu)`
  .ant-menu-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #343a40;
  }
`;

export default Homepage;
