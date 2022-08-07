import { Breadcrumb, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { detailCategory, listCategoryy } from "../../api/category";
import { GetPrWithCategory, listProductt, search } from "../../api/product";
import { CategoryType } from "../../types/CategoryType";
import { ProductType } from "../../types/ProductType";

import queryString from "query-string";

type Props = {};

const SearchPage = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  let [searchParams, setSearchParams] = useSearchParams();
  const _str = searchParams.get("_str");

  useEffect(() => {
    const getData = async () => {
      const resProducts = await search(_str as string);
      setProducts(resProducts.data);
    };
    getData();
  }, [_str]);

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

      <Content>
        <div>
          <h3 className="list-category-title sm mb">
            Kết quả tìm kiếm cho: {_str}
          </h3>
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
      </Content>
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
