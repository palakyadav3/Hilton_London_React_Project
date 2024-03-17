import React,{useState} from 'react'
import DestinationCard from "./DestinationCard";
import {ExploreCard} from "../../config.js";

 const ExploreDestination = () => {
    console.log(ExploreCard,'sdsadas');
    const [Destinations,setDestinations]=useState(ExploreCard);
  return (
    
   <div className="destination-box">
    {
        Destinations.map((destination)=>{
            return <DestinationCard {...destination} key={destination?.id}/>
        })
    }
   </div>
  )
}

export default ExploreDestination ;
