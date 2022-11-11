import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import ServiceDetails from '../Components/ServiceDetails/ServiceDetails';
import Services from '../Components/Services/Services';
import Main from '../Layout/Main';

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

