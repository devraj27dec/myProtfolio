import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { config } from "@/constat";

const Header = () => {
  return (
    <div className="bg-indigo-950/85 mx-auto backdrop-blur-sm sm:flex sm:sticky sm:top-0 py-4 top-2 z-50 rounded-full">
      <div className="container flex justify-between items-center mx-auto px-4">
        <a href="#home">
          <span className="text-2xl md:text-3xl font-semibold text-purple-300">devrajrajput.</span>
        </a>
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {config.header.midNav.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lg lg:text-xl tracking-tight text-slate-300 hover:text-slate-100 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className="text-slate-300 text-sm" width={24} height={24} />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-center mt-4 gap-4">
                {config.header.leftNav.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-lg text-slate-500 hover:text-slate-900 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/devraj-rajput" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="w-6 h-6 text-blue-700" />
                  </a>
                  <a href="https://www.instagram.com/raj_kirar027" target="_blank" rel="noopener noreferrer">
                    <InstagramLogoIcon className="w-6 h-6 text-pink-600" />
                  </a>
                  <a href="https://github.com/devraj27dec" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="w-6 h-6 text-black" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
