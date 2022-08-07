import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { search } from "../../api/product";
import { ProductType } from "../../types/ProductType";
import style from "./style.module.css";

type Props = {};

const Header = (props: Props) => {
  const [auth, setAuth] = useState<any>();
  const [searchtxt, setSearchtxt] = useState<string>("");
  const [product, setProduct] = useState<ProductType[]>([]);
  const navigate = useNavigate();
  const handleSearch = (value: any) => {
    navigate(`/search?_str=${value}`);
  };

  const handleChange = (e: any) => {
    setSearchtxt(e.target.value);
    console.log(searchtxt);
  };

  useEffect(() => {
    const getData = async () => {
      const resProducts = await search(searchtxt as string);
      setProduct(resProducts.data);
    };
    getData();
  }, [searchtxt]);

  useEffect(() => {
    const getA = () => {
      setAuth(JSON.parse(localStorage.getItem("user") as string));
    };
    getA();
  }, []);
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to={`/signup`}>Đăng kí</Link>,
        },
        {
          label: <Link to={`/signin`}>Đăng nhập</Link>,
          key: "2",
        },
      ]}
    />
  );
  const menuAuth = (
    <Menu
      items={[
        {
          label: <Link to={`/signin`}>{auth?.user?.name}</Link>,
          key: "1",
        },
        {
          key: "2",
          label: (
            <Button
              onClick={() => {
                handleLogout();
              }}
            >
              Đăng xuất
            </Button>
          ),
        },
      ]}
    />
  );

  const handleLogout = () => {
    console.log(1);

    localStorage.removeItem("user");
    // setAuth(localStorage.removeItem("user"));
    setAuth(undefined);
    console.log(auth);
  };
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to="/">
          <img src="../../../img/logo.png" width="65" height="57" alt="" />
        </NavLink>
      </div>
      <div className={style.search}>
        <Ip
          size="large"
          prefix={<SearchOutlined />}
          className="input-search"
          enterButton={false}
          onSearch={handleSearch}
          onChange={handleChange}
          value={searchtxt ? searchtxt : ""}
        />
        {searchtxt && (
          <Search className="input-search-product">
            <div className="input-product-list">
              {product.map((item, index) => {
                return (
                  <div
                    className="product-item"
                    key={index}
                    onClick={() => {
                      navigate(`/search?_str=${item.name}`);

                      setSearchtxt("");
                    }}
                  >
                    <img src={item.img} alt="" width={100} />
                    <h4>{item.name}</h4>
                  </div>
                );
              })}
            </div>
          </Search>
        )}
      </div>
      <div className={style.infomation}>
        <div className={style.item}>
          <div className={style.icon_phone}></div>
          <p className={style.content}>
            Gọi mua hàng <br /> <strong>1800.2097</strong>
          </p>
        </div>

        <div className={style.item}>
          <div className={style.location_icon}>
            <svg
              width="18"
              height="23.52"
              viewBox="0 0 18 23.52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.25003 9C4.25003 6.37665 6.37667 4.25 9.00002 4.25C11.6234 4.25 13.75 6.37665 13.75 9C13.75 11.6234 11.6234 13.75 9.00002 13.75C6.37667 13.75 4.25003 11.6234 4.25003 9ZM9.00002 5.75C7.2051 5.75 5.75003 7.20507 5.75003 9C5.75003 10.7949 7.2051 12.25 9.00002 12.25C10.795 12.25 12.25 10.7949 12.25 9C12.25 7.20507 10.795 5.75 9.00002 5.75Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.524388 7.85685C0.878716 3.55824 4.47087 0.25 8.78406 0.25H9.216C13.5292 0.25 17.1213 3.55824 17.4757 7.85685C17.666 10.166 16.9527 12.4589 15.4861 14.2526L10.693 20.1144C9.818 21.1845 8.18205 21.1845 7.30705 20.1144L2.51399 14.2526C1.04733 12.4589 0.334049 10.166 0.524388 7.85685ZM8.78406 1.75C5.25152 1.75 2.30952 4.45948 2.01932 7.98008C1.8609 9.90192 2.45455 11.8102 3.67521 13.3031L8.46827 19.1649C8.7431 19.501 9.25695 19.501 9.53178 19.1649L14.3248 13.3031C15.5455 11.8102 16.1391 9.90192 15.9807 7.98008C15.6905 4.45948 12.7485 1.75 9.216 1.75H8.78406Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={style.content}>
            Cửa hàng <br />
            gần bạn
          </p>
        </div>

        <div className={style.item}>
          <div className={style.bill_icon}>
            <UserOutlined />
          </div>
          {auth ? (
            <Dropdown overlay={menuAuth} placement="bottomRight" arrow>
              <p className={style.btn_auth}>
                Hi! <br />
                {auth?.user?.name}
              </p>
            </Dropdown>
          ) : (
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <p className={style.btn_auth}>
                Đăng kí <br />
                Đăng nhập
              </p>
            </Dropdown>
          )}
        </div>

        <div className={style.item}>
          <div className={style.cart_icon}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={style.c}
            >
              <path
                d="M9.30994 7.51354V3.8138C9.30899 3.39575 9.39087 2.98165 9.55085 2.59542C9.71082 2.20919 9.94573 1.85847 10.242 1.56353C10.5383 1.26858 10.89 1.03525 11.277 0.877009C11.6639 0.718767 12.0784 0.638749 12.4964 0.641575V0.641575C13.3378 0.641575 14.1446 0.975791 14.7395 1.5707C15.3344 2.16561 15.6687 2.97247 15.6687 3.8138V7.51354"
                stroke="white"
                strokeWidth="1.28315"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9122 24.3584H6.08075C5.63137 24.3578 5.18696 24.2644 4.77534 24.084C4.36373 23.9037 3.99377 23.6404 3.68863 23.3105C3.3835 22.9806 3.14975 22.5912 3.00202 22.1668C2.85429 21.7424 2.79576 21.2921 2.8301 20.844L3.96355 6.25891C3.98506 6.00175 4.10263 5.76212 4.29286 5.58775C4.48309 5.41337 4.73201 5.31704 4.99007 5.31794H20.0029C20.2602 5.31718 20.5083 5.41375 20.6974 5.58827C20.8864 5.7628 21.0025 6.00237 21.0223 6.25891L22.1415 20.844C22.1768 21.2905 22.1196 21.7395 21.9736 22.1629C21.8275 22.5864 21.5957 22.9751 21.2927 23.3049C20.9896 23.6347 20.6218 23.8985 20.2123 24.0798C19.8027 24.261 19.3601 24.3559 18.9122 24.3584V24.3584Z"
                stroke="white"
                strokeWidth="1.28315"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={style.content}>
            Giỏ <br />
            hàng
          </p>
        </div>
      </div>
    </div>
  );
};

const Ip = styled(Input.Search)`
  position: relative;
  input.ant-input {
    width: 350px;
    border-radius: 15px;
  }

  .ant-input-group-addon {
    display: none;
  }
`;

const Search = styled.div`
  position: absolute;
  top: 51px;
  z-index: 20;
  width: 394px;
  padding: 20px 10px;
  background-color: #fff;

  .product-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Header;
