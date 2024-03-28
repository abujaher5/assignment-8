import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import Book from "../pages/Book";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/books.json"),
      },
      {
        path: "/book",
        element: <Book></Book>,

        // loader: ({params}) =>
        //   fetch(`../../public/books.json/${params.book_id}),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },

      {
        path: "/bookDetails/:book_id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../../public/books.json"),
      },
    ],
  },
]);
