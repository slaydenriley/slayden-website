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
            <motion.div className="profile-image-container">
                <img src="images/profile.jpg" alt="Riley Slayden" />
            </motion.div>
            <Title level={1} className="hero-title">
                Hi, I'm Riley Slayden
            </Title>
            <div className="hero-subtitle-container">
                <motion.div 
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="subtitle-item">Software Engineer 👨‍💻</span>
                    <span className="subtitle-separator">•</span>
                    <span className="subtitle-item">Banjo Player 🪕</span>
                    <span className="subtitle-separator">•</span>
                    <span className="subtitle-item">Outdoor Enthusiast 🏔️</span>
                </motion.div>
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
