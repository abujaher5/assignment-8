import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn, CiMemoPad } from "react-icons/ci";

import { IoPeopleOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  // const book = useLoaderData();

  // let { book_id } = useParams();

  // const [bookInfo, setBookInfo] = useState("");

  // useEffect(() => {
  //   const findOutBook = book?.find(
  //     (selectBookDetails) => selectBookDetails.book_id == book_id
  //   );

  //   console.log(findOutBook);
  //   setBookInfo(findOutBook);
  // }, [book_id, book]);

  return (
    <div>
      <div className="text-center bg-[#1313130D] rounded-2xl h-24 mt-6 flex flex-col justify-center items-center font-bold text-2xl">
        {/* <h3>{bookInfo.book_name}</h3> */}
      </div>
      <div className=" text-center flex justify-center mt-6 items-center">
        <button className=" btn text-white bg-[#23BE0A]">
          Sort By
          <RiArrowDropDownLine className="text-4xl"></RiArrowDropDownLine>
        </button>
      </div>

      <div className="mt-10">
        <div className="flex  flax-start     ">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-black "
          >
            <span>Read Books</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-black "
          >
            <span>Wishlist Books</span>
          </a>
        </div>

        <div className=" p-5  mt-6 shadow-xl rounded-2xl border border-gray-200">
          <div className=" flex flex-col gap-6 lg:flex-row flex-start ">
            <div>
              <img
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                className="  rounded-lg shadow-2xl"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Book name </h1>
              <p>By : author</p>

              <div className="inline-flex gap-4">
                <span className="font-extrabold">Tag </span>
                <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
                  <p className="bg-[#23BE0A0D] rounded-2xl  px-3">#tag1</p>

                  <p className="bg-[#23BE0A0D] rounded-2xl px-3">#tag2</p>
                </div>
                <p className="inline-flex items-center gap-2 ">
                  <CiLocationOn className="text-black text-xl"></CiLocationOn>
                  Year of Publishing:
                </p>
              </div>

              <div className="flex gap-6">
                <p className="inline-flex items-center gap-2 ">
                  <IoPeopleOutline className="text-black text-xl"></IoPeopleOutline>
                  Publisher:
                </p>
                <p className="inline-flex items-center gap-2 ">
                  <CiMemoPad className="text-black text-xl"></CiMemoPad>
                  Pages
                </p>
              </div>
              <hr />

              <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
                <p className="bg-[#328EFF26] text-[#328EFF] rounded-full py-2  px-3">
                  Category:
                </p>

                <p className="bg-[#FFAC3326] text-[#FFAC33] rounded-full py-2  px-3">
                  Rating:
                </p>
                <p className="bg-[#23BE0A] rounded-full text-white py-2 px-3">
                  View Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
