import Products from '../components/products';
import axios from 'axios';
import { useEffect, useState } from 'react';



export default function ProductsPage(){

    const [products, setProducts] = useState([]);
    
    const getProducts = async () => {
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:1337/api/',
            timeout: 2000,
            headers: { 'Authorization': 'Bearer 9ae3e05c1d6f7f68f31d1a2cbffd725922e894958751980ccdc367891c258733c6e9eeeb1fdc141b9f5d4e3e92d7e63049e857ac6ac14ef2cb602b93040c17aa14a27a6364b1239d44cc307a8b00175e71b6d07458a1f97421954fdf77c6a93f0d70d70d12aa57b6c6c3438ea77b845ebc8339ec09d7023b86299b9dafc8207d' }
        });
    
        const response = await axiosInstance.get('products');
        
        
        if(response.data.data){
            const productsList = response.data.data.map(el => {
                return {
                    id: el.id,
                    name: el.attributes.name,
                    description: el.attributes.description,
                    price: el.attributes.price,
                }
            });
            setProducts(productsList);
        }    
    }

    useEffect(() => {
        getProducts()
    }, []);
    

    return (
       <div className={'products-list'}>
        {products.length > 0 && <Products items={products}></Products>}
        {products.length <= 0 && <div>No data</div>}
       </div>
    )
}