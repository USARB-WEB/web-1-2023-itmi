import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from './pages';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/product-details';
import Layout from './components/template/Layout';
import ProductCreatePage from './components/products/Create';
import ProductUpdatePage from './components/products/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='products' element={<ProductsPage/>}/>
          <Route path='products/:id' element={<ProductDetailsPage/>}/>
          <Route path='products/create' element={<ProductCreatePage/>}/>
          <Route path='products/update/:id' element={<ProductUpdatePage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
