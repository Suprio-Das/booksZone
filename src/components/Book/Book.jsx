import { Link } from "react-router";

const Book = ({ book }) => {
    const { _id, title, thumbnailUrl, authors } = book;
    return (
        <a
            className="p-8 max-w-md border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col justify-between items-center h-full"
            href="#"
        >
            <img
                src={thumbnailUrl}
                className="shadow rounded-lg overflow-hidden border"
                alt="Exercise illustration"
            />
            {/* Ensure this div is aligned to the bottom */}
            <div className="mt-auto">
                <h4 className="font-bold text-xl">{title}</h4>
                <p className="mt-2 text-gray-600">
                    {authors.slice(0, 1)}
                </p>
                <div className="mt-5">
                    <Link to={`/books/${_id}`}>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </a>


        // <div className="max-w-xs p-5 shadow-lg rounded-3xl">
        //     <div className="flex justify-center mb-8">
        //         <img src={thumbnailUrl} alt="" className="max-w-sm max-h-72" />
        //     </div>
        //     <div className="flex justify-between items-center"> {/* Added items-center */}
        //         <div>
        //             <h2 className="text-md font-semibold">{title}</h2>
        //             <p className="text-sm">{authors.slice(0, 1)}</p>
        //         </div>
        //         <div>
        //             <Link to={`/books/${_id}`}>
        //                 <button className="btn bg-orange-500 px-11 rounded-full">View</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

    );
};

export default Book;