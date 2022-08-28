import React, { useEffect, useState } from 'react';
import CouponCardsDetails from './CouponCardsDetails';

const CuponCards = () => {

    const [coupons, setCoupons] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-headland-09264.herokuapp.com/cupons')
            .then(res => res.json())
            .then(data => setCoupons(data))
    }, [])
    console.log(coupons);
    return (
        <section className='mt-10'>
            <h1 className='ml-5 text-2xl font-semibold mb-6'>Coupons For You</h1>
            <div className='flex gap-4 px-5 overflow-x-scroll'>
                {
                    coupons.map(coupon => <CouponCardsDetails
                        key={coupon._id}
                        coupon={coupon}
                    ></CouponCardsDetails>)
                }
            </div>
        </section>
    );
};

export default CuponCards;