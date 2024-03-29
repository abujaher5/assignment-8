import { RiArrowDropDownLine } from "react-icons/ri";

import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredReadBook } from "../utility/localStorage";
import SelectedBooks from "../components/SelectedBooks";

const ListedBooks = () => {
  const books = useLoaderData();
  const [selectBooks, setSelectBooks] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (books.length > 0) {
      const booksSelected = [];
      for (const book_id of storedBookIds) {
        const book = books.find((book) => book.book_id === book_id);
        if (book) {
          booksSelected.push(book);
        }
      }

      setSelectBooks(booksSelected);
    }
  }, []);

  return (
    <div>
      <h3 className="text-center text-4xl">books:{selectBooks.length}</h3>
      <div className="text-center bg-[#1313130D] rounded-2xl h-24 mt-6 flex flex-col justify-center items-center font-bold text-2xl">
        {/* <h3>{bookInfo.book_name}</h3> */}
      </div>
      <div className=" text-center flex justify-center mt-6 items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">
            Sort By
            <RiArrowDropDownLine className="text-4xl"></RiArrowDropDownLine>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Category</a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex  flax-start     ">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-black ${
              tabIndex === 0 ? "border-b-0 border" : "border-b"
            } `}
          >
            <span>Read Books</span>
          </Link>
          <Link
            to="wishlist"
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-black ${
              tabIndex === 1 ? "border-b-0 border" : "border-b"
            }`}
          >
            <span>Wishlist Books</span>
          </Link>
        </div>

        {selectBooks.map((book) => (
          <SelectedBooks key={book.book_id} book={book}></SelectedBooks>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
