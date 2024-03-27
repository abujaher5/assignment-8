import { IoIosStarOutline } from "react-icons/io";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  const {
    book_id,
    book_name,
    author,
    image,
    review,
    total_pages,
    rating,
    category,
    tags,
    publisher,
    year_of_publishing,
  } = book;
  return (
    <div className="max-w-xs rounded-xl shadow-lg p-5 ">
      <img
        src="https://source.unsplash.com/random/300x300/?2"
        alt=""
        className=" object-center w-full rounded-xl h-60 bg-[#F3F3F3]"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2  ">
          <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
            <p className="bg-[#23BE0A0D] rounded-2xl px-3">Young Adult</p>
            <p className="bg-[#23BE0A0D] rounded-2xl px-3">Identity</p>
          </div>
          <h2 className="text-2xl font-bold ">{book_name}</h2>
          <p>By : {author}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>{category}</p>
          <p className="inline-flex items-center gap-2">
            {rating} <IoIosStarOutline />
          </p>
        </div>
      </div>
    </div>
  );
};

BookCard.PropTypes = {
  book: PropTypes.object,
};

export default BookCard;
