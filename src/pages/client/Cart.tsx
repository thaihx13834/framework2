import { CloseOutlined } from "@ant-design/icons";
import { PageHeader, Space } from "antd";
import { Button } from "antd/lib/radio";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ProductType } from "../../types/ProductType";

type Props = {};

const Cart = (props: Props) => {
  const { cart, total }: any = useSelector((store) => store);

  const dipatch = useDispatch();
  return (
    <Cartt>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Trở về"
        subTitle="Giỏ hàng"
      ></PageHeader>

      <div className="list-cart">
        {cart.map((item: any, index: number) => {
          return (
            <div key={index} className="cart-item">
              <div className="cart-img">
                <img src={item.img} alt="" />
              </div>

              <div className="cart-content">
                <h3 className="product-name">{item.name}</h3>{" "}
                <div className="price-product">
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
                <div>
                  <strong>Chọn số lương: </strong>
                  <div className="quantity">
                    <Button
                      onClick={() => {
                        dipatch({
                          type: "cart/increase",
                          payload: item.id,
                        });
                      }}
                    >
                      +
                    </Button>
                    <div className="qtt">{item.quantity}</div>
                    <Button
                      onClick={() => {
                        dipatch({
                          type: "cart/decrease",
                          payload: item.id,
                        });
                      }}
                    >
                      -
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  className="remove-item-cart"
                  onClick={() => {
                    dipatch({
                      type: "cart/delete",
                      payload: item.id,
                    });
                  }}
                >
                  <CloseOutlined />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="total">
        <div>Tổng tiền tạm tính: </div>
        <div className="total-text">
          {total.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      </div>

      <div className="action">
        <Button className="butt red">Tiến hành đặt hàng</Button>
        <Button className="butt white">Chọn thêm sản phẩm khác</Button>
      </div>
    </Cartt>
  );
};

const Cartt = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  .ant-page-header-heading-title {
    color: red;
  }

  .ant-page-header-heading-sub-title {
    font-size: 24px;
    color: red;
    margin-left: 410px;
    font-weight: 500;
  }

  .total,
  .action,
  .list-cart {
    max-width: 680px;
    margin: 50px auto;
  }

  .cart-item {
    display: flex;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
    border-radius: 10px;
  }
  .cart-img {
    margin-right: 50px;
    padding: 20px 0;
  }

  .product-name {
    margin-top: 20px;
  }

  .remove-item-cart {
    margin-top: 20px;

    border: none;
    font-weight: 700;
    margin-left: 70px;
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

  .price {
    display: inline-block;
  }

  .quantity {
    display: inline-flex;
    align-items: center;
  }

  .qtt {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total-text {
    color: red;
    font-size: 18px;
  }

  .butt {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    height: 50px;
    background: #d70018;
    border: 1px solid #dc3545;
    border-radius: 4px;
    margin: 10px 0;
  }

  .red {
    color: #fff;
  }

  .white {
    color: red;
    background: #fff;
  }
`;

export default Cart;
