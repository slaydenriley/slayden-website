import React from 'react';
import { Menu, Switch } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  FolderOutlined,
  MailOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';

interface MainMenuProps {
  collapsed: boolean;
}

const MainMenu: React.FC<MainMenuProps> = ({ collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

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
        style={{ border: 'none' }}
      />
      <div
        style={{
          padding: collapsed ? '8px 8px' : '16px',
          textAlign: 'center',
          borderTop: `1px solid ${isDark ? '#303030' : '#f0f0f0'}`,
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 48, // Account for the collapse button
          left: 0,
          right: 0,
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {!collapsed && <BulbOutlined style={{ fontSize: '16px', color: isDark ? '#fff' : '#000' }} />}
        <Switch
          checked={isDark}
          onChange={toggleTheme}
          checkedChildren={collapsed ? "🌙" : "Dark"}
          unCheckedChildren={collapsed ? "☀️" : "Light"}
          size={collapsed ? 'small' : 'default'}
          style={{
            backgroundColor: isDark ? '#177ddc' : '#1890ff',
          }}
        />
      </div>
    </>
  );
};

export default MainMenu;
