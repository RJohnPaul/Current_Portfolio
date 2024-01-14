import { Typography } from "@/components/elements/Typography";
import { Clock } from "@/components/elements/Clock";
import { CommandMenuButton } from "@/components/command/components/CommandMenuButton";

const SidebarFooter = () => {
  return (
    <div className="hidden items-center justify-between gap-2 lg:flex">
      <Typography
        variant="muted"
        className="text-xs font-normal text-neutral-400"
      >
        © {new Date().getFullYear()} —{" "}
        <a
          href="https://github.com/RJohnPaul"
          target="_blank"
          rel="noopener noreferrer"
          className="duration-300 hover:text-primary/70"
        >
          John Paul
        </a>
      </Typography>
      <div className="flex items-center gap-1">
        <CommandMenuButton />
        <Clock />
      </div>
    </div>
  );
};

export { SidebarFooter };
