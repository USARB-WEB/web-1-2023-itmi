import { Link } from "react-router-dom";

export default function ProductItem({product}){
    return <article>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <Link to={`/products/${product.id}`}><button>Buy for ${product.price}</button></Link>
  </article>
}