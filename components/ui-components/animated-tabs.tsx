import React from "react";

export default function AnimatedTabs() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-xl">
          <nav className="relative z-0 flex justify-around">
            <button className="peer/home flex-1">Home</button>
            <button className="peer/about flex-1">About</button>
            <button className="peer/services flex-1">Services</button>
            <button className="peer/blog flex-1">Blog</button>
            <button className="peer/contact flex-1">Contact</button>

            <span className="absolute left-0 -z-10 h-full w-1/5 origin-center scale-x-110 scale-y-125 rounded-full bg-gray-100 transition-all duration-300 peer-focus/about:left-[20%] peer-focus/services:left-[40%] peer-focus/blog:left-[60%] peer-focus/contact:left-[80%]"></span>
          </nav>
        </div>
      </div>
    </div>
  );
}
