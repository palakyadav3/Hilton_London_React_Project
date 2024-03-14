import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./src/components/Contact";

const AppLayout=()=>{
    return (
        <div >   
        <Heading/>
        <Outlet/>
        <Footer/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/Contact ",
                element:<Contact/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)