import { Metadata } from "next";

import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { FormComponent } from "@/components/elements/FormComponent";
import { Socials } from "@/components/elements/Socials";
import { AnimateEnter } from "@/components/elements/AnimateEnter";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Feel free to get in touch, and we'll discuss how we can collaborate.",
};

const ContactPage = () => {
  return (
    <AnimateEnter className="max-w-[854px] space-y-12 max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section className="space-y-6">
        <Title variant="title">Contact</Title>
        <Typography className="leading-relaxed">
          <span className="text-primary/80">
            Feel free to get in touch
          </span>{" "}
          and we'll discuss how we can collaborate.
        </Typography>
        <div>
          <Title variant="title" size="xl">
            My Social Media
          </Title>
          <Socials />
        </div>
      </section>
      <section className="space-y-6">
        <div className="space-y-3">
          <Title variant="title" size="xl">
            Send an Email, Like the Good Old Days
          </Title>
          <Typography className="leading-relaxed">
            If my work has caught your interest or if you would like to provide feedback about this website,{" "}
            <span className="text-primary/80">
              I'm open to exchanging ideas
            </span>
            .
          </Typography>
        </div>
        <FormComponent />
      </section>
    </AnimateEnter>
  );
};

export default ContactPage;
