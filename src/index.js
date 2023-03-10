import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import App from './App';
import Register from './routes/register';
import Home from './routes/home'
import React from 'react'
import ErrorPage from './routes/errorPage';
import Login from './routes/login';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage /> 
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage /> 
    },
    {
        path: "/login",
        element: <Login />,
    }
])

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
