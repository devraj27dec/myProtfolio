'use client'
import { config } from "@/constat";
import Image from "next/image";
import React from "react";
import profile from "../../../public/assets/profile.jpg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { TypewriterEffectSmooth } from "@/components/ui/Typing-effect";

const Hero = () => {

  return (
    <div className="container flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 border-b border-slate-100 min-h-screen">
    {/* Text Section */}
    <div className="text-center md:text-left mb-12 md:mb-0 space-y-6 md:flex-1">
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold block text-slate-200">
        Hi! I'm
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-600 flex justify-center md:justify-start">
        <TypewriterEffectSmooth words={[{ text: config.banner.name }]} />
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0">
        A Full Stack Developer, I enjoy building websites & exploring new
        tech stacks.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
        <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-600 rounded-lg shadow hover:from-purple-600 hover:via-indigo-600 hover:to-indigo-700 transition">
          Resume
        </button>
        <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-indigo-600 rounded-lg shadow hover:bg-indigo-600 hover:text-white transition">
          Contact <ArrowRightIcon className="ml-2" />
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex justify-center md:justify-end mt-12 md:mt-0 md:flex-1">
      <Image
        src={profile}
        alt="Profile"
        width={200}
        height={200} 
        className="border-4 border-purple-500 rounded-full object-cover w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96"
      />
    </div>
  </div>
  );
};

export default Hero;
