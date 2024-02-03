import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Undo2, Eye, Github } from "lucide-react";

import { projects } from "@/data/projects";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { Title } from "@/components/elements/Title";
import { Image } from "@/components/elements/Image";
import { Typography } from "@/components/elements/Typography";
import { Button } from "@/components/elements/Button";

export const generateMetadata = async ({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> => {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return;
  }

  const { title, smallDescription, slug, image } = project;

  return {
    title,
    description: smallDescription,
    openGraph: {
      description: smallDescription,
      title,
      images: `${image}`,
      type: "website",
      url: `https://john-porfolio.vercel.app/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      description: smallDescription,
      images: `${image}`,
      title,
    },
  };
};

const ProjectPage = ({ params }: { params: any }) => {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { title, visit, code, techs, image, description } = project;

  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section className="space-y-10">
        <div className="space-y-6">
          <Link
            href="/projects"
            className="flex w-fit items-center gap-1 text-sm font-medium text-neutral-500 duration-500 hover:gap-2 hover:text-foreground"
          >
            <Undo2 size={16} />
            Back
          </Link>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <Title variant="title">{title}</Title>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {visit && (
                <a href={visit} target="_blank" rel="noopener noreferrer">
                  <Button variant="dark" className="rounded-full px-4 py-3 shadow-sm hover:shadow-sm shadow-white/60 hover:shadow-white">
                    <Eye size={18} />
                    Live
                  </Button>
                </a>
              )}
              {code && (
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <Button variant="dark" className="rounded-full px-4 py-3 shadow-sm hover:shadow-sm shadow-white/60 hover:shadow-white">
                    <Github size={18} />
                    Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl">
          <Image src={image} alt={title} zoomHover={true} />
        </div>
      </section>
      <section className="mt-10">
        <article className="space-y-10">
          <div className="space-y-4">
            {description.map((desc, index) => (
              <Typography
                key={index}
                className="leading-relaxed duration-300 hover:text-primary/80"
              >
                {desc.content}
              </Typography>
            ))}
          </div>
          <div className="space-y-4">
            <Title variant="title" size="lg">
              Technologies Used
            </Title>
            <ul className="flex flex-wrap items-center gap-3">
              {techs.map((tech, index) => (
                <li
                  key={index}
                  className="relative flex items-center gap-2 overflow-hidden rounded-lg border border-border/50 bg-muted px-3 py-2"
                >
                  <Image src={tech.image} width={20} alt={tech.name} />
                  <Typography size="sm" className="font-medium">
                    {tech.name}
                  </Typography>

                  <div className="absolute right-0 top-0 h-px w-80 bg-gradient-to-l from-transparent via-primary/30 via-10% to-transparent" />
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </AnimateEnter>
  );
};

export default ProjectPage;
