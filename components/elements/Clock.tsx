"use client";

import { useState, useRef, useEffect } from "react";

import Lottie from "lottie-react";

import clockIcon from "@/assets/icons/clock.json";

import { Tooltip } from "./Tooltip";

const Clock = () => {
  const [date, setDate] = useState<Date>(new Date());
  const clockRef = useRef<any>();

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const hour = date.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <Tooltip text={`${hour} GMT-4:30`}>
      <Lottie
        lottieRef={clockRef}
        animationData={clockIcon}
        style={{ width: 20, height: 20 }}
        autoplay={true}
        loop={true}
      />
    </Tooltip>
  );
};

export { Clock };
