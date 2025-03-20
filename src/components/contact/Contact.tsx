import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { motion } from 'framer-motion';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import './Contact.scss';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`section ${isDark ? 'dark' : 'light'}`}
      id="contact"
    >
      <Title level={2}>Get in Touch</Title>
      <Paragraph className="contact-description">
        Feel free to reach out through any of these platforms. I'm always interested
        in new opportunities, collaborations, or just having a chat about technology.
      </Paragraph>
      
      <Row gutter={[32, 32]} justify="center" className="contact-links">
        <Col xs={24} sm={8}>
          <Button 
            type="link" 
            icon={<MailOutlined />} 
            href="mailto:slaydenriley@gmail.com"
            className="contact-button"
            style={{
              transition: 'transform 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Email
          </Button>
        </Col>
        
        <Col xs={24} sm={8}>
          <Button 
            type="link" 
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/rileyslayden"
            target="_blank"
            className="contact-button"
          >
            LinkedIn
          </Button>
        </Col>
        
        <Col xs={24} sm={8}>
          <Button 
            type="link" 
            icon={<GithubOutlined />}
            href="https://github.com/slaydenriley"
            target="_blank"
            className="contact-button"
          >
            GitHub
          </Button>
        </Col>
      </Row>
    </motion.section>
  );
};

export default Contact; 