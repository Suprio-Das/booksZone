import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Books from "../Books/Books";
import Book from "../Book/Book";
import About from "../About/About";
import ViewBook from "../ViewBook/ViewBook";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/books',
                element: <Books></Books>
            },
            {
                path: '/books/:id',
                element: <ViewBook></ViewBook>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])