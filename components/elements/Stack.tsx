"use client";

import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { stacks } from "@/data/stacks";

import { cn } from "@/lib/utils";

import { Title } from "./Title";
import { Image } from "./Image";

const Stack = () => {
  const [shuffledStack, setShuffledStack] = useState<
    Array<[string, StaticImageData]>
  >([]);

  useEffect(() => {
    const stack = Object.entries(stacks);
    const stackArray = [...stack].sort(() => Math.random() - 0.5);

    setShuffledStack(stackArray);
  }, []);

  const sliders = Array.from({ length: 2 }, (_, index) => {
    const slider = [...shuffledStack].sort(() => Math.random() - 0.5);

    return (
      <div
        key={index}
        className={cn(
          "flex w-fit animate-slide",
          index === 1 ? "direction-reverse" : "direction-normal",
        )}
      >
        {slider.map(([title, image]) => (
          <div key={title} className="mr-3 w-max">
            <div className="relative flex h-full items-center overflow-hidden rounded-lg px-3 py-2">
              <Image
                src={image}
                alt={title}
                width={32}
                height={32}
                className="z-1"
              />
              <Image
                src={image}
                alt={title}
                width={8}
                height={8}
                className="absolute inset-0 -z-[1] h-[125%] w-[125%] opacity-90 blur-xl"
              />
            </div>
          </div>
        ))}
      </div>
    );
  });

  return (
    <section className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-border/50 bg-muted p-5">
      <Title variant="title" size="xl">
        My Skills
      </Title>
      <div className="relative flex flex-col justify-start gap-y-4 overflow-hidden py-2">
        {sliders}
        <div className="pointer-events-none absolute inset-0 bg-fade-gradient" />
      </div>
      <div className="absolute right-8 top-0 h-px w-[500px] bg-gradient-to-l from-transparent via-primary/30 via-20% to-transparent" />
    </section>
  );
};

export { Stack };
