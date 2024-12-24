import { useEffect, useState } from "react";
import { getAllBooks } from "../../api";
import Loader from "../Loader/Loader";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false); // Initialize as false

    useEffect(() => {
        async function loadAllBooks() {
            setLoading(true); // Start loading
            let response = await getAllBooks();
            if (response) {
                setBooks(response); // Set the books data
            } else {
                console.warn("No books data found");
            }
            setLoading(false); // Stop loading
        }
        loadAllBooks();
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : <div className="mx-auto w-[95%]">
                <h1 className="text-3xl my-5 text-center font-bold">Find Your Dream Books</h1>
                <p className="border-2 border-b-2 border-black mb-11 w-[15%] mx-auto"></p>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-11">
                    {(
                        books.map((book, index) => (
                            <Book key={index} book={book} />
                        ))
                    )}
                </div>
            </div>}
        </div>
    );
};

export default Books;
