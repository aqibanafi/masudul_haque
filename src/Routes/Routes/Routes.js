import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Projects from "../../Pages/Projects/Projects";
import Resume from "../../Pages/Resume/Resume";

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
                path: '*',
                element:<Error></Error>
            }
        ]
    }
])