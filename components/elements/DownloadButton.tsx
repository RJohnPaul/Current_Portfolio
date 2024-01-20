"use client";

import { useRef } from "react";

import Lottie from "lottie-react";
import downloadIcon from "@/assets/icons/download.json";

import toast from "react-hot-toast";

import { Button } from "@/components/elements/Button";
import { ToastMessage } from "./Toast";

const DownloadButton = () => {
  const downloadRef = useRef<any>();

  return (
    <a
      href="/John_Portfolio.pdf"
      download
      onClick={() =>
        toast.success(
          <ToastMessage
            title="Success"
            message="C.V downloaded successfully."
          />,
        )
      }
      onMouseEnter={() => downloadRef.current?.play()}
      onMouseLeave={() => downloadRef.current?.stop()}
    >
      <Button variant="dark" size="lg">
        <Lottie
          lottieRef={downloadRef}
          animationData={downloadIcon}
          style={{ width: 18, height: 18 }}
          autoplay={false}
          loop={false}
        />
        Download C.V
      </Button>
    </a>
  );
};

export { DownloadButton };