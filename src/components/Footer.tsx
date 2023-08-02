import { socials } from "@/data/footer";

import { Link } from "react-router-dom";

import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="max-w-5xl w-full mx-auto p-6">
            <div className="flex items-center sm:justify-center md:justify-between">
                <div className="flex gap-3">
                    <Link to="/contact" className="sm:block md:hidden">
                        <button className="flex items-center justify-center text-sm text-primary bg-gradient-to-br from-black via-black to-zinc-700 border border-zinc-700 rounded-full p-2 duration-300">
                            <Mail size={18} />
                        </button>
                    </Link>
                    {socials.map(({ id, icon, href }) => (
                        <a key={id} href={href} target="_blank">
                            <button className="flex flex-row items-center justify-center text-sm text-primary bg-gradient-to-br from-black via-black to-zinc-700 border border-zinc-700 rounded-full p-2 duration-300">
                                {icon}
                            </button>
                        </a>
                    ))}
                </div>
                <p className="sm:hidden md:block text-neutral-200 text-sm gap-2.5 font-medium">
                    {new Date().getFullYear()} © Gustavo Rodrigues
                </p>
            </div>
        </footer>
    );
}
