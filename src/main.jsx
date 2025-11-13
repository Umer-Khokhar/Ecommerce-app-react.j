import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path={'/'} element={<App />}/>
        <Route path={'/product-details/:id'} element={<ProductPage />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
