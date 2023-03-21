import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function ProductCreate(){

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const saveProduct = () => {
        const product = {
            name: productName,
            description: productDescription,
            price: Number(productPrice)
        }
        console.log(product);
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:1337/api/',
            timeout: 2000,
            headers: { 'Authorization': 'Bearer 9ae3e05c1d6f7f68f31d1a2cbffd725922e894958751980ccdc367891c258733c6e9eeeb1fdc141b9f5d4e3e92d7e63049e857ac6ac14ef2cb602b93040c17aa14a27a6364b1239d44cc307a8b00175e71b6d07458a1f97421954fdf77c6a93f0d70d70d12aa57b6c6c3438ea77b845ebc8339ec09d7023b86299b9dafc8207d' }
        });

        const response = axiosInstance.post('products', {
            data: product
        });
    }

    return <>
        <h2>Create product</h2>
        <div>
            <Link to={'/products'}><button>Back to list</button></Link>
        </div>
    
        <div className="product-create-form">
            <div>
                <label>
                    Name <br/> 
                    <input 
                        value={productName} 
                        onChange={(event) => {setProductName(event.target.value)}}
                    /></label>
            </div>
            <div>
                <label>
                    Description <br/>
                    <textarea 
                        value={productDescription}
                        onChange={(event) => {setProductDescription(event.target.value)}}
                    ></textarea>
                </label>
            </div>
            <div>
                <label>
                    Price <br/>
                    <input 
                        value={productPrice} 
                        onChange={(event) => {setProductPrice(event.target.value)}}
                        type={'number'}
                    />
                </label>
            </div>
            <div>
                <button onClick={() => {saveProduct()}}>Add product</button>
            </div>
        </div>
    </>
}