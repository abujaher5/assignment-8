import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
