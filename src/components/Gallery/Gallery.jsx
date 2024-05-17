import React from "react";
import "./Gallery.scss";
import Imagebottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import Imageorange from "../../assets/desktop/image-gallery-orange.jpg";
import Imagecone from "../../assets/desktop/image-gallery-cone.jpg";
import Imagesugarcubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
<<<<<<< HEAD
    <div className='Gallery'>
        
        <div> <img className='Gallery__images'src= {Imagebottles} alt='milkbottles' /></div>
        <div><img className='Gallery__images'src= {Imageorange} alt='oranges' /></div>  
         <div><img className='Gallery__images'src= {Imagecone} alt='icecream cone' /></div> 
         <div><img className='Gallery__images'src= {Imagesugarcubes} alt='sugarcubes' /></div> 
        
=======
    <div className="Gallery">
      <div>
        <img className="Gallery__images" src={Imagebottles} alt="milkbottles" />
      </div>
      <div>
        <img className="Gallery__images" src={Imageorange} alt="oranges" />
      </div>
      <div>
        <img className="Gallery__images" src={Imagecone} alt="icecream cone" />
      </div>
      <div>
        <img
          className="Gallery__images"
          src={Imagesugarcubes}
          alt="sugarcubes"
        />
      </div>
>>>>>>> 3f35673bc5cacb33752354234ae3d6761ddf5487
    </div>
  );
};

export default Gallery;
