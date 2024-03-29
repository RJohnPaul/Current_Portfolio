import { useHooks } from "@/contexts/Provider";

import { cn } from "@/lib/utils";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

const Tooltip = (props: TooltipProps) => {
  const { isToastVisible, setIsToastVisible } = useHooks();

  const { text, children } = props;

  return (
    <div
      onMouseEnter={() => setIsToastVisible(true)}
      onMouseLeave={() => setIsToastVisible(false)}
      className="relative select-none"
    >
      <div
        className={cn(
          "absolute -bottom-9 right-0 flex w-[7.0rem] items-center justify-center rounded-lg border border-border bg-muted px-1.5 py-1 text-xs text-primary/60 duration-150",
          {
            "visible scale-100 opacity-100": isToastVisible,
            "invisible scale-50 opacity-0": !isToastVisible,
          },
        )}
      >
        <span>{text}</span>
      </div>

      {children}
    </div>
  );
};

export { Tooltip };
