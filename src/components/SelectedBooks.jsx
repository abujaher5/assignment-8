import { CiLocationOn, CiMemoPad } from "react-icons/ci";

import { IoPeopleOutline } from "react-icons/io5";

const SelectedBooks = ({ book }) => {
  const {
    book_name,
    author,
    tags,
    year_of_publishing,
    publisher,
    total_pages,
    category,
    rating,
    image,
  } = book;

  return (
    <div>
      <div className=" p-5  mt-6 shadow-xl rounded-2xl border border-gray-200">
        <div className=" flex flex-col gap-6 lg:flex-row flex-start ">
          <div className="h-60 w-60">
            <img src={image} className=" h-60  rounded-lg" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{book_name} </h1>
            <p>By : {author}</p>

            <div className="inline-flex gap-4">
              <span className="font-extrabold">Tag </span>
              <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
                <p className="bg-[#23BE0A0D] rounded-2xl  px-3">#tag1</p>

                <p className="bg-[#23BE0A0D] rounded-2xl px-3">#tag2</p>
              </div>
              <p className="inline-flex items-center gap-2 ">
                <CiLocationOn className="text-black text-xl"></CiLocationOn>
                Year of Publishing: {year_of_publishing}
              </p>
            </div>

            <div className="flex gap-6">
              <p className="inline-flex items-center gap-2 ">
                <IoPeopleOutline className="text-black text-xl"></IoPeopleOutline>
                Publisher: {publisher}
              </p>
              <p className="inline-flex items-center gap-2 ">
                <CiMemoPad className="text-black text-xl"></CiMemoPad>
                Pages {total_pages}
              </p>
            </div>
            <hr />

            <div className="flex gap-5 text-sm font-semibold  text-[#23BE0A]">
              <p className="bg-[#328EFF26] text-[#328EFF] rounded-full py-2  px-3">
                Category: {category}
              </p>

              <p className="bg-[#FFAC3326] text-[#FFAC33] rounded-full py-2  px-3">
                Rating: {rating}
              </p>
              <p className="bg-[#23BE0A] rounded-full text-white py-2 px-3">
                View Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedBooks;
