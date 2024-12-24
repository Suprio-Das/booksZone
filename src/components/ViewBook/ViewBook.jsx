import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleBook } from '../../api';
import Loader from '../Loader/Loader';
import { LiaBarcodeSolid } from "react-icons/lia";
import { FaBookOpen } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";

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
    const { title, thumbnailUrl, authors = [], categories = [], shortDescription, status, isbn, pageCount, publishedDate, longDescription } = singleData;
    const formattedDate = publishedDate?.$date
        ? new Date(publishedDate.$date).toLocaleDateString('en-GB') // Format the date
        : 'N/A';
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
                        <div className='bg-stone-200 p-5 my-11 rounded-md'>
                            <div className='grid grid-cols-2 lg:grid-cols-3'>
                                <div className='flex flex-col justify-center items-center'>
                                    <p><LiaBarcodeSolid className='text-3xl'></LiaBarcodeSolid></p>
                                    <p>{isbn}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p><FaBookOpen className='text-3xl'></FaBookOpen></p>
                                    <p>{pageCount} Pages.</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p><IoCalendarNumberSharp className='text-3xl'></IoCalendarNumberSharp></p>
                                    <p>{formattedDate}</p>
                                </div>
                            </div>
                            <div className='mt-11'>
                                <h1 className='text-2xl font-semibold'>Description: </h1>
                                <p className='leading-8'>{longDescription}</p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ViewBook;