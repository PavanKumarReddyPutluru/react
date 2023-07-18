import React from 'react';
import {useState} from 'react';
import image8 from './Images/image8.svg';
import image9 from './Images/image9.svg';
import image10 from './Images/image10.svg';
import image11 from './Images/image11.svg';
import image12 from './Images/image12.svg';

const images = [
   image8,image9,image10,image11,image12
];
function ImageChangeOnMouse1() {
    const [currentImage, setCurrentImage] = useState(image8);

    
    const handleMouseOver = () => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
      };
  
    return (
      <img
      src={currentImage}
      alt="Image"
      onMouseOver={handleMouseOver}
      style = {{height:350,width:350}
      }   
      />
    );
  };
  
  export default ImageChangeOnMouse1;