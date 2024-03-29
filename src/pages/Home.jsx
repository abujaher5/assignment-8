import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useLoaderData();

  return (
    <div>
      <div className="hero   bg-[#1313130D]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://s3-alpha-sig.figma.com/img/093f/28a2/713be2009ed5e0a38a726ba628d93944?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7k7kDgqZxPs8qerQCxbihcD-330NENI6lJnSrtKKKck1-Wu8Dptn2j276b3AdZNhqNHfY1dzN263aqzm6q1u4K9hK0V2JSmJdZ1b7wiUEN03JvGwWtUyV~T55bCFqKTr6nRIv05AgtB8ma-fBy5cdK0OGcKCwWTqPv7Dw7bEohyvWFEv3X8twqfAhojEOE~WpzbqcLaxeXfLiQThwUhKtSb4OIJPnnHgWY2D-VqiPHKtcRmJEEeXkvLW~u3opbaEwP~Pv7x3hSyb3x5yuTtzf2nTyRcNDRVcVJ1RhdAKxbBLYQ2XtL8Ep3Pt29jCwuPG~fhQimqFwk4fzkCdvnGjg__"
            className="max-w-sm rounded-lg "
          />
          <div className="w-1/2 ">
            <h1 className="text-5xl font-bold my-5">
              Books to freshen up your bookshelf
            </h1>

            <Link to="/listedBooks">
              <button className="btn text-white bg-[#23BE0A]">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>

      <h3 className="text-center font-bold text-3xl my-6">Books</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2">
        {books.map((book) => (
          <BookCard key={book.book_id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
