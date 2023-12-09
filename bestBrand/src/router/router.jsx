import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/root/Root';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import PrivetRoute from '../privetRoute/PrivetRoute';
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import Upload from '../pages/upload/Upload';
import axios from 'axios';

import CategorySection from '../components/categorySection/CategorySection';
import SingleProduct from '../components/singleProduct/SingleProduct';
import CardItems from '../components/cardItmes/CardItems';
import UpdateData from '../components/updateData/UpdateData';
import ErrorPage from '../pages/errorePage/ErrorPage';
import Brand from '../pages/bradn/Brand';
import BrandItems from '../pages/brandItems/BrandItems';
import Category from '../pages/category/Category';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => {
                    return axios.get(
                        'https://best-brand-server.vercel.app/products'
                    );
                },
            },
            {
                path: '/cart-items',
                element: (
                    <PrivetRoute>
                        <CardItems />
                    </PrivetRoute>
                ),

                loader: () => {
                    return axios.get(
                        'https://best-brand-server.vercel.app/cart-items'
                    );
                },
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/category',
                element: <CategorySection />,
            },
            {
                path: '/brand',
                element: <Brand />,
            },
            {
                path: '/brand/:items',
                element: <BrandItems />,
            },
            {
                path: '/category/:category',
                element: <Category />,
                loader: ({ params }) => {
                    return axios.get(
                        `https://best-brand-server.vercel.app/products/${params.category}`
                    );
                },
            },
            {
                path: '/category/:category/:items',
                element: <SingleProduct />,
                loader: ({ params }) => {
                    return axios.get(
                        `https://best-brand-server.vercel.app/category/${params.items}`
                    );
                },
            },
            {
                path: '/category/:category/:product/update',
                element: (
                    <PrivetRoute>
                        <UpdateData />
                    </PrivetRoute>
                ),
                loader: ({ params }) => {
                    return axios.get(
                        `https://best-brand-server.vercel.app/category/${params.product}`
                    );
                },
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/dashboard',
                element: (
                    <PrivetRoute>
                        <Dashboard />
                    </PrivetRoute>
                ),
                children: [
                    {
                        path: '/dashboard/profile',
                        element: <Profile />,
                    },
                    {
                        path: '/dashboard/upload',
                        element: <Upload />,
                    },
                    {
                        path: '/dashboard/address',
                        element: <div>address</div>,
                    },
                ],
            },
        ],
    },
]);

export default router;
