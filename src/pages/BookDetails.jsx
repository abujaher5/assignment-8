import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBook } from "../utility/localStorage";

const BookDetails = () => {
  const book = useLoaderData();

  const { book_id } = useParams();

  const idInt = parseInt(book_id);
  const findBook = book.find((selectedBook) => selectedBook.book_id === idInt);
  console.log(findBook);
  const handleReadBook = () => {
    saveReadBook(idInt);
    toast("Book Added To The List Successfully");
  };

  return (
    <div className=" flex flex-col gap-6 lg:gap-0 lg:flex-row mt-6  ">
      <div className="lg:w-1/3 mx-auto bg-base-200 rounded-2xl flex justify-center items-center">
        <img
          src={findBook.image}
          className="rounded-2xl bg-base-200 object-cover h-2/3 p-12 "
        />
      </div>

      <div className="space-y-10 w-1/2 mx-auto">
        <h1 className="text-5xl font-bold">{findBook.book_name} </h1>
        <p>By :{findBook.author}</p>
        <hr />
        <p>{findBook.category}</p>
        <hr />
        <p className="py-6">
          <span className="font-extrabold">Review:</span>
          {findBook.review}
        </p>

        <div className="inline-flex gap-4">
          <span className="font-extrabold">Tag </span>
          <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
            <p className="bg-[#23BE0A0D] rounded-2xl  px-3">
              {findBook?.tags[0]}
            </p>
            <p className="bg-[#23BE0A0D] rounded-2xl px-3">
              {findBook?.tags[1]}
            </p>
          </div>
        </div>
        <hr />
        <div>
          <p>Number of Pages: {findBook.total_pages}</p>
          <p>Publisher: {findBook.publisher}</p>
          <p>Year of Publishing: {findBook.year_of_publishing}</p>
          <p>Rating: {findBook.rating}</p>
        </div>

        <div className="gap-4 flex">
          <button
            onClick={handleReadBook}
            className="btn font-semibold text-xl border border-black"
          >
            Read
          </button>
          <button
            onClick={handleReadBook}
            className="btn text-white font-semibold text-xl bg-[#59C6D2]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
