import { StaticImageData } from "next/image";

import xtractai from "@/assets/images/projects/xtractai.png";
import portfolio from "@/assets/images/projects/portfolio.png";
import qwick from "@/assets/images/projects/qwick.png";
import swiftmart from "@/assets/images/projects/swiftmart.png";
import moviecorn from "@/assets/images/projects/moviecorn.png";
import crypto from "@/assets/images/projects/crypto.png";
import weather from "@/assets/images/projects/weather.png";
import todo from "@/assets/images/projects/todo.png";
import musicplayer from "@/assets/images/projects/musicplayer.png";

import threejs from "@/assets/images/skills/threejs.svg";
import rapidapi from "@/assets/images/skills/rapidapi.svg";
import html from "@/assets/images/skills/html.svg";
import css from "@/assets/images/skills/css.svg";
import nextjs from "@/assets/images/skills/nextjs.svg";
import radix from "@/assets/images/skills/radix.svg";
import vite from "@/assets/images/skills/vite.svg";
import shadcn from "@/assets/images/skills/shadcn.svg";
import mongo from "@/assets/images/skills/mongo.svg";
import nextauth from "@/assets/images/skills/next-auth.svg";
import openai from "@/assets/images/skills/openai.svg";
import react from "@/assets/images/skills/react.svg";
import typescript from "@/assets/images/skills/typescript.svg";
import javascript from "@/assets/images/skills/javascript.svg";
import styled_components from "@/assets/images/skills/styled-components.svg";
import tailwind from "@/assets/images/skills/tailwindcss.svg";
import framer from "@/assets/images/skills/framer.svg";

type Projects = Array<{
  image: StaticImageData;
  title: string;
  smallDescription: string;
  description: Array<{
    content: string;
  }>;
  techs: Array<{
    image: StaticImageData;
    name: string;
  }>;
  code?: string;
  visit?: string;
  slug: string;
}>;

const projects: Projects = [
  {
    image: portfolio,
    title: "Portfolio",
    smallDescription:
      "Simple Redesigned Portfolio Website with Next.js and Tailwind CSS.",
    description: [
      {
        content:
          "A 3d Portfolio",
      },
      {
        content:
          "Welcome to my 3D Portfolio! Immerse yourself in a captivating showcase of my work within a stunning 3D environment, seamlessly blending Framer Motion, Three.js, and traditional CSS styling.",
      },
      {
        content:
          "Explore projects with smooth animations powered by Framer Motion, interact with the 3D space through intuitive controls, and enjoy a consistent experience across devices with responsive design. The projects are styled using a mix of traditional CSS techniques and modern libraries, striking a balance between aesthetics and functionality. Leveraging Framer Motion and Three.js, this portfolio offers a unique and engaging user experience.",
      },
      {
        content:
          "Future plans include incorporating more interactive elements, exploring advanced Three.js features for captivating visuals, and collaborating with other developers to expand the portfolio's capabilities.",
      },
    ],
    techs: [
      {
        image: react,
        name: "React",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
      {
        image: tailwind,
        name: "Tailwind CSS",
      },
      {
        image: vite,
        name: "Vite",
      },
      {
        image: css,
        name: "CSS",
      },
      {
        image: framer,
        name: "Framer Motion",
      },
      {
        image: threejs,
        name: "Three.js",
      },
    ],
    visit: "https://john-paul.vercel.app",
    slug: "portfolio",
  },
  {
    image: qwick,
    title: "QwickPizza",
    smallDescription: "A sample website for a pizza shop using React Hook Methadology and Next.js.",
    description: [
      {
        content:
          "A sample website for a pizza shop which contains a set of diffrent pizzas and contains a set of addition, deletion buttons ",
      },
      {
        content:
          "These are purely react hook based components and are made using nextjs and tailwind css.",
      },
    
    ],
    techs: [
      {
        image: nextjs,
        name: "Next.js",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
      
      {
        image: tailwind,
        name: "Tailwind CSS",
      },
      {
        image: react,
        name: "React",
      },
    ],
    code: "https://github.com/RJohnPaul/QwickPizza",
    visit: "https://qwick-pizza.vercel.app",
    slug: "qwickpizza",
  },
  {
    image: xtractai,
    title: "XtractAI",
    smallDescription:
      "XtractAI is an AI summarizing tool that uses RapidAPI to shorten web pages.",
    description: [
      {
        content:
          "Utilizing RapidAPI, this powerful AI summarizing engine can generate customizable summaries for web pages from diverse sources like news websites, blogs, and academic papers.",
      },
      {
        content:
          "In my project, I utilized React, a JavaScript library for building user interfaces, along with Vite, a web development framework that efficiently bundles with Rollup, TailwindCSS, a utility-first CSS framework for easy styling of web pages, and RapidAPI, a marketplace enabling access to a variety of AI services.",
      },
    ],
    techs: [
      {
        image: react,
        name: "React",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
      {
        image: vite,
        name: "Vite",
      },
      {
        image: tailwind,
        name: "Tailwind CSS",
      },
      {
        image: rapidapi,
        name: "RapidAPI",
      },
    ],
    code: "https://github.com/guhrodriguess/sharespace",
    visit: "https://sharespacelab.vercel.app",
    slug: "sharespace",
  },
  {
    image: swiftmart,
    title: "Events Starter",
    smallDescription:
      "Simple HTML/CSS in React Starter Page.",
    description: [
      {
        content:
          "A Simple HTML/CSS Starter page for beginners to kickstart a event page in pure html css in react framework.",
      },
    ],
    techs: [
      {
        image: html,
        name: "HTML",
      },
      {
        image: css,
        name: "CSS",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
      {
        image: react,
        name: "React.js",
      },
    ],
    code: "https://github.com/RJohnPaul/Event_Page_Starter",
    visit: "https://event-page-starter.vercel.app/",
    slug: "swiftmart",
  },
  
];

export { projects };
