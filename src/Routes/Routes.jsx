import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../pages/Root/Root";
import Errorpage from "../pages/Errorpage/Errorpage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadLIst from "../pages/ReadLIst/ReadLIst";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "readlist",

        loader: () => fetch("/booksData.json"),
        Component: ReadLIst,
      },
    ],
  },
]);
