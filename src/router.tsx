import AboutUs from "./components/AboutUs";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import BuyList from "./components/BuyList";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ReadList from "./components/ReadList";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

const protectedChilds = [
  { index: true, element: <BookList /> },
  { path: "/", element: <BookList /> },
  { path: "/book/:isbn", element: <BookDetails /> },
  { path: "/readlist", element: <ReadList /> },
  { path: "/buylist", element: <BuyList /> },
  {path: "/aboutus", element:<AboutUs />}
];

const routes = [
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [{ path: "/", element: <Layout />, children: protectedChilds }],
  },
  { path: "*", element: <NotFound /> },
];

export const router = createBrowserRouter(routes);
