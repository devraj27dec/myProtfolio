import { config } from "@/constat";
import Image from "next/image";
import React from "react";
import profile from "../../../public/assets/profile.jpg";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { TypewriterEffectSmooth } from "@/components/Typing-effect";
import Scorlldown from "@/components/Scorlldown";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="container flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 md:px-6 min-h-screen relative"
      >
        <div className="flex flex-col justify-between items-center space-y-6 md:flex-1 md:items-start md:text-left">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-200">
            Hello It's me
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600">
            <TypewriterEffectSmooth words={[{ text: config.banner.name }]} />
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-md lg:max-w-lg">
            {config.banner.description}
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="/assets/Resume.pdf"
              download="Devraj_Rajput_Resume.pdf"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base font-medium text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-600 rounded-lg shadow hover:from-purple-600 hover:via-indigo-600 hover:to-indigo-700 transition"
            >
              Resume <ExternalLinkIcon className="ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base font-medium text-white border border-indigo-600 rounded-lg shadow hover:bg-indigo-600 hover:text-white transition"
            >
              Contact <ArrowRightIcon className="ml-2" />
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end">
          <Image
            src={profile}
            alt="Profile"
            width={200}
            height={200}
            className="border-4 border-purple-500 rounded-full object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
          />
        </div>
        <div className="absolute bottom-6 w-full flex justify-center">
          <Scorlldown />
        </div>
      </section>
    </>
  );
};

export default Hero;
