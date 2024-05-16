import React from "react";
import image1 from "../../assets/desktop/image-graphic-design.jpg";
import image2 from "../../assets/desktop/image-photography.jpg";
import image3 from "../../assets/desktop/image-stand-out.jpg";
import image4 from "../../assets/desktop/image-transform.jpg";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner-statement">
        <h2>Transform Your Brand</h2>
        <p>
          We are a full Service creative agency specializing in helping brands
          go fast.Engage your clients through compelling visuals that do most of
          the marketing for you.
        </p>
        <h3>Learn More</h3>
      </div>
      <div className="Banner-image">
        <img src={image4} alt="" />
      </div>
      <div className="Banner-image">
        <img src={image3} alt="" />
      </div>
      <div className="Banner-statement">
        <h2>Stand out to the right audience</h2>
        <p>
          Using collaborative formula of designers,researchers,
          photographers,videographers and copywriters,we'll build and extend
          your brand in digital places.
        </p>
        <h3>Learn More</h3>
      </div>

      <div className="Banner-image1">
      
        <h2>Graphic Design</h2>
      </div>
      <div className="Banner-image2">
   
        <h2>Photography</h2>
      </div>
    </div>
  );
};

export default Banner;
