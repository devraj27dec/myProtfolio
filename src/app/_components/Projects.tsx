import { Button } from "@/components/ui/button";
import { config } from "@/constat";
import Image from "next/image";
import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16 shadow-lg border-slate-200">
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-slate-300">
        Projects
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-6xl">
        {config.Projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className=" w-full h-65 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-purple-100 text-purple-600 py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Button
                  variant="default"
                  className="bg-indigo-600 text-white w-full sm:w-auto"
                >
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="text-base text-black w-full sm:w-auto"
                >
                  Code <ExternalLinkIcon className="ml-2 text-lg" />
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
