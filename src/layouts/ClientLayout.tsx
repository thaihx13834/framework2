import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../componets/footer";
import Header from "../componets/header";

type Props = {};

const ClientLayout = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
