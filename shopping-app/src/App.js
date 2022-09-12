import logo from "./logo.svg";
import "./App.css";
import { ChevronRightSvg, ChevronLeftSvg,CircleSvg } from "./icons/index";
import { useState } from "react";

function App() {
  return (
    <div>
      <ImageSlider />
    </div>
  );
}

const images = [
  "https://img.freepik.com/premium-photo/traditional-indian-sweets-red-background-flat-lay_154515-5688.jpg?w=2000",
  "https://static.vecteezy.com/system/resources/previews/006/036/349/non_2x/traditional-indian-sweets-on-rustic-background-flat-lay-photo.jpg",
  "https://t3.ftcdn.net/jpg/04/96/35/32/360_F_496353237_yiNyacxF2TrjQWTXjdprJTWGif8oatXA.jpg",
];

function ImageSlider() {
  const [imageIndex,setImageIndex] = useState(0)

  function swipeLeft(){
    if(imageIndex<=0){setImageIndex(images.length-1)}
    else{setImageIndex(imageIndex-1)}
  }

  function swipeRight(){
    if(imageIndex>=(images.length-1)){setImageIndex(0)}
    else{setImageIndex(imageIndex+1)}
  }
  console.log(imageIndex)
  return (
    <div>
      {images.map((image, index) => (
        <div className="flex flex-row relative">
          <img
            src={image}
            className={`absolute object-cover w-full ${
              index == imageIndex ? "block" : "hidden"
            }`}
          />
        </div>
      ))}
      <div className="relative flex justify-between items-center mt-20 sm:mt-48 md:mt-64">
          <span 
          onClick={()=>swipeLeft()}
          >
            <ChevronLeftSvg />
          </span>
          <span
          onClick={()=>swipeRight()}
          >
            <ChevronRightSvg />
          </span>
      </div>
      <div>
        <ImageRepresentive />
      </div>
    </div>
  );
}


function ImageRepresentive(){
  return(
    <div className="relative flex justify-center mt-64">
      {images.map(()=>(
        <CircleSvg styling ={"mt-20"} />
      ))}
    </div>
  )
}

export default App;
