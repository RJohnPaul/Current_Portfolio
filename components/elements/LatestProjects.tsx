"use client";

import Link from "next/link";
import { useRef } from "react";

import Lottie from "lottie-react";

import { projects } from "@/data/projects";

import arrowIcon from "@/assets/icons/arrow.json";

import { Title } from "@/components/elements/Title";
import { ProjectItem } from "./ProjectItem";

const LatestProjects = () => {
  const arrowRef = useRef<any>();

  return (
    <>
      <div className="flex items-center justify-between">
        <Title variant="title" size="lg">
          Recent Projects
        </Title>
        <Link
          href="/projects"
          className="flex select-none items-center gap-1 text-xs font-medium text-foreground duration-300 hover:text-secondary"
          onMouseEnter={() => arrowRef.current?.play()}
          onMouseLeave={() => arrowRef.current?.stop()}
        >
          <span>See all</span>
          <Lottie
            lottieRef={arrowRef}
            animationData={arrowIcon}
            style={{ width: 18, height: 18 }}
            autoplay={false}
            loop={false}
          />
        </Link>
      </div>
      <ul className="mt-6 grid place-items-center gap-4 md:grid-cols-2">
        {projects.slice(0, 2).map((props) => (
          <li key={props.title}>
            <ProjectItem {...props} />
          </li>
        ))}
      </ul>
    </>
  );
};

export { LatestProjects };
