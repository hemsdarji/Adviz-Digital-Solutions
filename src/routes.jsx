import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import PortFolio from "./pages/PortFolio/PortFolio";
import Testimonials from "./pages/Testimonials/Testimonials";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import Values from "./pages/values/Values";
import Footer from "./component/Footer/Footer";
import BCorp from "./pages/BCorp";


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