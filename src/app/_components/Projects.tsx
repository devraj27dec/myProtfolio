"use client"
import { Button } from "@/components/ui/button";
import { PersonalProjects } from "@/constat";
import Image from "next/image";
import React from "react";
import { Globe, SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16 border-slate-200">
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-slate-300">
        Projects
      </h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 mt-10 max-w-6xl">
        {Object.entries(PersonalProjects).map(([key, project]) => (
          <div
            key={key}
            className="bg-indigo-950 rounded-lg shadow-lg overflow-hidden border border-black"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={500}
              className="w-full h-65 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-500 mb-2">
                {project.name}
              </h3>
              <p className="text-white mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-indigo-900 text-yellow-300 py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Button
                  variant="default"
                  className="bg-indigo-950 text-purple-400 border-purple-400 rounded-full w-full border sm:w-auto  hover:text-purple-300 hover:border-purple-300"
                  onClick={() => window.open(project.visit, "_blank")}
                >
                  Live <Globe className=" ml-2 text-lg" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-indigo-950 text-purple-400 border-purple-400 rounded-full w-full border sm:w-auto hover:text-purple-300 hover:border-purple-300"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Code <SquareArrowOutUpRight  className="ml-2 text-lg" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
