import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Books from "../Books/Books";
import Book from "../Book/Book";
import About from "../About/About";

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
                element: <Book></Book>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])