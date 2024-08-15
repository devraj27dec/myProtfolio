import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { config } from "@/constat";


const Header = () => {
  return (
    <header className=" py-4 white shadow-md">
      <div className=" container flex justify-between items-center mx-auto px-4">
        <div>
          <span className=" text-3xl font-semibold text-purple-300">Devraj Rajput</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {config.header.midNav.map((item , index) => (
            <a key={index} className=" text-xl tracking-tight text-slate-300 hover:text-slate-100 cursor-pointer">{item.name}</a>
          ))}
        </div>
        <div className=" md:hidden">
          <Sheet>
            <SheetTrigger><HamburgerMenuIcon className=" text-slate-300 text-sm" width={24} height={24}/></SheetTrigger>
            <SheetContent>
              <div className=" flex flex-col items-center mt-4 gap-4">
                {config.header.leftNav.map((item, index) => (
                  <a key={index} className=" text-xl text-slate-500 hover:text-slate-900 cursor-pointer">{item.name}</a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
