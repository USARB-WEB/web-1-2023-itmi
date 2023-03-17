import { Link } from "react-router-dom";

export default function Nav(){
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Contact</Link>
      </nav>
}