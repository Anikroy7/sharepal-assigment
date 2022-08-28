import React from 'react';

const MoreCategoriesDetails = ({ pd }) => {

    const { img, name } = pd;
    return (
        <section style={{ borderRadius: "10px", padding: "15px" }} className='text-center w-80 mb-5 h-60 shadow-lg bg-white flex flex-col items-center'>
            <img style={{ height: '240px', width: "340px" }} src={img} alt="" />
            <h3 className='font-bold text-sm mt-4'>{name}</h3>
        </section>
    );
};

export default MoreCategoriesDetails;