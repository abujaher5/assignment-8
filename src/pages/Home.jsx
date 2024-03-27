// import Navbar from "../components/Navbar";

import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      {/* <div className="h-16">
        <Navbar></Navbar>
      </div> */}
      <h2>This is home page</h2>

      {/* banner */}
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn text-white bg-[#23BE0A]">
              View The List
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-center font-bold text-3xl my-6">Books</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2">
        {/* <div className="max-w-xs rounded-xl shadow-lg p-5 ">
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
              <h2 className="text-2xl font-bold ">{books[0].book_name}</h2>
              <p>By :</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>fiction</p>
              <p>5.00 star</p>
            </div>
          </div>
        </div> */}

        {books.map((book) => (
          <BookCard key={book.book_id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
