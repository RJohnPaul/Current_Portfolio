"use client";

import { useRef } from "react";

import Lottie from "lottie-react";

import emailIcon from "@/assets/icons/email.json";

import { Button } from "./Button";

type SendButtonProps = {
  submitting: boolean;
};

const SendButton = (props: SendButtonProps) => {
  const emailRef = useRef<any>();

  const { submitting } = props;

  return (
    <Button
      type="submit"
      disabled={submitting}
      className="disabled:bg-primary/70"
    >
      {submitting ? (
        <Lottie
          lottieRef={emailRef}
          animationData={emailIcon}
          style={{ width: 20, height: 20 }}
          autoplay={true}
          loop={true}
        />
      ) : (
        <span>Send</span>
      )}
    </Button>
  );
};

export { SendButton };
