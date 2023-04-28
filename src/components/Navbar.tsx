import links from "@/lib/links";
import { GitHubIcon } from "./svg/GitHubIcon";
import { TwitterIcon } from "./svg/TwitterIcon";
export const Navbar = () => (
  <nav className="flex items-center justify-between p-2 m-2 rounded-full shadow-sm bg-amber-500">
    <div className="flex items-center ml-4 text-white">
      <span className="text-xl font-semibold tracking-tight">
        OJII3&apos;s Homepage
      </span>
    </div>
    <div className="flex items-center justify-center mr-4">
      <a
        href={links.github}
        className="flex p-3 text-white rounded-full hover:bg-amber-400 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon size={24} />
      </a>
      <a
        href={links.twitter}
        className="flex p-3 text-white rounded-full hover:bg-amber-400 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon size={24} />
      </a>
    </div>
  </nav>
);
