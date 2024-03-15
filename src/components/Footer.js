import { Link } from "react-router-dom";

const Footer=()=>{
    return (
        <div className="footer">
            <div  className="footerDetails">
            <img src="https://wi-q.cloud/i/400x,q95/b0a747e4-b654-4b66-b958-06e3cb2b722a/asset/65c8fc53-7795-44ae-81c1-446915b74071.png" alt="" />
             <div>
                <h3>Booking App</h3>
                <h4> <Link to="/"> Home </Link></h4>
                <h4>About Us</h4>
                <h4> <Link to="/contact"> Contact Us</Link></h4>
                <h4>Career</h4>
                <h4></h4>
             </div>
             <div>
                <h3>Discover</h3>
                <h4><Link to="/room-booking"> Rooms Booking</Link></h4>
                <h4>Our Restaurants</h4>
                <h4>Explore Places</h4>
             </div>
             </div>
             <div className="footerDetails last">
                <h4> <i>Powered by wi-Q Technologies </i></h4>
                <div className="socialconnect">
                    <span>Connect with Us:</span>
                    <ul className="socialIcon">
                        <li><i class="fa-brands fa-square-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                    
                </div>
             </div>
        </div>
    )
}

export default Footer