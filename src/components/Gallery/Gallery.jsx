import React from 'react'
import "./Gallery.scss";
import Imagebottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import Imageorange from "../../assets/desktop/image-gallery-orange.jpg";
import Imagecone from "../../assets/desktop/image-gallery-cone.jpg";
import Imagesugarcubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";


const Gallery = () => {
  return (
    <div className='Gallery'>
        
          <img className='Gallery__images'src= {Imagebottles} alt='milkbottles' />
          <img className='Gallery__images'src= {Imageorange} alt='oranges' />
          <img className='Gallery__images'src= {Imagecone} alt='icecream cone' />
          <img className='Gallery__images'src= {Imagesugarcubes} alt='sugarcubes' />
        
    </div>
  )
}

export default Gallery