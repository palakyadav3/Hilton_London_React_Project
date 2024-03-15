import {Link} from "react-router-dom"; 
// import Contact from "./Contact";
import Contact from "./Contact";

const Heading=()=>{
return(
   <div className="header">
    {/* <img className="logo" src="https://wi-q.cloud/i/400x,q95/b0a747e4-b654-4b66-b958-06e3cb2b722a/asset/65c8fc53-7795-44ae-81c1-446915b74071.png" alt="logo" /> */}
    <h2>WELCOME GUEST</h2>
    <nav className="nav">
        <ul>
            <li> <Link to="/" className="decor"> HOME</Link></li>
            <li><Link to="/Contact" className="decor"> CONTACT US </Link></li>
            <li>TERMS & CONDITIONS</li>
            <li>
               <Link to="/Privacy" className="decor"> PRIVACY SETTINGS</Link>
            </li>
            <li> <Link to="https://www.wi-q.com/" target="_blank" className="decor"> WI-Q WEBSITE </Link></li>
        </ul>
    </nav>
   </div>
)
}

export default Heading;