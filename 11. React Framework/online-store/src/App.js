import logo from './logo.svg';
import './App.css';
import Header from './components/template/Header';
import Nav from './components/template/Nav';
import Products from './components/products';
import Footer from './components/template/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <main id="page-content">
        <Products></Products>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
