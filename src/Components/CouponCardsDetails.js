import React from 'react';

const CouponCardsDetails = ({ coupon }) => {
    const { name, discount, about } = coupon;
    return (
        <section style={{
            boxShadow: "9px 7px 5px -4px rgba(0,0,0,0.31)",
            borderRadius: "20px"
        }} class="w-80 mb-5 h-36">
            <div className='flex items-center'>
                <div className='bg-blue-700 text-white font-semibold px-10 rounded-r-3xl'>
                    {discount}% <br />
                    Off
                </div>
                <div className='p-6'>
                    <h2 className='mb-2 font-bold'>{name}</h2>
                    <p className='text-justify text-xs'>{about}</p>
                </div>
            </div>
        </section >
    );
};

export default CouponCardsDetails;