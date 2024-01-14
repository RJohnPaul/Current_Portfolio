"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

import { useHooks } from "@/contexts/Provider";

import {
  Code2,
  Github,
  Home,
  Instagram,
  LinkIcon,
  Linkedin,
  MessageCircle,
  LayoutGrid,
  User,
} from "lucide-react";

import toast from "react-hot-toast";
import { ToastMessage } from "../elements/Toast";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command/components/CommandMenuComponents";

type Groups = Array<{
  heading: string;
  actions: Array<{
    name: string;
    icon: JSX.Element;
    onSelect: () => void | Promise<void | boolean>;
  }>;
}>;

const CommandMenu = () => {
  const { showCommandMenu, setShowCommandMenu } = useHooks();

  const router = useRouter();

  const openLink = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  const forwardToRoute = (route: string) => {
    router.push(route);
    setShowCommandMenu(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommandMenu((prevState) => !prevState);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setShowCommandMenu]);

  const groups: Groups = [
    {
      heading: "Navigation",
      actions: [
        {
          name: "Home",
          icon: <Home />,
          onSelect: () => forwardToRoute("/"),
        },
        {
          name: "About",
          icon: <User />,
          onSelect: () => forwardToRoute("/about"),
        },
        {
          name: "Projects",
          icon: <LayoutGrid />,
          onSelect: () => forwardToRoute("/projects"),
        },
        {
          name: "Contact",
          icon: <MessageCircle />,
          onSelect: () => forwardToRoute("/contact"),
        },
      ],
    },
    {
      heading: "Socials",
      actions: [
        {
          name: "GitHub",
          icon: <Github />,
          onSelect: () => openLink("https://github.com/RJohnPaul"),
        },
        {
          name: "LinkedIn",
          icon: <Linkedin />,
          onSelect: () => openLink("https://www.linkedin.com/in/john-paul-572496278/"),
        },
        {
          name: "Instagram",
          icon: <Instagram />,
          onSelect: () => openLink("https://instagram.com/__jp__fr"),
        },
      ],
    },
    {
      heading: "Sugestões",
      actions: [
        {
          name: "Copy Link",
          icon: <LinkIcon />,
          onSelect: async () => {
            setShowCommandMenu(false);

            try {
              await navigator.clipboard.writeText(window.location.href);
              toast.success(
                <ToastMessage
                  title="Copied"
                  message="Link copied Successfully."
                />,
              );
            } catch {
              toast.error(
                <ToastMessage
                  title="Não copiado"
                  message="Erro ao copiar link."
                />,
              );
            }
          },
        },
        {
          name: "Source code",
          icon: <Code2 />,
          onSelect: () =>
            openLink("https://github.com/guhrodriguess/guhrodrigues.com"),
        },
      ],
    },
  ];

  return (
    <CommandDialog open={showCommandMenu} onOpenChange={setShowCommandMenu}>
      <CommandInput placeholder="Search.." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        {groups.map((group) => (
          <CommandGroup key={group.heading} heading={group.heading}>
            {group.actions.map((action) => (
              <CommandItem key={action.name} onSelect={action.onSelect}>
                {action.icon}
                {action.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

export { CommandMenu };
