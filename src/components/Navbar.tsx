import links from "@/lib/links";
import NextLink from "next/link";
import { GitHubIcon } from "./svg/GitHubIcon";
import { TwitterIcon } from "./svg/TwitterIcon";

export const Navbar = () => (
  <nav className="sticky z-10 flex items-center justify-between w-11/12 p-2 mx-auto bg-transparent border-2 rounded-full text-amber-500 border-amber-500 backdrop-blur-lg top-2 shadow-sm">
    <div className="flex items-center ml-4">
      <NextLink href="/" className="text-xl font-semibold tracking-tight">
        OJII3
      </NextLink>
    </div>
    <div className="flex items-center justify-center mr-4">
      <a
        href={links.github}
        className="flex p-3 rounded-full hover:bg-amber-400 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon size={24} />
      </a>
      <a
        href={links.twitter}
        className="flex p-3 rounded-full hover:bg-amber-400 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon size={24} />
      </a>
    </div>
  </nav>
);
