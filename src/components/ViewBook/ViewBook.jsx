import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleBook } from '../../api';
import Loader from '../Loader/Loader';

const ViewBook = () => {
    const [singleData, setSingleData] = useState([]);
    const [loading, setLoading] = useState(false);
    let params = useParams();
    useEffect(() => {
        async function loadSingleBook() {
            setLoading(true)
            let response = await getSingleBook(params.id);
            if (response) {
                setSingleData(response)
            }
            else {
                return
            }
            setLoading(false)
        }
        loadSingleBook();
    }, [params.id])
    const { title, thumbnailUrl, authors = [], categories = [], shortDescription, status } = singleData;
    return (
        <div>
            {
                loading ? <Loader></Loader> :
                    <div className='mx-auto w-[95%]'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-11'>
                            <div className='bg-stone-200 lg:p-11 flex justify-center items-center rounded-md'>
                                {
                                    thumbnailUrl ? <img src={thumbnailUrl} alt={title} className='h-[100%]' /> : "Image not available"
                                }
                            </div>
                            <div className='leading-8'>
                                <h1 className='text-2xl font-semibold'>{title}</h1>
                                <p className='font-semibold'>Book Authors: </p>
                                <ul className='list-decimal list-inside'>
                                    {
                                        authors.map((author, index) => <li key={index}>{author}</li>)
                                    }
                                </ul>
                                <p className='font-semibold'>Category: {categories ? categories.map((category, index) => <span key={index} className='ms-3 text-amber-600 styled_font'>{category}</span>) : "Unknown"}</p>
                                <p>Status: {status ? <span className='text-blue-500'>{status}</span> : "Unknown"}</p>
                                <p className='font-semibold'>Short Description: </p>
                                <p className='text-justify'>{shortDescription ? shortDescription : "Not Available"}</p>
                            </div>
                        </div>
                        {/* More Details */}
                        <div className='bg-stone-200'>

                        </div>
                    </div>
            }
        </div>
    );
};

export default ViewBook;