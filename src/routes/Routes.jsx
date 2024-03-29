import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import Book from "../pages/Book";
import BookDetails from "../pages/BookDetails";
import SelectedBooks from "../components/SelectedBooks";
import WishList from "../components/WishList";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/book",
        element: <Book></Book>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/books.json"),
        children: [
          {
            index: true,
            element: <SelectedBooks></SelectedBooks>,
          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
          },
        ],
      },

      {
        path: "/bookDetails/:book_id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
