import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const HeaderAdmin = (props: Props) => {
  return (
    <Headeradmin>
      <div>
        <Link to="/">
          <img src="../../img/logo.png" width="65" height="57" alt="" />
        </Link>

        <RoundSearch style={{ width: 500 }}>
          <Input size="large" prefix={<SearchOutlined />} />
        </RoundSearch>
      </div>
    </Headeradmin>
  );
};

const RoundSearch = styled(AutoComplete)`
  .ant-input-affix-wrapper-lg {
    border-radius: 10px;
    margin-left: 170px;
  }
`;

const Headeradmin = styled.div`
  background-color: #00b0d7;
  display: flex;
  padding-left: 20px;
  padding: 4px 0 4px 20px;
`;
export default HeaderAdmin;
