// React Hooks
import { useEffect } from "react";

// Icon
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Data
import { projects } from "../data/projects-data";

// Projects
const Projects = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <section className="w-full min-h-screen py-24">
      <div className="max-w-[1000px] min-h-screen p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 text-center">
          <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-lg py-2">
            Minhas aplicações &mdash;
          </p>
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-br from-white to-transparent via-primary bg-clip-text text-transparent">
            Meus projetos
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:px-2 lg:px-0">
          {projects.map(
            ({ id, src, title, description, techs, code, visit }) => (
              <div
                key={id}
                className="shadow-md flex sm:flex-col lg:flex-row shadow-gray-600 rounded-xl h-full group"
              >
                <div className="overflow-hidden sm:rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl">
                  <img
                    src={src}
                    className="ease-in-out duration-200 group-hover:scale-105 max-w-5xl w-full"
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full py-5 px-10">
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-xl text-primary py-1.5">
                      {title}
                    </h3>
                    <span className="max-w-full text-[13.5px] text-gray-400 font-medium py-2 mx-3">
                      {description}
                    </span>
                  </div>
                  <div className="py-2">
                    {techs.map((tech) => (
                      <button
                        key={tech}
                        className="text-gray-300 bg-primary/10 text-xs px-3 font-medium py-2 rounded-lg cursor-default m-1"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 py-1.5">
                    <a href={visit} target="_blank">
                      <button className="flex flex-row items-center justify-center font-medium text-sm text-gray-400 p-2 gap-1 duration-300 hover:text-primary">
                        Visitar
                        <FiExternalLink />
                      </button>
                    </a>
                    <a href={code} target="_blank">
                      <button className="flex flex-row items-center justify-center font-medium text-sm text-gray-400 p-2 gap-1 duration-300 hover:text-primary">
                        Repositório
                        <FiGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
