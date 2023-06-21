import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-32 mt-12 border-t">
      <a href="/" className="flex items-center justify-center">
        <span className="text-sm tracking-tight text-gray-500">
          ©️OJII3 2023
        </span>
      </a>
    </footer>
  );
};
