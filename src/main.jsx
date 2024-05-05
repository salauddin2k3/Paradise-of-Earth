import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import Updates from './Components/Updates';
import Login from './Components/Login';
import Reg from './Components/Reg';
import AuthProvider from './Providers/AuthProvider';
import Details from './Components/Details';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './Components/PrivateRoute';
import AllTouristsSpot from './Components/AllTouristsSpot';
import MyList from './Components/MyList';
import AddTouristsSpot from './Components/AddTouristsSpot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/update",
        element: <PrivateRoute><Updates></Updates></PrivateRoute>,
      },
      {
        path: "/my-list",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/reg",
        element: <Reg></Reg>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('/prime-residence.json')
      },
      {
        path: '/all-tourists-spot',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/add-tourists-spot',
        element: <AddTouristsSpot></AddTouristsSpot>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
