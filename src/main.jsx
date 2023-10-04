import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Root from "./pages/root";
import { DataProvider } from "./services/provider/dataProvider";
import Gallery from "./pages/masonaryGalleryPage";
import Art, { loader as artLoader } from "./pages/articlePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Gallery /> },
      {
        path: "/:id",
        element: <Art />,
        loader: artLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
);
