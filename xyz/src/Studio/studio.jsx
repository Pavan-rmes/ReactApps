import { Testimonials } from "../Testimonial/Testimonials";
import { useState } from "react";
import {NavigationTab} from "./Tabs"


export function Studio() {
  const [state, setState] = useState("pending");
  return (
    <div>
        <NavigationTab state={state} setState={setState} />
      {/* <StudioNavigationBar state={state} setState={setState} /> */}
      <div className="relative">
        <Testimonials state={state} />
        <CustomizationBar state={state} setState={setState} />
      </div>
    </div>
  );
}

function StudioNavigationBar({ state, setState }) {
  return (
    <ul className="mx-4 my-10 flex border-b-2 border-blue-600 mb-4">
      <li
        onClick={() => {
          setState("pending");
        }}
        className={`px-3 py-2 cursor-pointer rounded-t ${
          state === "pending" && "bg-blue-600 text-white"
        }`}
      >
        <a>Pending</a>
      </li>
      <li
        onClick={() => {
          setState("accepted");
        }}
        className={`px-3 cursor-pointer rounded-t py-2 ${
          (state === "accepted" || state === "customize") &&
          "bg-blue-600 text-white"
        }`}
      >
        <a>Accepted</a>
      </li>
      <li
        onClick={() => {
          setState("insights");
        }}
        className={`px-3 cursor-pointer rounded-t py-2 ${
          state === "insights" && "bg-blue-600 text-white"
        }`}
      >
        <a>Insights</a>
      </li>
      <li
        onClick={() => {(state === "customize") ?setState("accepted"):setState("customize")}}
        className={`px-3 cursor-pointer rounded-t py-2  ${
          state === "accepted" || state === "customize" ? "block" : "hidden"
        }`}
      >
        <a>Customize</a>
      </li>
    </ul>
  );
}

export function CustomizationBar({ state,setState }) {
  console.log(state);
  return (
    <div
      className={`fixed h-screen w-48 bg-gray-100 right-0 top-24 ${
        state === "customize"
          ? "right-0 animate-slide-in-right"
          : "-right-28 animate-slide-out-right"
      } `}
    >
      <div className="relative pt-2">
        <div
        onClick={()=>{(setState("accepted"))}}
        className="absolute right-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
