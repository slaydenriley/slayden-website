import React from 'react';
import { Typography, Row, Col, Card, Button, Space, Tag } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import './Work.scss';

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using WebSocket technology.",
    tags: ["React", "TypeScript", "Socket.io"],
    image: "/project2.jpg",
    github: "https://github.com/yourusername/project2"
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets using D3.js and React.",
    tags: ["React", "D3.js", "REST API"],
    image: "/project3.jpg",
    demo: "https://project3.com"
  }
];

const Work: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`section ${isDark ? 'dark' : 'light'}`}
      id="work"
    >
      <Title level={2}>Featured Projects</Title>
      <Row gutter={[24, 24]}>
        {projects.map((project, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              hoverable
              className="project-card"
              cover={<div className="ant-card-cover" />}
              actions={[
                project.github && (
                  <Button type="link" icon={<GithubOutlined />} href={project.github} target="_blank">
                    Source
                  </Button>
                ),
                project.demo && (
                  <Button type="link" icon={<LinkOutlined />} href={project.demo} target="_blank">
                    Demo
                  </Button>
                )
              ].filter(Boolean)}
            >
              <Card.Meta
                title={project.title}
                description={
                  <>
                    <Paragraph ellipsis={{ rows: 2 }}>{project.description}</Paragraph>
                    <Space size={[0, 8]} wrap className="tag-container">
                      {project.tags.map(tag => (
                        <Tag key={tag} color="green">{tag}</Tag>
                      ))}
                    </Space>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </motion.section>
  );
};

export default Work; 