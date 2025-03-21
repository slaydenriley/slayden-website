import React from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  FolderOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import './MainMenu.scss';

const MainMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/portfolio',
      icon: <FolderOutlined />,
      label: 'Portfolio',
    },
    {
      key: '/contact',
      icon: <MailOutlined />,
      label: 'Contact',
    },
  ];

  return (
    <>
      <Menu
        theme={isDark ? "dark" : "light"}
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        className="main-menu"
      />
    </>
  );
};

export default MainMenu;
