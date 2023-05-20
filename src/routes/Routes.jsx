import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Blogs from "../pages/blogs/Blogs";
import AllToys from "../pages/all toys/AllToys";
import AddToy from "../pages/add toy/AddToy";
import Details from "../pages/details/Details";
import Mytoy from "../pages/mytoy/Mytoy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/update toy/UpdateToy";
import ViewDetails2 from "../details 2/ViewDetails2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/addtoy',
        element: <AddToy></AddToy>
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },

      {
        path: '/mytoy',
        element: <PrivateRoute><Mytoy></Mytoy></PrivateRoute>,
      },
      {
        path: 'updatetoy/:id',
        element: <UpdateToy></UpdateToy>
      },
      {
        path: '/viewdetails2/:id',
        element: <ViewDetails2></ViewDetails2>,
        loader: ({ params }) => fetch(`http://localhost:5000/addedtoys/${params.id}`)

      }


    ]
  },
]);

export default router;