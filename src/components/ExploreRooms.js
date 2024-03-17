import Calendar1 from "./Calendar";
const ExploreRooms=()=>{
    const showCalendar = () => {
       return true;
    }
    return(
        <div className="mainBookRoom">
            <h2>Book Rooms </h2>
            <div className="bookRoom">
                <div>
                    <button onClick={()=>(showCalendar)}>Check-in</button>
                 {  showCalendar? <div> <Calendar1/></div>: null }
                    <button>Check-out</button>
                </div>
            </div>
           
        </div>
    )

}
export default ExploreRooms;