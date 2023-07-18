import React from 'react';
import {useState} from 'react';
import image3 from './Images/image3.svg';
import image4 from './Images/image4.svg';
import image5 from './Images/image5.svg';
import image6 from './Images/image6.svg';
import image7 from './Images/image7.svg';

const images = [
   image7,image5,image4,image6,image3
];
function ImageChangeOnMouse() {
    const [currentImage, setCurrentImage] = useState(image7);

    
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
  
  export default ImageChangeOnMouse;

  
  
  
  



