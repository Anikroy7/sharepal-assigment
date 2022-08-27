import React from 'react';
import love from '../images/heart.png'

const ProductDetails = ({ product }) => {

    const { name, image } = product;

    return (
        <div class="border rounded-lg border-slate-200 w-full bg-base-100 hover:shadow-xl">
            <div class="">
                <img style={{ height: '240px' }} src={image} alt="" />
                <div className='bg-slate-50 p-2 flex justify-between'>
                    <span>{name}</span>
                    <span><img className='h-6 w-6' src={love} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;