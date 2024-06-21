import {Github, Linkedin, Instagram} from "lucide-react";

type Socials = Array<{
  href: string;
  name?: string;
  icon?: JSX.Element;
}>;

export const socials: Socials = [
  {
    href: "https://github.com/RJohnPaul",
    name: "GitHub",
    icon: <Github size={16} />,
  },
  {
    href: "https://www.linkedin.com/in/john-paul-572496278/",
    name: "LinkedIn",
    icon: <Linkedin size={16} />,
  },
  {
    href: "https://www.instagram.com/__jp__fr",
    name: "Instagram",
    icon: <Instagram size={16} />,
  },
];
