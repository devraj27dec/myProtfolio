'use client'
import { config } from "@/constat";
import Image from "next/image";
import React from "react";
import profile from "../../../public/assets/prf.jpeg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {motion} from 'framer-motion'
import { TypewriterEffectSmooth } from "@/components/ui/Typing-effect";

const Hero = () => {

  return (
    <div className="container flex flex-col md:flex-row items-center mt-10 justify-between max-w-6xl mx-auto px-6" >
      <div className="text-center md:text-left mb-8 md:mb-0 space-y-4">
        <span className="text-4xl md:text-5xl font-bold block text-slate-200">Hi! I'm</span>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-600"
        >
        <TypewriterEffectSmooth words={[{text: config.banner.name}]}/>
        </h1>
        <p className="text-lg text-slate-300">A Full Stack Devloper , I enjoy building websites & Exploring New Tech Stack</p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
          <button className="inline-flex items-center justify-center px-6 py-3e text-base font-medium text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-600 rounded-lg shadow hover:from-purple-600 hover:via-indigo-600 hover:to-indigo-700 transition">
            Resume
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-indigo-600 rounded-lg shadow hover:bg-indigo-600 hover:text-white transition">
            Contact <ArrowRightIcon className="ml-2" />
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-8 md:mt-0">
        <Image
          src={profile}
          alt="Profile"
          width={320}
          height={320}
          className="border-4 border-purple-500 rounded-full object-cover w-40 h-40 md:w-80 md:h-80"
        />
      </div>
    </div>
  );
};

export default Hero;
