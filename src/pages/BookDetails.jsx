import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();

  let { book_id } = useParams();

  const [bookInfo, setBookInfo] = useState("");

  useEffect(() => {
    const findBook = book?.find(
      (selectedBookDetails) => selectedBookDetails.book_id == book_id
    );

    setBookInfo(findBook);
  }, [book_id, book]);

  return (
    <div className=" flex flex-col gap-6 lg:gap-0 lg:flex-row mt-6  ">
      <div className="w-1/2 mx-auto">
        <img
          src={bookInfo.image}
          className="rounded-2xl bg-base-200 h-2/3 p-12 "
        />
      </div>

      <div className="space-y-10 w-1/2 mx-auto">
        <h1 className="text-5xl font-bold">{bookInfo.book_name} </h1>
        <p>By :{bookInfo.author}</p>
        <hr />
        <p>{bookInfo.category}</p>
        <hr />
        <p className="py-6">
          <span className="font-extrabold">Review:</span>
          {bookInfo.review}
        </p>

        <div className="inline-flex gap-4">
          <span className="font-extrabold">Tag </span>
          <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
            <p className="bg-[#23BE0A0D] rounded-2xl  px-3">
              {/* {bookInfo.tags[0]} */}
            </p>
            <p className="bg-[#23BE0A0D] rounded-2xl px-3">{bookInfo.tags}</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Number of Pages: {bookInfo.total_pages}</p>
          <p>Publisher: {bookInfo.publisher}</p>
          <p>Year of Publishing: {bookInfo.year_of_publishing}</p>
          <p>Rating: {bookInfo.rating}</p>
        </div>

        <div className="gap-4 flex">
          <button className="btn font-semibold text-xl border border-black">
            Read
          </button>
          <button className="btn text-white font-semibold text-xl bg-[#59C6D2]">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
