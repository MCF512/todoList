import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextWrapper } from './ContextWrapper';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css';
import { MainPage } from './pages/MainPage';
import { TodoPage } from './pages/TodoPage';
import { Page404 } from './pages/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/task/:id' element={<TodoPage />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
