import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer";
import Contact from "./pages/Contact/Contact";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
 
    ],
  },
]);