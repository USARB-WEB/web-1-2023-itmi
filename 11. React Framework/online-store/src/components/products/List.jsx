import { useEffect, useState } from "react"
import ProductItem from './Item'

export default function ProductsList({items}){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(items);
    }, [])

    return <section>
        {products && products.map(product => 
            <ProductItem product={product} key={product.id}></ProductItem>
        )}
    
  </section>
}