import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Components/HomePage/HomePage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import WAAGH from "./Components/WAAGH/WAAGH.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Tyranids from "./Components/Tyranids/Tyranids.jsx";
import Necrons from "./Components/Necrons/Necrons.jsx";
import Eldars from './Components/Eldars/Eldars.jsx'
import TauEmpire from "./Components/Tau's/Tau'sEmpire.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";

const Router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/nav", element: <NavBar />,
    children: [

    ],
  },

  {
    path: "/waagh",
    element: <WAAGH />
  },
  {
    path: "/eldars",
    element: <Eldars />
  },
  {
    path: '/tyranids',
    element: <Tyranids />
  },
  {
    path: "/profile",
    element: <Profile />
  },

  {
    path: "/necrons",
    element: <Necrons />
  },
  {
    path: "/tau",
    element: <TauEmpire />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

