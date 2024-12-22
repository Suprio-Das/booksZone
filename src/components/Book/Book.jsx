import { Link } from "react-router";

const Book = ({ book }) => {
    const { _id, title, thumbnailUrl, authors } = book;
    return (
        <div className="max-w-xs p-5 shadow-lg rounded-3xl">
            <div className="flex justify-center mb-8">
                <img src={thumbnailUrl} alt="" className="max-w-sm max-h-72" />
            </div>
            <div className="flex justify-between items-center"> {/* Added items-center */}
                <div>
                    <h2 className="text-md font-semibold">{title}</h2>
                    <p className="text-sm">{authors.slice(0, 1)}</p>
                </div>
                <div>
                    <Link to={`/books/${_id}`}>
                        <button className="btn bg-orange-500 px-11 rounded-full">View</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Book;