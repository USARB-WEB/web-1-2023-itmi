import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ProductItem from './Item'

export default function ProductsList({items}){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(items);
    }, [])

    return <section>
        <div>
            <Link to={'/products/create'}><button>Create</button></Link>
        </div>
        {products && products.map(product => 
            <ProductItem product={product} key={product.id}></ProductItem>
        )}
    
  </section>
}