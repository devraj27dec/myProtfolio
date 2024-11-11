import MagicButton from "@/components/MagicButton";
import { Navigation } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 h-screen sm:py-32 py-16"
    >
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-slate-300">
        Get In Touch
      </h2>
      <p className="md:mt-8 text-xl">
        If you'd like to get in touch with me, feel free to reach out on
        LinkedIn or my email and I'll get back to you whenever I can.
      </p>
      <div className="flex">
        <a href="mailto:devrajrajput414@gmail.com">
          <MagicButton title="Let's get in touch" icon={<Navigation />} positon="right"/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
