// Icons
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { BsFillTriangleFill } from "react-icons/bs";

// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale-subtle.css";

// Footer
const Footer = () => {
  const socials = [
    {
      id: 1,
      href: "https://wa.me/5511986319802",
      name: "WhatsApp",
      icon: <FaWhatsapp />,
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/guhrodrigues/",
      name: "LinkedIn",
      icon: <FiLinkedin />,
    },
    {
      id: 3,
      href: "https://github.com/projects-gustavo",
      name: "Github",
      icon: <FiGithub />,
    },
    {
      id: 4,
      href: "https://www.instagram.com/gustavinrm/",
      name: "Instagram",
      icon: <FiInstagram />,
    },
  ];

  return (
    <footer className="bg-primary p-12 sm:mt-36 md:mt-96 lg:mt-52 xl:mt-36 2xl:mt-56">
      <div className="flex items-center justify-center mb-3">
        {socials.map(({ id, href, name, icon }) => (
          <nav key={id} className="flex items-center">
            <ul className="px-2 bg-primary">
              <Tippy
                content={<span>{name}</span>}
                animation="scale-subtle"
                inertia={true}
                theme="light"
              >
                <a
                  href={href}
                  className="block p-2 rounded-xl text-secondary"
                  target="_blank"
                >
                  <div className="scale-[1.40]">
                    <button>{icon}</button>
                  </div>
                </a>
              </Tippy>
            </ul>
          </nav>
        ))}
      </div>
      <h1 className="font-signature text-secondary text-center text-5xl p-4">
        Gustavo
      </h1>
      <p className="text-secondary flex justify-center items-center text-sm gap-2.5 font-medium mt-3">
        Distribuído por:{" "}
        <a href="https://vercel.com/" target="_blank">
          <span className="flex items-center gap-1 bg-secondary text-primary font-semibold text-sm py-1 px-2 rounded-md hover:bg-blue-900 hover:text-secondary transition-all">
            <BsFillTriangleFill size={12} />
            Vercel
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
