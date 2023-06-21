import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import classNames from "classnames";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OJII3",
  description: "Home of OJII3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="min-h-screen">
      <body className={classNames(inter.className, "min-h-full")}>
        {children}
      </body>
    </html>
  );
}
