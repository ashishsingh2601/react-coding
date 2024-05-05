import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import imageArr from "../assets/images";

const ImageSlider = () => {
    const [activeImageIndex, setActiveImageIndex]  = useState(0);


    // these handlers are for handling button clicks
    // const handlePrevious = () => {
    //     setActiveImageIndex((prev) =>  prev === 0 ? imageArr.length - 1 : prev - 1);
    // }

    // const handleNext = () => {
    //     setActiveImageIndex((prev) =>  (prev + 1) % imageArr.length);
    // }

    useEffect(() => {
        let interval = setInterval(() => {
            setActiveImageIndex((prev) =>  (prev + 1) % imageArr.length)
        }, 3000)
    
        return () => {
            clearInterval(interval)
        }

    }, [imageArr])

  return (
    <main className="image-slider">
      {/* <button onClick={handlePrevious} className="btn">Previous</button> */}
      {imageArr &&
        imageArr?.map((image, index) => {
            console.log(image)
          return (
            <div className="image">
              <img
                src={image}
                alt={`wallpaper-${index + 1}.jpg`}
                key={index}
                loading="lazy"
                className={activeImageIndex === index ? "active" : "inactive"}
              />
            </div>
          );
        })}
      {/* <button onClick={handleNext} className="btn">Next</button> */}

    </main>
  );
};

export default ImageSlider;
