import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./src/components/Contact";
import Privacy from "./src/components/Privacy";
import ExploreRooms from "./src/components/ExploreRooms";
import Calendar1 from "./src/components/Calendar";
import ExploreDestination from "./src/components/ExploreDestination";


const AppLayout=()=>{
    return (
        < >   
        <Heading/>
        <div className="content"><Outlet/></div>
        <Footer/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:"fccd",
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Privacy",
                element:<Privacy/>
            },
            {
                path:"/room-booking",
                element:<ExploreRooms/>
            },
            {
                path:"/explore-destination",
                element:<ExploreDestination/>
            }
            

        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
// root.render(<Calendar1/>)