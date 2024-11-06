import React from "react";

export default function Scorlldown() {
  return (
    <div className="flex">
      <a
        id="#about"
        href="#about"
        className="  w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
      >
        <div className=" group border-[3px] border-white rounded-full md:h-12 h-10 w-8 flex justify-center lg:scale-100 scale-75">
          <div className="bg-white h-4 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
        </div>

        <p className=" ">
          Scroll Down
        </p>
      </a>
    </div>
  );
}
