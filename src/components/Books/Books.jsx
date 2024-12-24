import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getAllBooks } from "../../api";
import Loader from "../Loader/Loader";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); // Start with page 0
    const booksPerPage = 10; // Number of books per page

    useEffect(() => {
        async function loadAllBooks() {
            setLoading(true);
            let response = await getAllBooks();
            if (response) {
                setBooks(response);
            } else {
                console.warn("No books data found");
            }
            setLoading(false);
        }
        loadAllBooks();
    }, []);

    // Calculate current books to display
    const offset = currentPage * booksPerPage;
    const currentBooks = books.slice(offset, offset + booksPerPage);

    // Total pages required
    const pageCount = Math.ceil(books.length / booksPerPage);

    // Handle page click
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="mx-auto w-[95%]">
                    <h1 className="text-3xl my-5 text-center font-bold">
                        Find Your Dream Books
                    </h1>
                    <p className="border-2 border-b-2 border-black mb-11 w-[15%] mx-auto"></p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-11">
                        {currentBooks.map((book, index) => (
                            <Book key={index} book={book} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-10 flex justify-center items my-11">
                        <ReactPaginate
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination flex gap-3"}
                            pageClassName={
                                "page-item flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 hover:bg-gray-300"
                            }
                            pageLinkClassName={"text-center font-medium"}
                            previousClassName={
                                "prev-item flex items-center justify-center rounded-full w-28 h-10 bg-gray-200 hover:bg-gray-300"
                            }
                            nextClassName={
                                "next-item flex items-center justify-center rounded-full w-24 h-10 bg-gray-200 hover:bg-gray-300"
                            }
                            activeClassName={"bg-blue-500 text-white"}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Books;
