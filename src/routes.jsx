import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Team from "./pages/aboutus/Team/Team";
import Values from "./pages/aboutus/values/Values";
import BCorp from "./pages/aboutus/B-Corp/BCorp";
import PortFolio from "./pages/PortFolio/PortFolio";
import Testimonials from "./pages/Testimonials/Testimonials";
import Services from "./pages/Services/Services";


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
      {
        path: "/Team",
        element: <Team />,
      },
      {
        path: "/Values",
        element: <Values />,
      },
      {
        path: "/BCorp",
        element: <BCorp />,
      },
      {
        path: "/PortFolio",
        element: <PortFolio />,
      },
 
      {
        path: "/Testimonials",
        element: <Testimonials />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
 
 
    ],
  },
]);