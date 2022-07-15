import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to="/">
          <img src="../../../img/logo.png" width="65" height="57" alt="" />
        </NavLink>
      </div>
      <form action="" className={style.form_search}>
        <div className={style.button_seach}>
          <button type="submit" className={style.button_submit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <input type="text" name="" id="" className={style.form_input} />
      </form>
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
            <svg
              width="41"
              height="24"
              viewBox="0 0 41 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1767_45)">
                <path
                  d="M7.10223 23.2294C8.63843 23.2294 9.88377 21.9824 9.88377 20.4441C9.88377 18.9058 8.63843 17.6588 7.10223 17.6588C5.56602 17.6588 4.32068 18.9058 4.32068 20.4441C4.32068 21.9824 5.56602 23.2294 7.10223 23.2294Z"
                  stroke="white"
                  strokeWidth="1.66"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.9848 23.2294C24.521 23.2294 25.7663 21.9824 25.7663 20.4441C25.7663 18.9058 24.521 17.6588 22.9848 17.6588C21.4486 17.6588 20.2032 18.9058 20.2032 20.4441C20.2032 21.9824 21.4486 23.2294 22.9848 23.2294Z"
                  stroke="white"
                  strokeWidth="1.66"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.5267 20.4255H30.356C30.7101 20.4255 31.0497 20.2847 31.3001 20.0339C31.5505 19.7832 31.6911 19.4432 31.6911 19.0886V13.518"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.1452 0.835587H13.7409C13.3868 0.835587 13.0472 0.976443 12.7968 1.22717C12.5464 1.47789 12.4058 1.81795 12.4058 2.17253V19.1072C12.4106 19.4585 12.5535 19.7938 12.8033 20.0405C13.0532 20.2873 13.39 20.4256 13.7409 20.4255H19.5729"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.52217 5.49632H6.25848C5.85235 5.49656 5.45262 5.5976 5.09503 5.7904C4.73744 5.98321 4.43316 6.26177 4.20941 6.60116L1.23315 11.1412C0.968496 11.5467 0.82976 12.0216 0.834466 12.506V18.5037C0.841775 19.0159 1.05014 19.5047 1.4145 19.8644C1.77886 20.224 2.26993 20.4256 2.78155 20.4255H3.47694"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.6911 3.22166V2.17253C31.6911 1.81795 31.5505 1.47789 31.3001 1.22717C31.0497 0.976443 30.7101 0.835587 30.356 0.835587H23.2538"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.1656 6.47118H30.1984"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.5509 10.2592H30.1984"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.0251 15.1613H35.2979"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1767_45">
                  <rect width="41" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className={style.content}>
            Tra cứu <br />
            đơn hàng
          </p>
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

            <span className={style.quantity}>0</span>
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

export default Header;
