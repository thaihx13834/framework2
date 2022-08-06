import { Breadcrumb, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { detailCategory, listCategoryy } from "../../api/category";
import { GetPrWithCategory, listProductt } from "../../api/product";
import { CategoryType } from "../../types/CategoryType";
import { ProductType } from "../../types/ProductType";

import queryString from "query-string";

type Props = {};

const SearchPage = (props: Props) => {
  const { _str } = queryString.parse(location.search);
  const [products, setProducts] = useState<ProductType[]>([]);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const resProducts = await GetPrWithCategory();
  //       setProducts(resProducts.data);
  //     };
  //     getData();
  //   }, []);

  const sortA = () => {
    console.log(1);
    const pr = [...products];
    setProducts(pr.sort((a, b) => a.saleOffPrice - b.saleOffPrice));
  };

  const sortB = () => {
    const pr = [...products];
    setProducts(pr.sort((a, b) => b.saleOffPrice - a.saleOffPrice));
  };
  return (
    <div>
      <Breadcrumbb>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Kết quả tìm kiếm cho: "{_str}"</Link>
        </Breadcrumb.Item>
      </Breadcrumbb>
      {/* 
      <Content>
        <div className="list-category">
          <h3 className="list-category-title">Danh mục sản phẩm</h3>
          <Row gutter={16}>
            {categories.map((item: CategoryType, index: number) => {
              return (
                <Col className="gutter-row gr" span={3} key={index}>
                  <Link to={`/category/${item.id}`}>
                    <div className="category-item-name">{item.name}</div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>

        <div className="list-category-action">
          <h3 className="list-category-title">Sắp xếp sản phẩm</h3>
          <Row gutter={16}>
            <Col className="gutter-row gr" span={3}>
              <div className="category-item-filter" onClick={sortA}>
                <svg
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M416 288h-95.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H416c17.67 0 32-14.33 32-32S433.7 288 416 288zM544 32h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 32 544 32zM352 416h-32c-17.67 0-32 14.33-32 32s14.33 32 32 32h32c17.67 0 31.1-14.33 31.1-32S369.7 416 352 416zM480 160h-159.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H480c17.67 0 32-14.33 32-32S497.7 160 480 160zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"></path>
                </svg>
                Giá Cao - Thấp
              </div>
            </Col>

            <Col className="gutter-row gr" span={3}>
              <div className="category-item-filter" onClick={sortB}>
                <svg
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M320 224H416c17.67 0 32-14.33 32-32s-14.33-32-32-32h-95.1c-17.67 0-32 14.33-32 32S302.3 224 320 224zM320 352H480c17.67 0 32-14.33 32-32s-14.33-32-32-32h-159.1c-17.67 0-32 14.33-32 32S302.3 352 320 352zM320 96h32c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-32c-17.67 0-32 14.33-32 32S302.3 96 320 96zM544 416h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 416 544 416zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"></path>
                </svg>
                Giá Thấp - Cao
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <h3 className="list-category-title sm mb">Sản phẩm</h3>
          <Row gutter={[16, 24]} className="product-list">
            {products.map((item: ProductType, index: number) => {
              return (
                <Col className="gutter-row" span={6} key={index}>
                  <div className="product-item">
                    <div className="product-img">
                      <Link to={`/products/${item.id}`}>
                        <img src={item.img} alt="" />
                      </Link>
                    </div>

                    <div className="product-content">
                      <h3 className="product-name">
                        <Link to={`/products/${item.id}`}>{item.name}</Link>
                      </h3>
                      <div className="product-price">
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
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Content> */}
    </div>
  );
};

const Breadcrumbb = styled(Breadcrumb)`
  padding: 4px 0 4px 192px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
`;

const Content = styled.div`
  max-width: 1135px;
  margin: 0 auto;

  .list-category {
    padding: 20px 0;
  }

  .gr {
    text-align: center;
    margin: 9px 10px;
    height: 34px;
    display: flex;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    align-items: center;
    justify-content: center;
  }

  .category-item-name {
    color: #000;
  }

  .category-item-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .sm {
    margin-top: 40px;
  }

  .mb {
    margin-bottom: 60px;
  }

  .product-item {
    width: 229px !important;
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
    padding: 10px 7px;
  }
  .product-img {
    text-align: center;
  }
  .product-content {
    padding: 10px;
  }
  .product-name > a {
    color: #000;
  }

  .price {
    display: inline-block;
  }
  .saleOffPrice {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-right: 8px;
    color: #d70018;
  }
  .originalPrice {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
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
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }

  .brief-content {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #444444;
  }
`;

export default SearchPage;
