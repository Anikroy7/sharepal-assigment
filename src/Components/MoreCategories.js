import React, { useEffect, useState } from 'react';
import MoreCategoriesDetails from './MoreCategoriesDetails';

const MoreCategories = () => {
    const [morePd, setMorePd] = useState([])

    useEffect(() => {
        fetch('https://sleepy-headland-09264.herokuapp.com/moreCategories')
            .then(res => res.json())
            .then(data => setMorePd(data))
    }, [])
    return (
        <section className='bg-gray-300 p-5'>
            <h1 className='text-2xl font-semibold mb-6 mt-16'>More Categories</h1>
            <div className='flex gap-4 px-5 overflow-x-scroll'>
                {
                    morePd.map(pd => <MoreCategoriesDetails
                        key={pd.key}
                        pd={pd}
                    ></MoreCategoriesDetails>)
                }
            </div>
        </section>
    );
};

export default MoreCategories;