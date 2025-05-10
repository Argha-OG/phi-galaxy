import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import './index.css'
import Home from './pages/home/Home.jsx';
import AboutUs from './pages/about/AboutUs.jsx';
import Services from './pages/service/Services.jsx';
import Blog from './pages/blog/Blog.jsx';
import ContactUs from './pages/contact/ContactUs.jsx';
import Loader from './components/loading/Loading.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <AboutUs />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Contact",
    element: <ContactUs />,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);