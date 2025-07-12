import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header'
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import Shimmer from './components/Shimmer';
// import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return <>
        <Header />
        <Outlet />
    </>
}

const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'))

const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: '/',
            element: <Body />
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contactus",
            element: <ContactUs />,
        },
        {
            path: '/restautants/:resId',
            element: <Suspense falling={<h3>Loading...</h3>}><RestaurantMenu /></Suspense>
        }

    ],
    errorElement: <Error />
},

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />); // it is responsible for taking the object and convert it into h2 tag