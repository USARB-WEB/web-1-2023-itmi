import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
       <div className="App">
            <Header></Header>
            <Nav></Nav>
            <main id="page-content">
                <Outlet />
            </main>
            <Footer></Footer>
        </div>

      
    </>
  )
};

export default Layout;