import { StaticImageData } from "next/image";

import xtractai from "@/assets/images/projects/xtractai.png";
import portfolio from "@/assets/images/projects/portfolio.png";
import qwick from "@/assets/images/projects/qwick.png";
import events from "@/assets/images/projects/events.png";
import helloangular from "@/assets/images/projects/helloangular.png";
import weatherwave from "@/assets/images/projects/weatherwave.png";
import bootstrapstart from "@/assets/images/projects/bootstrapstart.png";
import buildme from "@/assets/images/projects/Buildme.png";
import gatsbyportfolio from "@/assets/images/projects/gatsbyportfolio.png";
import gatsbystarter from "@/assets/images/projects/gatsbystarter.png";
import basedetect from "@/assets/images/projects/basedetect.png";
import srmcrypt from "@/assets/images/projects/srmcrypt.png";
import todolist from "@/assets/images/projects/todolist.png";
import tulip from "@/assets/images/projects/tulip.png";

import threejs from "@/assets/images/skills/threejs.svg";
import netlify from "@/assets/images/skills/netlify.svg";
import metamask from "@/assets/images/skills/metamask.svg";
import rapidapi from "@/assets/images/skills/rapidapi.svg";
import angular from "@/assets/images/skills/angular.svg";
import bootstrap from "@/assets/images/skills/bootstrap.svg";
import html from "@/assets/images/skills/html.svg";
import sass from "@/assets/images/skills/sass.svg";
import expo from "@/assets/images/skills/expo.svg";
import babel from "@/assets/images/skills/babel.svg";
import css from "@/assets/images/skills/css.svg";
import nextjs from "@/assets/images/skills/nextjs.svg";
import radix from "@/assets/images/skills/radix.svg";
import vite from "@/assets/images/skills/vite.svg";
import gatsby from "@/assets/images/skills/gatsby.svg";
import shadcn from "@/assets/images/skills/shadcn.svg";
import mongo from "@/assets/images/skills/mongo.svg";
import nextauth from "@/assets/images/skills/next-auth.svg";
import openai from "@/assets/images/skills/openai.svg";
import react from "@/assets/images/skills/react.svg";
import contentful from "@/assets/images/skills/contentful.svg";
import typescript from "@/assets/images/skills/typescript.svg";
import javascript from "@/assets/images/skills/javascript.svg";
import styled_components from "@/assets/images/skills/styled-components.svg";
import tailwind from "@/assets/images/skills/tailwindcss.svg";
import framer from "@/assets/images/skills/framer.svg";
import firebase from "@/assets/images/skills/firebase.svg";
import kotlin from "@/assets/images/skills/kotlin.svg";
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
    code: "https://github.com/RJohnPaul/My_Portfolio",
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
    image: srmcrypt,
    title: "SRMCyrpt",
    smallDescription:
      "SRMCyrpt is an crypto wallet that uses metamaskAPI to integrate with blockchain which was done for a hackathon.",
    description: [
      {
        content:
          "Utilizing MetaMaskAPI, this powerful Web App can be used for crypto transactions in the most seemless way possible.",
      },
      {
        content:
          "In my project, I utilized NextJS, a JavaScript library for building user interfaces, along with TailwindCSS, a utility-first CSS framework for easy styling of web pages, and MetaMaskAPI, a tool enabling access to a variety of crypto services this project was inspired by one of javascript mastery's projects.",
      },
    ],
    techs: [
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
        image: metamask,
        name: "MetaMask",
      },
    ],
    code: "https://github.com/RJohnPaul/crypto-wallet-app",
    visit: "https://crypto-wallet-app-ten.vercel.app/",
    slug: "srmcrypt",
  },
  {
    image: todolist,
    title: "TodolistApp",
    smallDescription:
      "A Landing page for a todo list app which was done using simple css and react native and expo.",
    description: [
      {
        content:
          "Utilizing this app is a simple todo list app which can be used to add and delete tasks and also to mark them as done and also to delete them. and also to edit them. and also to add a description to",
      },
      {
        content:
          "In my project, I utilized ReactNative along with expo, a cross-platform library for building both in ios and android, along with Vanilla CSS,for easy styling of web pages, and Some logic for updating and deleting tasks.",
      },
    ],
    techs: [
      {
        image: react,
        name: "ReactNative",
      },
      {
        image: babel,
        name: "Babel",
      },
      {
        image: css,
        name: "CSS",
      },
      {
        image: expo,
        name: "Expo",
      },
    ],
    code: "https://github.com/RJohnPaul/Todolist_app",
    visit: "http://tinyurl.com/todolistapplanding",
    slug: "todolistapp",
  },
  {
    image: helloangular,
    title: "Hello-Angular",
    smallDescription: "A starter angular website build for beginners with simple styling using tailwindcss etc",
    description: [
      {
        content:
          "A starter angular website which contains just a few components and also uses gatsby for routing and tailwind css for styling.",
      },
      {
        content:
          "Angular is a popular framework for building web applications, developed and maintained by Google. It's widely used in web development for various reasons , Angular follows a component-based architecture where the UI is composed of reusable and encapsulated components",
      },
    
    ],
    techs: [
      {
        image: angular,
        name: "Angular",  
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
        image: css,
        name: "CSS",
      },
      {
        image: html,
        name: "HTML",
      },
    ],
   
    code:"https://github.com/RJohnPaul/Hello-Angular",
    visit: "https://hello-angular-drab.vercel.app/",
    slug: "hello-angular",
  },
  {
    image: gatsbystarter,
    title: "Gatsby-Blog",
    smallDescription: "A Starter Blog website build for beginners with advanced features like contentful,tailwindcss etc",
    description: [
      {
        content:
          "A complex Blog website which contains several styled components and also uses gatsby for routing and tailwind css for styling.",
      },
      {
        content:
          "Contentful is used for storing data in the backend. and framer motion is used for animations. and also uses gatsby-image for image optimization. and also uses gatsby-plugin-sass for styling. and also uses gatsby-plugin-google-fonts for fonts.",
      },
    
    ],
    techs: [
      {
        image: gatsby,
        name: "Gatsby",
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
        image: sass,
        name: "SCSS",
      },
      {
        image: framer,
        name: "Framer Motion",
      },
      {
        image: contentful,
        name: "Contentful",
      },
    ],
   
    code:"https://github.com/RJohnPaul/Gatsby-Blog-Starter",
    visit: "https://gatsby-blog-spanish.vercel.app/",
    slug: "gatsby-blog",
  },
  {
    image: gatsbyportfolio,
    title: "Gatsby-Portfolio",
    smallDescription: "A Starter Portfolio website build for beginners with advanced features. It is fully customizable",
    description: [
      {
        content:
          "A complex Portfolio website powered by Gatsby which contains several styled components and also uses gatsby for routing and tailwind css for styling.",
      },
      {
        content:
          "This Portfolio contains several sections like intro,about,projects,contact,etc. and also uses gatsby-image for image optimization. and also uses gatsby-plugin-sass for styling. and also uses gatsby-plugin-google-fonts for fonts. and also uses gatsby-pl and all of the main changes can be done in markup language which is the most easiest way of doing so",
      },
    
    ],
    techs: [
      {
        image: gatsby,
        name: "Gatsby",
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
        image: css,
        name: "CSS",
      },
      {
        image: sass,
        name: "SCSS",
      },
      {
        image: netlify,
        name: "Netflify",
      },
      
    ],
   
    code:"https://github.com/RJohnPaul/Gatsby-Portfolio",
    visit: "https://chic-sawine-d9d12e.netlify.app/",
    slug: "gatsby-portfolio",
  },
  {
    image: basedetect,
    title: "Base-Detect",
    smallDescription:
      "Basedetect is an Android app that uses a AI/ML Model to diffrentiate foods.",
    description: [
      {
        content:
          "This App is an AI/ML based app that uses a model to diffrentiate foods and also uses a camera to detect.Three Sample Images are given along with the app to test the model.",
      },
      {
        content:
          "In my project, I utilized NextJS, a JavaScript library for building user interfaces, along with Typescript and TailwindCSS, a utility-first CSS framework for easy styling of web pages and Kotlin for the app development which is a very powerful language for android development. and also uses tensorflow lite for the model. and also uses cameraX for the camera.",
      },
    ],
    techs: [
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
        image: kotlin,
        name: "Kotlin",
      },
    ],
    code: "https://github.com/RJohnPaul/food-classifier-app",
    visit: "https://base-detect.vercel.app/",
    slug: "basedetect",
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
