import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-lg flex flex-col lg:flex-row  container rounded-md justify-between fixed z-10  bg-[#FFFFFF] px-4 sm:px-8 ">
      <div>
        <Link to="/" className="btn btn-ghost font-bold text-2xl">
          Book Vibe
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal  items-center px-1 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border rounded-md p-2 border-[#23BE0A] font-bold"
                : "text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/listedBooks"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border rounded-md p-2 border-[#23BE0A] font-bold"
                : "text-black"
            }
          >
            Listed Books{" "}
          </NavLink>

          <NavLink
            to="/book"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border rounded-md p-2 border-[#23BE0A] font-bold"
                : "text-black"
            }
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="items-center gap-2 lg:flex">
        <button className=" btn px-8 py-3 rounded text-white bg-[#23BE0A]">
          Sign in
        </button>
        <button className=" btn px-8 py-3 font-semibold rounded bg-[#59C6D2] text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
