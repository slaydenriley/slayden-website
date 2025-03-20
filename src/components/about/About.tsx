import React, { useState } from 'react';
import { Typography, Row, Col, Button, Space, Timeline, Divider, Tag, Modal } from 'antd';
import { motion } from 'framer-motion';
import {
  EnvironmentOutlined,
  CalendarOutlined,
  EyeOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import PDFViewer from '../pdf-viewer/PDFViewer';
import './About.scss';

const { Title, Text, Paragraph } = Typography;

const skillsData = {
  'Languages & Frameworks': [
    'C#', '.NET', 'EF Core',
    'TypeScript', 'JavaScript',
    'React', 'Redux',
    'HTML', 'CSS'
  ],
  'Databases & Cloud': [
    'SQL Server', 'PostgreSQL',
    'CosmosDB',
    'AWS', 'Azure',
    'Docker', 'Kubernetes'
  ],
  'Tools & Practices': [
    'Git', 'GitHub Actions',
    'Terraform', 'GitOps',
    'Kafka',
    'Agile', 'Scrum'
  ]
};

const About: React.FC = () => {
  const { isDark } = useTheme();
  const [showPDF, setShowPDF] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`section ${isDark ? 'dark' : 'light'}`}
      id="about"
    >
      <Row justify="space-between" align="middle" className="section-header">
        <Title level={2}>About Me & Experience</Title>
        <Button 
          type="primary" 
          icon={<EyeOutlined />} 
          size="large"
          onClick={() => setShowPDF(true)}
        >
          View Resume
        </Button>
      </Row>

      <Modal
        open={showPDF}
        onCancel={() => setShowPDF(false)}
        width="75%"
        style={{ 
          top: '2vh',
          maxWidth: '1100px'
        }}
        footer={null}
        styles={{
          body: {
            padding: '32px 0 0',
            height: '96vh'
          }
        }}
        title={
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            href="/resume.pdf"
            target="_blank"
            download
            size="middle"
            style={{
              marginLeft: '-8px'
            }}
          >
            Download PDF
          </Button>
        }
      >
        <PDFViewer pdfUrl="/resume.pdf" />
      </Modal>

      <div className="professional-summary">
        <Paragraph>
          Hello, I'm Riley Slayden! I'm a Senior Software Engineer experienced in building full-stack applications using C#/.NET and JavaScript/React. I enjoy creating efficient software solutions that make a real impact in the world. My experience ranges from developing fintech microservices to building automated systems that streamline business operations.
        </Paragraph>
        <Paragraph>
          When I'm not at the computer, you'll find me playing bluegrass banjo, hiking Arkansas's beautiful trails, or fly-fishing in our local rivers.
        </Paragraph>
      </div>

      <div className="skills-section">
        <Title level={3}>Technical Skills</Title>
        <Row gutter={[24, 24]}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <Col xs={24} md={8} key={category}>
              <div className="skill-column">
                <Title level={4}>{category}</Title>
                <Space size={[8, 16]} wrap>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Tag
                        color="green"
                        style={{ 
                          padding: '4px 12px',
                          fontSize: '14px',
                          margin: '4px',
                        }}
                      >
                        {skill}
                      </Tag>
                    </motion.div>
                  ))}
                </Space>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div>
        <Title level={3}>Work Experience</Title>
        <Timeline>
          <Timeline.Item 
            className="timeline-item"
          >
            <Title level={4}>Senior Software Engineer</Title>
            <Text strong>Mindset</Text>
            <br />
            <Space>
              <EnvironmentOutlined /> Remote
              <Divider type="vertical" />
              <CalendarOutlined /> Dec 2024 - Present
            </Space>
            <Paragraph>
              • Designed and developed a full-stack automated fax management system using C#/.NET and TypeScript/React, processing over 200 faxes per day while significantly reducing manual handling time for internal employees
              <br />
              • Developed a secure SMS/Email registration link service using AWS Pinpoint, streamlining user onboarding, enhancing security, and reducing manual effort for internal case managers
              <br />
              • Refactored the React frontend using the Ant Design component library, reducing technical debt, improving maintainability, and enhancing navigation with breadcrumbs and optimized authorization patterns
            </Paragraph>
          </Timeline.Item>

          <Timeline.Item 
            className="timeline-item"
          >
            <Title level={4}>Software Engineer II</Title>
            <Text strong>Submittable – Fintech Team</Text>
            <br />
            <Space>
              <EnvironmentOutlined /> Remote
              <Divider type="vertical" />
              <CalendarOutlined /> Jan 2024 - Dec 2024
            </Space>
            <Paragraph>
              • Developed fintech microservices written in C#/.NET and hosted in Azure to support employee charitable giving, resulting in thousands of dollars successfully and securely donated
              <br />
              • Modernized a grant-making budgeting app in React to meet new design specifications and product requirements, delivering key financial features to customers tracking their grant program budgets directly within our main product
              <br />
              • Improved payment transaction accuracy, auditability, and idempotency by integrating a double-entry accounting ledger directly within fintech services
              <br />
              • Researched, authored, and led technical design discussions to scope out work, collaborate with stakeholders, and ensure alignment on the most effective solutions for complex problems
            </Paragraph>
          </Timeline.Item>

          <Timeline.Item 
            className="timeline-item"
          >
            <Title level={4}>Software Engineer I</Title>
            <Text strong>Submittable – Fintech Team</Text>
            <br />
            <Space>
              <EnvironmentOutlined /> Remote
              <Divider type="vertical" />
              <CalendarOutlined /> May 2023 - Dec 2023
            </Space>
            <Paragraph>
              • Served as technical lead for a custom funds distribution integration with U.S. Bank, successfully disbursing $1.8 billion to millions of recipients for state governments and organizations in 2023 across multiple payment rails
              <br />
              • Streamlined CI/CD processes for .NET APIs, improving deployment efficiency by establishing EF Core DB migration patterns within Kubernetes and ArgoCD
              <br />
              • Refactored a legacy WinForms application to enhance internal payment tools for the Finance team, laying the groundwork for the migration to a modern microservice architecture
            </Paragraph>
          </Timeline.Item>

          <Timeline.Item 
            className="timeline-item"
          >
            <Title level={4}>Software Test Engineer</Title>
            <Text strong>Submittable – Internal Tools Team</Text>
            <br />
            <Space>
              <EnvironmentOutlined /> Remote
              <Divider type="vertical" />
              <CalendarOutlined /> Apr 2021 - Apr 2023
            </Space>
            <Paragraph>
              • Managed the development of automated UI smoke tests using JavaScript and TestCafe, collaborating closely with a team of 2 test engineers to integrate ECS instances within existing CI/CD pipelines
              <br />
              • Boosted automated test coverage by over 150%, enhancing software quality and identifying bugs early to ensure smooth production releases
              <br />
              • Developed and executed load tests in AWS ECS to simulate real user browser traffic, uncovering database bottlenecks and driving a huge increase in maximum website capacity and load handling—from 50 submissions/second to 15,000 submissions/second
              <br />
              • Conducted testing for the migration of over 20,000 legacy clients to the new Submittable form-builder experience, including data migration verification from SQL Server to PostgreSQL
            </Paragraph>
          </Timeline.Item>
        </Timeline>
      </div>

      <div>
        <Title level={3}>Education</Title>
        <Timeline>
          <Timeline.Item className="timeline-item">
            <Title level={4}>B.S. Computer Science</Title>
            <Text strong>Western Governors University</Text>
            <br />
            <Space>
              <EnvironmentOutlined /> Remote
              <Divider type="vertical" />
              <CalendarOutlined /> Jan 2025 - Present
            </Space>
            <Paragraph>
              Expected graduation: December 2026
            </Paragraph>
          </Timeline.Item>

          <Timeline.Item className="timeline-item">
            <Title level={4}>Full-Stack Software Engineering</Title>
            <Text strong>Flatiron School</Text>
            <br />
            <Space>
              <EnvironmentOutlined /> Remote
              <Divider type="vertical" />
              <CalendarOutlined /> Oct 2019 - Mar 2021
            </Space>
            <Paragraph>
              • Completed full-stack software engineering immersive program, focusing on learning the fundamentals of software engineering and computer science
              <br />
              • Skills developed: Ruby, Rails, SQL, HTML, CSS, JavaScript, React, Redux
            </Paragraph>
          </Timeline.Item>
        </Timeline>
      </div>
    </motion.section>
  );
};

export default About; 