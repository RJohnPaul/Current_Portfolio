'use client'
import Link from "next/link";

import { Send } from "lucide-react";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { LatestProjects } from "@/components/elements/LatestProjects";
import { Button } from "@/components/elements/Button";

const HomePage = () => {
  
  return (
    <AnimateEnter className="max-w-[854px] space-y-12 max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section className="space-y-4">
        <Title variant="title">John Paul</Title>
        <Typography className="leading-relaxed">
          I&apos;m <span className="text-primary/80">Talented Web Developer and Designer</span>,
          i experiment with web development frameworks mostly using ReactJS,NextJS,NextUI and Design using TailwindCSS as well as Vanilla CSS. I also design using Figma and have create 20+ Posters for my Projects.{" "}
          <span className="text-primary/80">
            Changing the world one code at a time.
          </span>
          <span className="text-primary/80">
             &nbsp;Original Design by<a className="cursor-pointer hover:text-green-500 underline transition-all duration-350" target="_blank" href="https://guhrodrigues.com" rel="noopener noreferrer">guhrodrigues</a>
          </span>
          <span className="text-primary/80">
             &nbsp;And ReDesign by<a className="cursor-pointer hover:text-green-500 underline transition-all duration-350" target="_blank" href="https://github.com/RJohnPaul" rel="noopener noreferrer">John Paul</a>
          </span>
        </Typography>
      </section>
      <section>
        <LatestProjects />
      </section>
      <section className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-border/50 bg-muted p-5">
        <Title variant="title" size="xl">
          Let&apos;s Connect!
        </Title>
        <Typography className="max-w-xl leading-relaxed">
          If you are interested in my work or want to provide feedback
          about this website,{" "}
          <span className="text-primary/80">I am open to exchanging ideas</span>{" "}
          and discussing any aspect that may be relevant.
        </Typography>
        <Link href="/contact" className="w-fit">
          <Button>
            Contact-me
            <Send size={18} />
          </Button>
        </Link>
        <div className="absolute right-8 top-0 h-px w-[500px] bg-gradient-to-l from-transparent via-primary/30 via-20% to-transparent" />
      </section>
    </AnimateEnter>
  );
};

export default HomePage;
