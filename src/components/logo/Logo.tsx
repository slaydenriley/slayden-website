import React from "react";
import { Typography } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import "./logo.scss";

const { Title } = Typography;

interface LogoProps {
  collapsed: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  return (
    <div className="logo-container">
      <CodeOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
      {!collapsed && (
        <Title level={4} style={{ margin: 0, display: "inline-block", marginLeft: "12px" }}>
          Riley Slayden
        </Title>
      )}
    </div>
  );
};

export default Logo;
