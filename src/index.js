import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css';
import { MainPage } from './pages/MainPage';
import { TodoPage } from './pages/TodoPage';
import { Page404 } from './pages/Page404';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/task/:id' element={<TodoPage />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
