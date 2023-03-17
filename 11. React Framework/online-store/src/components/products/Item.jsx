export default function ProductItem({product}){
    return <article>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <button>Buy for ${product.price}</button>
  </article>
}