import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Components/HomePage/HomePage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

const Router = createBrowserRouter([
  {path:"/", element: <HomePage/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
