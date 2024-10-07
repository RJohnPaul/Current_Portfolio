import { Metadata } from "next";
import { projects } from "@/data/projects";

import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { ProjectItem } from "@/components/elements/ProjectItem";
import { AnimateEnter } from "@/components/elements/AnimateEnter";
export const metadata: Metadata = {
  title: "Projects",
  description: "Few of my projects that I have developed.",
};

const ProjectsPage = () => {
  const getTotalProjects = () => {
    return projects.length;
  };

  return (
    
      <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
        <section>
          <Title variant="title">Hobby & Open Source</Title>
          <Typography className="my-6 leading-relaxed">
            I am{" "}
            <span className="text-primary/80">
              passionate about creating meaningful projects
            </span>
            , as it is the greatest key to gaining knowledge. On this page, you can navigate to{" "}
            <span className="text-primary/80">
              the&nbsp;{getTotalProjects()}+&nbsp;main applications
            </span>{" "}
            that I have developed.
            <span className="block mt-4">
              View more projects on my <a target="_blank" href="https://github.com/RJohnPaul" className=" hover:underline-offset-2 hover:text-purple-500 transition-all underline cursor-pointer">Github!</a>
            </span>
          </Typography>
        </section>
        <ul className="grid place-items-center gap-4 md:grid-cols-2">
          {projects.map((props) => (
            <li key={props.title}>
              <ProjectItem {...props} />
            </li>
          ))}
        </ul>
      </AnimateEnter>
    
  );
};

export default ProjectsPage;
