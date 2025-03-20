import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from './App';
import ThemeProvider from './contexts/ThemeContext';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
