import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Gallery from "./layouts/gallery";
import Article, { loader as articleLoader } from "./layouts/article";

import "./index.css";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Gallery /> },
        {
          path: "/:articleName",
          element: <Article />,
          loader: articleLoader,
        },
      ],
    },
  ],
  {
    basename: "/galleria/",
  }
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
  document.getElementById("root")
);
