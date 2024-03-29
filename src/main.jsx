// import React from "react";
// import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <>
    <RouterProvider router={router}></RouterProvider>

    <ToastContainer></ToastContainer>
  </>
);

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/book",
//   },
// ]);
