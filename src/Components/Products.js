import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <section>
            <h1 className='text-3xl font-bold p-4 '>Action Camera Mounts on rent</h1>

            <div className='grid grid-cols-3 gap-4 px-5'>
                {
                    products.map(product => <ProductDetails
                        key={product._id}
                        product={product}
                    ></ProductDetails>)
                }
            </div>
        </section>
    );
};

export default Products;