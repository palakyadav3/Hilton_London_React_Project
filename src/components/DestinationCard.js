import React from 'react';
import Goa from "../../assets/img/Goa.jpeg";
import {ExploreCard} from "../../config.js";

 const DestinationCard = ({name,image,rating,price, description}) => {
  return (
    <div className="destination-box">
        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-details">
                <h3 className="card-name">Destination: {name}</h3>
                <h4>Price: {price}</h4>
                <h4>{rating} Stars</h4>
                <h4>
                    Learn More...
                </h4>

            </div>

        </div>
        {/* <div className="des">{description}
        </div> */}
    </div>
  )
}
export default DestinationCard;