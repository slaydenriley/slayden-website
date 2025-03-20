import React from 'react';
import { Typography, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { ArrowDownOutlined, CodeOutlined } from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import './Hero.scss';

const { Title } = Typography;

interface HeroProps {
    onSectionClick: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionClick }) => {
    const { isDark } = useTheme();

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`section hero-section ${isDark ? 'dark' : 'light'}`}
            id="home"
        >
            <motion.div 
                className="profile-image-container"
                animate={{ 
                    y: [-5, 5, -5],
                }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 5,
                    ease: "easeInOut" 
                }}
            >
                <img src="images/profile.jpg" alt="Riley Slayden" />
            </motion.div>
            <Title level={1} className="hero-title">
                Hi, I'm Riley Slayden
            </Title>
            <div className="hero-subtitle-container">
                <span className="hero-subtitle-text">Software Engineer 👨‍💻 | Banjo Enthusiast 🪕</span>
            </div>
            <Space size="large" className="hero-buttons">
                <Button type="primary" size="large" icon={<CodeOutlined />} onClick={() => onSectionClick('about')}>
                    About Me
                </Button>
            </Space>
            <div className="scroll-indicator">
                <ArrowDownOutlined onClick={() => onSectionClick('about')} />
            </div>
        </motion.section>
    );
};

export default Hero; 
