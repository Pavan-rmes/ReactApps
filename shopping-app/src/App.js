import logo from "./logo.svg";
import "./App.css";
import {
  ChevronRightSvg,
  ChevronLeftSvg,
  CircleSvg,
  FacebookSvg,
  InstagramSvg,
  SearchSvg,UserSvg,CartSvg,StarSvg
} from "./icons/index";
import { useState, useEffect } from "react";

function App() {
  return (
      <div>
        <NotifySlider />
        <ImageSlider />
        {/* <Navbar /> */}
        <ReviewButton />
      </div>
  );
}

const images = [
  "https://img.freepik.com/premium-photo/traditional-indian-sweets-red-background-flat-lay_154515-5688.jpg?w=2000",
  "https://static.vecteezy.com/system/resources/previews/006/036/349/non_2x/traditional-indian-sweets-on-rustic-background-flat-lay-photo.jpg",
  "https://t3.ftcdn.net/jpg/04/96/35/32/360_F_496353237_yiNyacxF2TrjQWTXjdprJTWGif8oatXA.jpg",
];

const notify = [
  "Use Code -NEW10 for 10% OFF",
  "Next Sale in 2 Days",
  "Free Delivery on Order Above 200",
];

// const logoImg = "https://www.clipartmax.com/png/middle/178-1786876_logo-designs-inspired-by-indian-themes-sweet-shop-logo-png.png"

function NotifySlider() {
  const [status, setStatus] = useState(0);
  const [stop, setStop] = useState(false);
  let timeOut = null;
  useEffect(() => {
    timeOut =
      !stop &&
      setTimeout(() => {
        slideRight();
      }, 4000);
  });

  function slideRight() {
    status >= notify.length - 1 ? setStatus(0) : setStatus(status + 1);
  }
  console.log(status);
  return (
    <div>
      {notify.map((text, index) => (
        <div
          onMouseEnter={() => {
            setStop(true);
            clearTimeout(timeOut);
          }}
          onClick={() => {
            clearTimeout(timeOut);
            slideRight();
          }}
          onMouseLeave={() => setStop(false)}
          className={`py-3 bg-blue-600 text-center text-l text-white hover:cursor-grab w-full ${
            status == index ? "block" : "hidden"
          }`}
          // src = {image}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

function ImageSlider() {
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
  console.log(imageIndex);
  return (
    <div>
      {images.map((image, index) => (
        <div className="flex flex-row relative">
          <img
            src={image}
            className={`absolute homePagebgImage object-cover w-full ${
              index == imageIndex ? "block" : "hidden"
            }`}
          />
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
          setImageIndex={setImageIndex}
        />
      </div>
    </div>
  );
}

function ImageRepresentive({ imageIndex, setImageIndex }) {
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

function ContentOnImage() {
  const instagramLink = "";
  const facbookLink = "";

  return (
    <div className="relative lg:px-36 md:px-28 sm:px-20 px-5">
      <div className="sm:flex py-2 flex-row-reverse gap-2 hidden">
        <a href={instagramLink}>
          <FacebookSvg />
        </a>
        <a href={facbookLink}>
          <InstagramSvg />
        </a>
      </div>
      <hr className="text-black sm:block hidden"></hr>
      <div className="flex pt-4 flex-row items-center justify-center sm:justify-between">
        <div className="text-3xl text-white hidden sm:block">
          <SearchSvg className="md:w-8 md:h-8" />
        </div>
        <div className="flex flex-row gap-4 items-center justify-center text-xl md:text-4xl text-white pt-2">
          <p>logo</p>
          <p>Name</p>
        </div>
        <div className="flex flex-row hidden sm:gap-2 sm:flex">
          <span><UserSvg /></span>
          <span><CartSvg /></span>
        </div>
      </div>
    </div>
  );
}

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const controlNavbar = () => {
//     if (typeof window !== "undefined") {
//       if (window.scrollY > "50px") {
//         // if scroll down hide the navbar
//         setShow(false);
//       } else {
//         // if scroll up show the navbar
//         setShow(true);
//       }

//       // remember current page location to use in the next move
//       setLastScrollY(window.scrollY);
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", controlNavbar);

//       // cleanup function
//       return () => {
//         window.removeEventListener("scroll", controlNavbar);
//       };
//     }
//   }, [lastScrollY]);

//   return (
//     <div className={`absolute top-0 active ${show && "hidden"}`}>
//       <p>Logo</p>
//       <p>Name</p>
//       <p>Home</p>
//     </div>
//   );
// };

function ReviewButton(){
  return(
    <div className="absolute -right-11 bottom-36 hover:cursor-pointer md:text-xl rotate-90">
      <div className="bg-gray-600 flex md:gap-2 rounded-b-xl text-white px-4 p-2">
        <StarSvg className="md:w-6 md:h-6 w-5 h-5" /> 
        <p >Reviews</p>
      </div>
    </div>
  )
}

export default App;
