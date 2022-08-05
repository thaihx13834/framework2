import { RightOutlined } from "@ant-design/icons";
import { Col, Image, Layout, Menu, Rate, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { listCategory } from "../api/category";
import Banner from "../componets/Banner";
import { CategoryType } from "../types/CategoryType";
import { Link, NavLink } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { listProduct } from "../api/product";
import { ProductType } from "../types/ProductType";

type Props = {};

const Homepage = (props: Props) => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Header, Footer, Sider, Content } = Layout;
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [product, setProduct] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    const getProducts = async () => {
      const { data } = await listProduct();
      setProduct(data);
      console.log(data);
    };
    getProducts();
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

      <ContentProduct>
        <Titlee>Điện thoại nổi bật nhất</Titlee>

        <SwiperProduct
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
          spaceBetween={15}
          slidesPerView={4}
          grid={{ rows: 2 }}
          autoplay={{ delay: 2000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {product.map((item: any, index: number) => {
            console.log(item);

            return (
              <SwiperSlide key={index}>
                <div className="swiper-img-product-wrapper">
                  <NavLink to={`/products/${item.id}`}>
                    <Image src={item.img} />
                  </NavLink>
                </div>
                <div className="swiper-body-product">
                  <NavLink to={`/products/${item.id}`}>
                    <h4 className="swiper-title-product">{item.name}</h4>
                  </NavLink>

                  <div className="swiper-price-product">
                    <p className="price saleOffPrice">
                      <span>
                        {item.saleOffPrice.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </p>

                    <p className="price originalPrice">
                      <span>
                        {item.originalPrice.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </p>
                  </div>

                  <div className="brief">
                    <p className="brief-content">{item.brief}</p>
                  </div>

                  <div>
                    <Rate
                      disabled
                      defaultValue={Math.floor(Math.random() * 6) + 1}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </SwiperProduct>
      </ContentProduct>

      <div>
        <Titlee>Danh mục sản phẩm</Titlee>

        <Row
          style={{
            padding: "30px",
            position: "relative",
            marginBottom: "50px",
          }}
          gutter={16}
        >
          {category.map((item, index) => {
            return (
              <ItemCategory
                key={index}
                span={3}
                color={(Math.floor(Math.random() * 16777215) + 1).toString(16)}
              >
                {item.name}
                <ImgCategory>
                  <img src={item.img} alt="" />
                </ImgCategory>
              </ItemCategory>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

const BannerAndCategory = styled(Layout)`
  /* margin: 20px 290px; */
`;
const Container = styled.div`
  margin: 20px 200px;
`;

const Category = styled(Layout.Sider)`
  background-color: #fff;
`;

const ContentProduct = styled(Layout.Content)`
  margin-top: 72px;
`;

const Titlee = styled.h2`
  font-style: normal;

  font-weight: 400;

  line-height: 40px;
  color: #444444;
`;

const Img = styled.img`
  max-width: 100%;
`;

const ImgCategory = styled.div`
  position: absolute;
  right: 14px;
  bottom: 10px;
`;

const SwiperProduct = styled(Swiper)`
  padding: 10px;
  height: 900px;
  padding-left: 31px;
  .swiper {
  }
  .product-list-swiper .swiper-button-prev {
    padding-right: 10px;
    border-radius: 0 100px 100px 0;
    left: 0;
  }

  .swiper-slide {
    width: 229px !important;
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
    padding: 10px 7px;
  }

  .swiper-title-product {
    margin: 10px 0;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 0 4px 0rgba (0, 0, 0, 0.2);
    font-size: 1.8rem;
    top: 50%;
    transition: 0.3s;
    outline: none;
    opacity: 0.7;
  }
  .swiper-button-prev {
    padding-right: 10px;
    border-radius: 0 100px 100px 0;
    left: 0;
  }

  .swiper-button-next {
    padding-left: 10px;
    border-radius: 100px 0 0 100px;
    right: 0;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 16px;
    font-weight: bolder;
  }
  .swiper-slide {
    height: 412px;
    margin-bottom: 20px;
  }

  .price {
    display: inline-block;
  }

  .swiper-img-product-wrapper {
    text-align: center;
  }

  .saleOffPrice {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-right: 8px;
    color: #d70018;
  }
  .originalPrice {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #707070;
  }

  .brief {
    width: 100%;
    height: 66px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 5px;
    padding: 6px;
  }

  .brief-content {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* or 150% */

    color: #444444;
  }
`;

const MenuC = styled(Menu)`
  .ant-menu-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    padding-left: 0;
    color: #343a40;
  }
`;
const ItemCategory = styled(Col)`
  width: 111px;
  height: 145px;
  margin: 0 10px;
  background-color: ${(props) => "#" + props.color};
  border-radius: 15px;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export default Homepage;
