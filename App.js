import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";

const AppLayout=()=>{
    return (
        <div className="bgImage">   
        <Heading/>
        <Body/>
        <Footer/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)