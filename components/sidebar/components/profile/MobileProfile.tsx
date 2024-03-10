import Link from "next/link";

import author from "@/assets/images/author.png";

import { Image } from "@/components/elements/Image";
import { MobileButton } from "@/components/sidebar/components/MobileButton";
import { CommandMenuButton } from "@/components/command/components/CommandMenuButton";

const MobileProfile = () => {
  return (
    <>
      <Link href="/">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image src={author} alt="Gustavo" />
        </div>
      </Link>
      <div className="flex items-center gap-1.5">
        <CommandMenuButton iconClassName="w-5 h-5" />
        <MobileButton />
      </div>
    </>
  );
};

export { MobileProfile };
