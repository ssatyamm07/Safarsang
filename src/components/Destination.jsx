import React from "react";
import "./Destination.css";
import parisPic1 from "../Assets/Manali.jpg";
import parisPic2 from "../Assets/Manali2.jpg";
import italy1 from "../Assets/Ladakh.jpg";
import italy2 from "../Assets/Ladakh2.jpg";
import maldivs1 from "../Assets/Goa.jpg";
import maldivs2 from "../Assets/Goa2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Top Destination</h1>
        <p className="font-sofias tagline">
        Where excitement awaits around every corner!
        </p>
        <DestinationData
          heading="Manali, Himachal Pradesh: The Land of Adventure!"
          text=" Experience the timeless allure of Manali, Himachal Pradesh. Wander through the lush valleys and along the serene Beas River, nestled against the backdrop of majestic Himalayan peaks. Immerse yourself in the adventure of Rohtang Pass, where thrilling activities like skiing and snowboarding await. Explore the enchanting Hidimba Devi Temple and be captivated by the charm of Old Manali's quaint streets. Indulge in delicious local cuisine at cozy cafes, savoring momos and hot apple cider. From the tranquil beauty of Solang Valley to the bustling Mall Road, Manali seamlessly blends nature, culture, and excitement. Discover the magic of this Himalayan paradise as you trek through its scenic trails, witness stunning sunrises over snow-capped mountains, and create cherished memories that will linger forever."
          img1={parisPic1}
          img2={parisPic2}
          className="first-desc"
          button="Set Your Plan!"
        />
        <DestinationData
          heading="Leh Ladakh: The Land of High Passes!"
          text=" Explore the awe-inspiring wonders of Leh Ladakh, known as The Land of High Passes. Nestled amidst the rugged terrain of the Himalayas, Leh Ladakh offers a unique and adventurous escape. Drive along the legendary Khardung La Pass, one of the highest motorable roads in the world, and marvel at the breathtaking landscapes of Pangong Lake. Discover the serenity of ancient monasteries like Thiksey and Hemis, and lose yourself in the vibrant culture of the local villages. Savor delicious Ladakhi cuisine in cozy eateries and sip on butter tea while gazing at the clear, star-filled skies. Leh Ladakh, with its rich history, spirituality, and natural beauty, is a timeless destination that promises unforgettable experiences. Immerse yourself in this captivating region, where every corner unveils a piece of its magical story."
          img1={italy1}
          img2={italy2}
          className="first-desc-reverse"
          button="Set Your Plan!"
        />
        <DestinationData
          heading="Goa - The Beach Paradise of India!"
          text="Embark on a journey to Goa, the vibrant beach paradise of India. Discover a world of sun, sand, and sea as you immerse yourself in the laid-back charm of Goa's coastline. Whether you seek lively beach parties, serene beachfront yoga retreats, or adventurous water sports, Goa offers it all. Picture yourself lounging under swaying palm trees on pristine beaches, where each moment feels like a blissful escape. Dive into the rich cultural heritage of Old Goa's churches and forts, explore bustling markets, and indulge in delicious Goan cuisine with a view of the Arabian Sea. Goa beckons, promising an unforgettable experience where relaxation and adventure harmoniously blend in this tropical paradise."
          img1={maldivs1}
          img2={maldivs2}
          className="first-desc"
          button="Set Your Plan!"
        />
      </div>
    </>
  );
};

export default Destination;
