import { StaticImageData } from "next/image";

import xtractai from "@/assets/images/projects/xtractai.png";
import portfolio from "@/assets/images/projects/portfolio.png";
import qwick from "@/assets/images/projects/qwick.png";
import events from "@/assets/images/projects/events.png";
import weatherwave from "@/assets/images/projects/weatherwave.png";
import bootstrapstart from "@/assets/images/projects/bootstrapstart.png";
import buildme from "@/assets/images/projects/Buildme.png";
import tulip from "@/assets/images/projects/tulip.png";

import threejs from "@/assets/images/skills/threejs.svg";
import rapidapi from "@/assets/images/skills/rapidapi.svg";
import bootstrap from "@/assets/images/skills/bootstrap.svg";
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
import firebase from "@/assets/images/skills/firebase.svg";
import next from "next";

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
    title: "3D-Portfolio",
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
    code: "https://github.com/RJohnPaul/Xtract-AI-MLH",
    visit: "https://xtractai.netlify.app",
    slug: "xtractai",
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
    image: tulip,
    title: "TenderTulip",
    smallDescription: "A website build for a company with advanced features like authentication,etc",
    description: [
      {
        content:
          "A complex website for a company which contains several styled components and also uses nextjs for routing and tailwind css for styling.",
      },
      {
        content:
          "Firebase is used for authentication and also for storing data in the backend. and framer motion is used for animations.",
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
      {
        image: framer,
        name: "Framer Motion",
      },
      {
        image: firebase,
        name: "Firebase",
      },
    ],
   
    visit: "https://tulips.technology",
    slug: "tendertulip",
  },
  {
    image: events,
    title: "Events Starter",
    smallDescription:
      "Simple HTML/CSS in React Starter Page. with custom css components",
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
    slug: "events",
  },
  {
    image: weatherwave,
    title: "Weatherwave",
    smallDescription:
      "WeatherWave is an AI weather tool that uses RapidAPI to show live broadcasts.",
    description: [
      {
        content:
          "Utilizing RapidAPI, this powerful AI Weather App can generate custom weather broadcasts for city from all diverse locations",
      },
      {
        content:
          "In my project, I utilized NextJS, a JavaScript library for building user interfaces, along with Typescript and TailwindCSS, a utility-first CSS framework for easy styling of web pages, and RapidAPI, a marketplace enabling access to a variety of AI services.",
      },
    ],
    techs: [
      {
        image: typescript,
        name: "Typescript",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
      {
        image: nextjs,
        name: "Next.js",
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
    code: "https://github.com/RJohnPaul/WeatherWave",
    visit: "https://tinyurl.com/weatherwave",
    slug: "weatherwave",
  },
  {
    image: bootstrapstart,
    title: "Bootstrap Starter",
    smallDescription:
      "Simple Bootstrap Starter with custom css components for beginners.",
    description: [
      {
        content:
          "A Simple Bootstrap Starter page for beginners to kickstart Bootstrap framework or is looking for a template.",
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
        image: bootstrap,
        name: "Bootstrap",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
    ],
    code: "https://github.com/RJohnPaul/Bootstrap_Startup_Template",
    visit: "https://event-page-starter.vercel.app/",
    slug: "bootstrap-starter",
  },
  {
    image: buildme,
    title: "BuildMe",
    smallDescription:
      "Simple Bootstrap Starter Page with custom css components useful for beginners.",
    description: [
      {
        content:
          "A Simple Bootstrap Starter page for beginners to kickstart Bootstrap framework or is looking for a template to work or develop on.",
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
        image: bootstrap,
        name: "Bootstrap",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
    ],
    code: "https://github.com/RJohnPaul/Buildme",
    visit: "https://buildme.vercel.app/",
    slug: "buildme",
  },
  
];

export { projects };
