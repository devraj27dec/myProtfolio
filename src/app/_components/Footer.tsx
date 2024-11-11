import { socialMedia } from '@/constat';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between py-6 text-center space-y-4 md:space-y-0">
      <div className="text-center">
        <span className="text-lg md:text-xl">© Designed & Built 💜 by Devraj Rajput. 2024</span>
      </div>
      <div className="flex items-center gap-4">
        {socialMedia.map((icon) => (
          <div
            key={icon.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-md bg-indigo-900/50 rounded-full transition duration-300 hover:scale-105"
          >
            <a href={icon.url}>
              <img src={icon.img} alt="icons" width={20} height={20} />
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
