import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:h-16 h-[164px]">
        <Navbar></Navbar>
      </div>
      <div className="lg:min-h-[calc(100vh-64px)] min-h-[calc(100vh-164px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
