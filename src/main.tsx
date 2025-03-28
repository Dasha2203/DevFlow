import Register from '@src/pages/register';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './layout';
import Login from './pages/login';
import { store } from './store';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>main page</div>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
