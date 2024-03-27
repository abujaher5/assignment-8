import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
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
        path: "/bookDetails",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);
