// import Navbar from "../components/Navbar";

const Home = () => {
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

      <h3 className="text-center font-bold text-3xl">Books</h3>
    </div>
  );
};

export default Home;
