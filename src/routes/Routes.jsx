import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Book from "../pages/Book";
import ListedBooks from "../pages/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book",
        element: <Book></Book>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);
