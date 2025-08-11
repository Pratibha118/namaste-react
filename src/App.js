import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header'
import Body from './components/Body';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import Shimmer from './components/Shimmer';
import UserContext from './utils/userContext/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


const AppLayout = () => {
    const [userName, setUserName] = useState('Pratibha')

    return <>
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </Provider>
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
        },
        {
            path: '/cart',
            element: <Cart />
        }

    ],
    errorElement: <Error />
},

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />); // it is responsible for taking the object and convert it into h2 tag