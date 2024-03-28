import { IoIosStarOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

  // to={`/book/${book_id}`}
  return (
    <Link to={`/bookDetails/${book_id}`} className="rounded-2xl shadow-lg p-5 ">
      <div className="flex justify-center items-center bg-[#F3F3F3] rounded-2xl py-7">
        <img
          src={image}
          alt=""
          className=" object-cover object-center  h-60 bg-[#F3F3F3]"
        />
      </div>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2  ">
          <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
            <p className="bg-[#23BE0A0D] rounded-2xl  px-3">{tags[0]}</p>

            <p className="bg-[#23BE0A0D] rounded-2xl px-3">{tags[1]}</p>
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
    </Link>
  );
};

BookCard.PropTypes = {
  book: PropTypes.object,
};

export default BookCard;
