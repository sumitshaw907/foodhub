import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Home from "./src/components/Home";
import Help from "./src/components/Help";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/body/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
