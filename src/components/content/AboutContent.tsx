import author from "@/assets/images/author.jpeg";

import { Biography } from "@/components/utils/Biography";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function AboutContent() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-title">Sobre mim</h1>
      </div>
      <div className="flex sm:flex-col lg:flex-row justify-between gap-16">
        <figure className="lg:order-2">
          <img
            src={author}
            loading="lazy"
            className="rounded-lg w-[350px] lg:w-[700px]"
            alt="Gustavo"
          />
        </figure>
        <div className="flex items-start flex-col gap-4 px-1 lg:px-0">
          <Biography />

          <DownloadButton />
        </div>
      </div>
    </>
  );
}
