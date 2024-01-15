import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import { Provider } from "@/contexts/Provider";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { CommandMenu } from "@/components/command";
import { Sidebar } from "@/components/sidebar";
import { Toast } from "@/components/elements/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-default",
});

const calsans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  authors: [{ name: "John Paul", url: "https://john-portfolio.vercel.app" }],
  category: "developer",
  creator: "John Paul",
  title: "John Paul",
  description:
    "Creating digital experiences that perfectly combine elegant aesthetics with exceptional functionality. Minhao is transforming code into incredible experiences, ensuring that each project tells a unique and immersive story on the web.",
  icons: {
    apple: "/favicon.svg",
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Gustavo Rodrigues",
    "guhrodrigues.com",
    "Technology",
    "Desenvolvedor Web",
    "Desenvolvedor Front-end",
    "Desenvolvedor FullStack",
    "Web Developer",
    "Front-end Developer",
    "FullStack Developer",
    "Frontend",
    "FullStack",
    "Developer",
    "Software",
    "São Paulo",
    "Design",
    "Brazil",
    "Vercel",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Resend",
    "Radix UI",
  ],
  openGraph: {
    description:
      "Criando experiências digitais que combinem perfeitamente a estética elegante com a funcionalidade excepcional. Minha paixão é transformar código em experiências incríveis, garantindo que cada projeto conte uma história única e envolvente na web.",
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://i.imgur.com/YyeR5Mn.png",
        alt: "Gustavo Rodrigues",
      },
    ],
    locale: "pt-BR",
    title: "John Paul – Portfolio",
    type: "website",
    url: "https://guhrodrigues.com",
  },
  publisher: "Gustavo Rodrigues",
  twitter: {
    card: "summary_large_image",
    site: "@guhrodrrigues",
    title: "John Paul – Portfolio",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-poppins outline-none",
          poppins.variable,
          calsans.variable,
        )}
      >
        <AnimateEnter className="mx-auto flex max-w-6xl flex-col px-8 lg:flex-row lg:gap-10 lg:py-24">
          <Provider>
            <CommandMenu />
            <Sidebar />
            {children}
          </Provider>
        </AnimateEnter>
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
