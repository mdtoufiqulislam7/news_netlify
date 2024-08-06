import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getnews } from '../ReduxToolkit/slice';

function News() {
    const dispatch = useDispatch();
    const { newsdata, status, error } = useSelector((state) => state.product);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getnews());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div>Loading</div>;
    }
    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <div className="p-6 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                { Array.isArray(newsdata) &&  newsdata?.map((item, idx) => (
                    <div key={idx} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            className="w-full h-48 object-cover object-center"
                            src={item?.url || 'default-image-url.jpg'} // Replace with a default image URL if necessary
                            alt="news"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800">{item?.title}</h2>
                            <p className="mt-2 text-gray-600">{item?.description}</p>
                            <p className="mt-2 text-gray-600">{item?.teg}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
