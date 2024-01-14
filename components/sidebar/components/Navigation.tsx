import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import Lottie from "lottie-react";

import { cn } from "@/lib/utils";

import homeIcon from "@/assets/icons/home.json";
import aboutIcon from "@/assets/icons/about.json";
import projectsIcon from "@/assets/icons/projects.json";
import contactIcon from "@/assets/icons/contact.json";

const Navigation = () => {
  const homeRef = useRef<any>();
  const aboutRef = useRef<any>();
  const projectsRef = useRef<any>();
  const contactRef = useRef<any>();

  const pathname = usePathname();
  const router = useRouter();

  const actions = [
    {
      href: "/",
      ref: homeRef,
      icon: homeIcon,
      name: "Home",
      keyword: "1",
    },
    {
      href: "/about",
      ref: aboutRef,
      icon: aboutIcon,
      name: "About",
      keyword: "2",
    },
    {
      href: "/projects",
      ref: projectsRef,
      icon: projectsIcon,
      name: "Projects",
      keyword: "3",
    },
    {
      href: "/contact",
      ref: contactRef,
      icon: contactIcon,
      name: "Contact",
      keyword: "4",
    },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case "1":
          router.push("/");
          break;
        case "2":
          router.push("/about");
          break;
        case "3":
          router.push("/projects");
          break;
        case "4":
          router.push("/contact");
        default:
          break;
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [router]);

  return (
    <nav className="hidden flex-col gap-1 lg:flex">
      {actions.map(({ href, ref, icon, name, keyword }) => (
        <Link
          key={name}
          href={href}
          onMouseEnter={() => ref.current?.play()}
          onMouseLeave={() => ref.current?.stop()}
          className={cn(
            "relative flex items-center justify-between gap-2 overflow-hidden rounded-lg border border-transparent px-2.5 py-2 text-foreground shadow-md duration-300",
            {
              "cursor-default border-border/50 bg-muted text-primary/80":
                href === pathname,
              "hover:bg-neutral-900/40": href !== pathname,
            },
          )}
        >
          <div
            className={cn("absolute", {
              "right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-primary/30 via-10% to-transparent":
                href === pathname,
            })}
          />
          <div className="flex items-center gap-2">
            <Lottie
              lottieRef={ref}
              animationData={icon}
              style={{ width: 24, height: 24 }}
              autoplay={false}
              loop={false}
            />
            <span className="text-sm">{name}</span>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-md border border-border">
            <span className="text-xs">{keyword}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export { Navigation };
