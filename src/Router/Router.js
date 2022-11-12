import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import AddService from '../Components/AddService/AddService';
import Blog from '../Components/Blog/Blog';
import EditReview from '../Components/EditReview/EditReview';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import MyReviews from '../Components/MyReviews/MyReviews';
import Register from '../Components/Register/Register';
import ServiceDetails from '../Components/ServiceDetails/ServiceDetails';
import Services from '../Components/Services/Services';
import Main from '../Layout/Main';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/serviceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path:'/myReviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/editReview/:id',
                element:<PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/editReview/${params.id}`)
            },
            {
                path:'/addService',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
]);

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;

