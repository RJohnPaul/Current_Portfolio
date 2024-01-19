import { Metadata } from "next";
import Link from "next/link";

import { MoveLeft } from "lucide-react";

import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { Button } from "@/components/elements/Button";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page not found.",
};

const NotFoundPage = () => {
  return (
    <main className="flex max-w-[854px] items-center justify-center py-8 lg:w-4/5 lg:py-0">
      <section className="flex flex-col items-center justify-center p-8">
        <div className="flex flex-col gap-4 text-center">
          <Title variant="title">Page Ain't Pagin</Title>
          <Typography>
            Basically the basic be missing.
          </Typography>
          <div className="flex items-center justify-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="group">
                <MoveLeft
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                  size={20}
                />
                back
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
