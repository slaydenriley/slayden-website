import React, { useState, useEffect } from "react";
import { Layout, Menu, Segmented, FloatButton } from "antd";
import {
  HomeOutlined,
  FileOutlined,
  MailOutlined,
  SunFilled,
  MoonFilled,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { useTheme } from "../contexts/ThemeContext";
import Home from "../pages/home/Home";
import './GlobalLayout.scss';

const { Header, Content } = Layout;

const GlobalLayout: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 64;
      
      // Check if we're near the bottom of the page
      const isAtBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 200;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Otherwise check section positions from top
      const sections = ['home', 'about', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerHeight + 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 64;
      const padding = 24;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight - padding,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'about',
      icon: <FileOutlined />,
      label: 'About',
    },
    {
      key: 'contact',
      icon: <MailOutlined />,
      label: 'Contact',
    },
  ];

  return (
    <Layout className={isDark ? 'dark' : 'light'}>
      <Header className={`global-header ${isDark ? 'dark' : 'light'}`}>
        <div 
          className={`site-title ${isDark ? 'dark' : 'light'}`}
          onClick={() => scrollToSection('home')}
        >
          Riley Slayden
        </div>
        
        <div className="header-controls">
          <Menu
            mode="horizontal"
            selectedKeys={[activeSection]}
            items={menuItems}
            onClick={({ key }) => scrollToSection(key)}
            className="nav-menu"
            theme={isDark ? "dark" : "light"}
            overflowedIndicator={<MenuFoldOutlined style={{ fontSize: '18px' }} />}
          />
          
          <div className="theme-toggle">
            <Segmented
              value={isDark ? 'dark' : 'light'}
              onChange={() => toggleTheme()}
              options={[
                { value: 'light', icon: <SunFilled style={{ color: '#faad14' }} /> },
                { value: 'dark', icon: <MoonFilled style={{ color: '#597ef7' }} /> },
              ]}
              size="large"
          
            />
          </div>
        </div>
      </Header>

      <Content className={`main-content ${isDark ? 'dark' : 'light'}`}>
        <div className="content-wrapper">
          <Home />
        </div>
        <FloatButton.BackTop 
          visibilityHeight={400}
          style={{ backgroundColor: '#1677ff' }}
          type="primary"
        />
      </Content>
    </Layout>
  );
};

export default GlobalLayout;
