import { ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Image, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { detailCategory } from "../../api/category";
import { product, similarProduct } from "../../api/product";
import { CategoryType } from "../../types/CategoryType";
import { ProductType } from "../../types/ProductType";

type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [productd, setProductd] = useState<ProductType>();
  const [category, setCategory] = useState<CategoryType>();
  const [similarpr, setSimilarpr] = useState<ProductType[]>([]);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await product(id as string);
      setProductd(data);
      const resCate = await detailCategory(data.categoryId);
      setCategory(resCate.data);

      const similarProductRes = await similarProduct(data.categoryId);
      setSimilarpr(similarProductRes.data);
    };
    getProduct();
  }, [id]);

  const dispatch = useDispatch();

  const addToCart = (item: any) => {
    message.success("Thêm vào giỏ hàng thành công");

    item.quantity = 1;
    dispatch({
      type: "cart/add",
      payload: item,
    });
  };
  return (
    <div>
      <Breadcrumbb>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/category/${category?.id}`}>{category?.name}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/products/${id}`}>{productd?.name}</Link>
        </Breadcrumb.Item>
      </Breadcrumbb>
      <MainContent>
        <div className="product-name">
          <h3>{productd?.name}</h3>
        </div>

        <Row className="product-content">
          <Col span={18} push={9}>
            <div className="product-body">
              <div>
                <div className="product-price">
                  <span className="saleOffPrice">
                    {productd?.saleOffPrice.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>

                  <span className="originalPrice">
                    {productd?.originalPrice.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>

                <div className="brief">
                  <b>Mô tả ngắn: </b>
                  {productd?.brief}
                </div>
              </div>

              <div className="product-action">
                <button className="buy-now">Mua Ngay</button>
                <div className="add-cart">
                  <button
                    onClick={() => {
                      addToCart(productd);
                    }}
                  >
                    <ShoppingCartOutlined />
                  </button>
                  <p>
                    Thêm vào <br />
                    <span>giỏ hàng</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={5} pull={18}>
            <img src={productd?.img} width={350} />
          </Col>
        </Row>

        <div className="spcl">
          <h3 className="spcl-title">Sản phẩm cùng loại</h3>
          <Row gutter={18} className="similar-product" justify="center">
            {similarpr
              .filter((item) => item.id !== productd?.id)
              .map((item, index) => {
                return (
                  <Col className="gutter-row" span={4} key={index}>
                    <div className="product-sm-main">
                      <div className="product-sm-img">
                        <Link to={`/products/${item.id}`}>
                          <img src={item.img} alt="" />
                        </Link>
                      </div>
                      <div className="product-sm-content">
                        <Link to={`/products/${item.id}`}>
                          <h3 className="product-sm-name">{item.name}</h3>
                        </Link>
                        <div className="product-sm-price">
                          <span className="product-sm-saleOffPrice">
                            {item.saleOffPrice.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>

                          <span className="product-sm-originalPrice">
                            {item.originalPrice.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>

        <div className="feature">
          <h3 className="feature-title">Đặc điểm nổi bật</h3>
          <p className="feature-content">{productd?.feature}</p>
        </div>

        <div className="desc">
          <p className="desc-content">
            {show ? productd?.desc : productd?.desc.substring(0, 500) + "..."}
          </p>

          <div className="read">
            <button
              onClick={() => {
                setShow(!show);
              }}
              className="handleshow"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </MainContent>
    </div>
  );
};

const Breadcrumbb = styled(Breadcrumb)`
  padding: 4px 0 4px 192px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
`;

const MainContent = styled.div`
  max-width: 1150px;
  margin: 0 auto;

  .product-name {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #0a263c;
    margin: 10px 0;
    border-bottom: 1px solid #d1d5db;
  }

  .product-content {
    padding: 20px 0;
  }

  .product-price {
    margin-top: 30px;
  }

  .saleOffPrice {
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    color: #d70018;
    margin-right: 10px;
  }

  .originalPrice {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #707070;
  }

  .brief {
    margin-top: 20px;
    width: 600px;
  }

  .product-action {
    display: flex;
    margin-top: 140px;
  }

  .add-cart {
    display: flex;
  }

  .add-cart > button {
    margin-left: 10px;
    width: 48px;
    height: 48px;
    background: #ff3945;
    border: none;
    font-size: 20px;
    border-radius: 4px;
    color: #fff;
    text-transform: capitalize;
  }

  .add-cart > p {
    text-transform: capitalize;
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    margin: 0 0 0 10px;
    text-align: center;
  }

  .buy-now {
    width: 233px;
    height: 48px;
    padding: 9px 50px;
    background: #ff3945;
    border-radius: 4px;
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #ffffff;
  }

  .similar-product > .ant-col-4 {
    max-width: 21.666667%;
  }
  .similar-product {
    margin-top: 80px;
  }
  .product-sm-img {
    text-align: center;
  }

  .product-sm-name {
    font-size: 14px;
    margin: 10px 0;
  }

  .product-sm-saleOffPrice {
    font-size: 15px;
    color: red;
    font-weight: 500;
  }

  .product-sm-originalPrice {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #707070;
    margin-left: 7px;
  }

  .feature {
    background: #f2f2f2;
    border-radius: 5px;
    padding: 20px;
    margin-top: 50px;
  }

  .feature-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #d70018;
    text-align: center;
    text-transform: uppercase;
  }

  .feature-content {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #444444;
  }

  .desc {
    margin: 30px 10px;
  }
  .read {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 150px;
  }

  .handleshow {
    width: 335px;
    height: 34px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.1);
    border-radius: 10px;
  }
`;

export default ProductDetail;
