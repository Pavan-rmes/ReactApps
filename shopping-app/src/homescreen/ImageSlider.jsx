import { images } from "../utlity";
import {
  ChevronRightSvg,
  ChevronLeftSvg,
  CircleSvg,
} from "../icons/index";
import { useState } from "react";
import { ContentOnImage } from "./ContentOnImage";

export function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  function swipeLeft() {
    if (imageIndex <= 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  function swipeRight() {
    if (imageIndex >= images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }
  return (
    <div onClick={()=>swipeRight()} >
      {images.map((image, index) => (
        <div className="flex flex-row relative">
          <img
            src={image}
            className={`absolute homePagebgImage object-cover w-full ${index == imageIndex ? "block" : "hidden"}`} />
        </div>
      ))}
      <ContentOnImage />
      <div className="relative hidden sm:flex justify-between items-center pt-56">
        <span onClick={() => swipeLeft()}>
          <ChevronLeftSvg className="md:w-20 md:h-20 w-12 h-12" />
        </span>
        <span onClick={() => swipeRight()}>
          <ChevronRightSvg className="md:w-20 md:h-20 w-12 h-12" />
        </span>
      </div>
      <div>
        <ImageRepresentive
          imageIndex={imageIndex}
          setImageIndex={setImageIndex} />
      </div>
    </div>
  );
}


export function ImageRepresentive({ imageIndex, setImageIndex }) {
  return (
    <div className="relative sm:flex hidden justify-center imgDots">
      {images.map((img, index) => (
        <span onClick={() => setImageIndex(index)}>
          <CircleSvg radius={`${index == imageIndex ? "8" : "5"}`} />
        </span>
      ))}
    </div>
  );
}



