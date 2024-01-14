import { User2, Braces, Mail } from "lucide-react";

type NavLinks = Array<{
  path: string;
  name: string;
  icon: JSX.Element;
}>;

const navLinks: NavLinks = [
  {
    path: "/about",
    name: "About",
    icon: <User2 size={16} />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <Braces size={16} />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <Mail size={16} />,
  },
];

export { navLinks };
