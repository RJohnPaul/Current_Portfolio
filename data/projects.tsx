import { StaticImageData } from "next/image";
import xtractai from "@/assets/images/projects/xtractai.png";
import portfolio from "@/assets/images/projects/portfolio.png";
import events from "@/assets/images/projects/events.png";
import qwick from "@/assets/images/projects/qwick.png";
import helloangular from "@/assets/images/projects/helloangular.png";
import weatherwave from "@/assets/images/projects/weatherwave.png";
import bootstrapstart from "@/assets/images/projects/bootstrapstart.png";
import buildme from "@/assets/images/projects/Buildme.png";
import remarkit from "@/assets/images/projects/remarkit.png";
import qrgenpic from "@/assets/images/projects/qrgenpic.png";
import gatsbyportfolio from "@/assets/images/projects/gatsbyportfolio.png";
import gatsbystarter from "@/assets/images/projects/gatsbystarter.png";
import basedetect from "@/assets/images/projects/basedetect.png";
import anyai from "@/assets/images/projects/anyai.png";
import helloastro from "@/assets/images/projects/helloastro.png";
import companybootstrap from "@/assets/images/projects/companybootstrap.png";
import srmcrypt from "@/assets/images/projects/srmcrypt.png";
import dashboard from "@/assets/images/projects/dashboard.png";
import younotes from "@/assets/images/projects/younotes.png";
import hellosvelte from "@/assets/images/projects/hellosvelte.png";
import todolist from "@/assets/images/projects/todolist.png";
import tulip from "@/assets/images/projects/tulip.png";

import threejs from "@/assets/images/skills/threejs.svg";
import netlify from "@/assets/images/skills/netlify.svg";
import metamask from "@/assets/images/skills/metamask.svg";
import turborepo from "@/assets/images/skills/turborepo.svg";
import rapidapi from "@/assets/images/skills/rapidapi.svg";
import astro from "@/assets/images/skills/astro.svg";
import angular from "@/assets/images/skills/angular.svg";
import gemini from "@/assets/images/skills/gemini.svg";
import remark from "@/assets/images/skills/remark.svg";
import python from "@/assets/images/skills/python.svg";
import vision from "@/assets/images/skills/vision.svg";
import bootstrap from "@/assets/images/skills/bootstrap.svg";
import html from "@/assets/images/skills/html.svg";
import sass from "@/assets/images/skills/sass.svg";
import streamlit from "@/assets/images/skills/streamlit.svg";
import supabase from "@/assets/images/skills/supabase.svg";
import svelte from "@/assets/images/skills/svelte.svg";
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
import materialui from "@/assets/images/skills/materialui.svg";
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
    image: younotes,
    title: "YouNotes",
    smallDescription: "Github's First Vercel Deployed Opensource Youtube to Notes Converter",
    description: [
      {
        content:
          "YouNotes is an AI-powered tool that automatically generates concise, well-structured notes from YouTube videos and text transcripts. Transform hours of content into digestible summaries with just a click!",
      },
      {
        content:
          "It's powered by Supabase auth and Google Gemni API for for the note by AI and also uses Next.js for the frontend and tailwind for the styling.",
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
        image: supabase,
        name: "Supabase",
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
        image: shadcn,
        name: "Shadcn",
      },
      {
        image: rapidapi,
        name: "RapidAPI",
      },
    ],
    code: "https://github.com/RJohnPaul/YouNotes",
    visit: "https://you-notes-rouge.vercel.app/",
    slug: "younotes",
  },
  {
    image: dashboard,
    title: "Clinic-Dashboard",
    smallDescription: "A Dashboard build for a company with advanced features like database,authentication,etc",
    description: [
      {
        content:
          "A complex website made for a company which contains several styled components and also uses vitejs for routing and mui for styling. and also uses supabase for authentication.",
      },
      {
        content:
          "Supabase is used for double authentication and also for storing data in 3 tables in the backend.This project is a dashboard for a company which contains several styled components and also uses react kendopdf for printing mui designed recipts. and also uses vitejs for routing and mui for styling. and also uses supabase for authentication",
      },

    ],
    techs: [
      {
        image: vite,
        name: "Vite.js",
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
        image: materialui,
        name: "MUI",
      },
      {
        image: supabase,
        name: "Supabase",
      },
    ],

    visit: "https://vidyacliniccentre.vercel.app/",
    slug: "RehabClinicDashboard",
  },
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
    image: anyai,
    title: "AnyAI",
    smallDescription:
      "AnyAI is a streamlit powered versatile AI tool that integrates Google Gemini and Google Vision API",
    description: [
      {
        content:
          "The AI Content Generator component of AnyAI uses the Google Gemini API to create content for a wide range of platforms. This includes LinkedIn posts, blog posts, Instagram posts, tweets, product descriptions, emails, ad copy, taglines, video scripts, podcast scripts, SEO content, README files, documentation, presentations, social media posts, and articles.",
      },
      {
        content:
          "The Image Classifier component of AnyAI utilizes Google Vision to classify images based on a given query. Users can upload images or provide image URLs for classification.",
      },
    ],
    techs: [
      {
        image: streamlit,
        name: "Streamlit",
      },
      {
        image: python,
        name: "Python",
      },
      {
        image: css,
        name: "CSS",
      },
      {
        image: gemini,
        name: "Google-Gemini-API",
      },
      {
        image: vision,
        name: "Google-Vision-API",
      },
    ],
    code: "https://github.com/RJohnPaul/AnyAI",
    visit: "https://any-ai.streamlit.app/",
    slug: "anyai",
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
    image: qrgenpic,
    title: "QRGen",
    smallDescription: "A v1-Iteration of a Next.js Powered QR-Generator along with Shadcn and RapidAPI",
    description: [
      {
        content:
          "QRGen is a web application that allows users to generate custom QR codes for various purposes such as websites, products, contacts, and events.",
      },
      {
        content:
          "It provides an easy-to-use interface for creating QR codes with customizable styles and settings. Users can generate QR codes for different types of data, including URLs, text, phone numbers, and email addresses. The app also supports downloading QR codes as PNG",
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
        image: shadcn,
        name: "Shadcn",
      },
      {
        image: rapidapi,
        name: "RapidAPI",
      },
    ],
    code: "https://github.com/RJohnPaul/QRGen",
    visit: "https://qrgen-pi.vercel.app/",
    slug: "qrgen",
  },
  {
    image: remarkit,
    title: "Markie",
    smallDescription:
      "A Quick to use - Friendly Text to Markdown Preview Web App powered by Nextjs , TailwindCSS and more !.",
    description: [
      {
        content:
          "Markie is a versatile Markdown editor built with Next.js. It provides a user-friendly interface for creating and editing Markdown documents, with features like syntax highlighting, live preview, and more.",
      },
      {
        content:
          "In my project, I utilized NextJS along with remarkjs's markdown, for building a powerful web app along with TailwindCSS,for proper markdown conversions as well as a beautiful UI , I have also integrated react hot toast to further decrease any confusions.",
      },
    ],
    techs: [
      {
        image: react,
        name: "React",
      },
      {
        image: nextjs,
        name: "Next.js",
      },
      {
        image: tailwind,
        name: "TailwindCSS",
      },
      {
        image: javascript,
        name: "Javascript",
      },
      {
        image: remark,
        name: "Remark.js",
      },
    ],
    code: "https://github.com/RJohnPaul/Markie",
    visit: "https://markie-gdsc.vercel.app/",
    slug: "markie",
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

];

export { projects };
