import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();

  let { book_id } = useParams();
  useEffect(() => {
    const findBook = book?.find(
      (selectedBookDetails) => selectedBookDetails.book_id == book_id
    );
    console.log(findBook.author);
  }, []);

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="  rounded-lg shadow-2xl"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Book name </h1>
          <p>By : author</p>
          <hr />
          <p>Fiction</p>
          <hr />
          <p className="py-6">
            <span className="font-extrabold">Review:</span> Provident cupiditate
            voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi.
          </p>

          <div className="inline-flex gap-4">
            <span className="font-extrabold">Tag </span>
            <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
              <p className="bg-[#23BE0A0D] rounded-2xl  px-3">tag1</p>

              <p className="bg-[#23BE0A0D] rounded-2xl px-3">tag2</p>
            </div>
          </div>
          <hr />
          <div>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
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
    </div>
  );
};

export default BookDetails;
