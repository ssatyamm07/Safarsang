import React from "react";
import "./TourStyles.css";
import TourData from "./TourData";
import Tour1 from "../Assets/Tungnath.jpg";
import Tour2 from "../Assets/Mahabaleshwar-hill-view1.jpg";
import Tour3 from "../Assets/Darjeeling.jpg";

const Tour = () => {
  return (
    <>
      <div className="tour d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Recent Visits</h1>
        <p className="font-sofias tagline">
        Exploring India, One Epic Journey at a Time!
        </p>
        <div className="tourCard">
          <TourData
            image={Tour1}
            heading="Tungnath Trek"
            text=" Experience the thrill of Tungnath: a blend of adventure, spirituality, and natural beauty in one unforgettable tour."
            button="Book Now"
          />
          <TourData
            image={Tour2}
            heading="Mahabaleshwar Magic"
            text=" Experience the magic of Mahabaleshwar: lush forests, serene lakes, and a vibrant culture in one unforgettable tour."
            button="Book Now"
          />
          <TourData
            image={Tour3}
            heading="Darjeeling Delight"
            text=" Experience the charm of Darjeeling: lush tea gardens, snow-capped mountains, and a vibrant culture in one unforgettable tour"
            button="Book Now"
          />
        </div>
      </div>
    </>
  );
};

export default Tour;
