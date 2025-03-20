import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from './App';
import ThemeProvider from './contexts/ThemeContext';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
