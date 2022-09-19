import { notify } from "../utlity";
import { useState, useEffect } from "react";

// const logoImg = "https://www.clipartmax.com/png/middle/178-1786876_logo-designs-inspired-by-indian-themes-sweet-shop-logo-png.png"
export function NotifySlider() {
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
          className={`py-3 bg-blue-600 text-center text-l text-white hover:cursor-grab w-full ${status == index ? "block" : "hidden"}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
