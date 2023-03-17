import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from './pages';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/product-details';
import Layout from './components/template/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='products' element={<ProductsPage/>}/>
          <Route path='products/:id' element={<ProductDetailsPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
