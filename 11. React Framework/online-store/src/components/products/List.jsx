import { useEffect, useState } from "react"
import ProductItem from './Item'

export default function ProductsList(){
    const [products, setProducts] = useState([]);

    const productsSeeder = [];
    for (let index = 1; index <= 50; index++) {
        productsSeeder.push({
            name: `Product ${index}`,
            description: `This is a Product ${index} description. Here we can see short information about the product.`,
            price: index
        })
    }
    useEffect(() => {
        setProducts(productsSeeder);
    }, [])

    return <section>
        {products.map(product => 
            <ProductItem product={product}></ProductItem>
        )}
    
  </section>
}