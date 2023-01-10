import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Illustration from "../../Pages/Illustration";
import Kidstshirt from "../../Pages/Kidstshirt";
import Login from "../../Pages/Login/Login";
import Mascotlogo from "../../Pages/Mascotlogo";
import Mentshirt from "../../Pages/Mentshirt";
import Projects from "../../Pages/Projects/Projects";
import Resume from "../../Pages/Resume/Resume";
import Womentshirt from "../../Pages/Womentshirt";

export const routes = createBrowserRouter([
    {
        path: '/',
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
                path: '/aboutme',
                element: <About></About>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/illustration',
                element: <Illustration></Illustration>
            },
            {
                path: '/kidstshirt',
                element: <Kidstshirt></Kidstshirt>
            },
            {
                path: '/mascotlogo',
                element: <Mascotlogo></Mascotlogo>
            },
            {
                path: '/mentshirt',
                element: <Mentshirt></Mentshirt>
            },
            {
                path: '/womentshirt',
                element: <Womentshirt></Womentshirt>
            },
            {
                path: '*',
                element:<Error></Error>
            }
        ]
    }
])