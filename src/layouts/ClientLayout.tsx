import { BackTop } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../componets/footer";
import Header from "../componets/header";

type Props = {};

const ClientLayout = (props: Props) => {
  const style: React.CSSProperties = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };
  return (
    <div style={{ height: "80vh" }}>
      <Header />
      <Outlet />
      <Footer />
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
};

export default ClientLayout;
