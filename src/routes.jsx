import { createBrowserRouter } from "react-router-dom";


import {Home} from "./pages/home";
import {About} from "./pages/about";
import {Projects} from "./pages/projects";
import { Error } from "./pages/error";
import {Resume}  from "./pages/resume";

export const route = createBrowserRouter([

    {
        path:"/",
        element:<Home/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/projects",
        element:<Projects/>
    },
    {
        path:"/resume",
        element:<Resume/>
    }
])