import { ProductCard } from "@/components/about/ProductCard";
import { SkillCard } from "@/components/about/SkillCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import NextLink from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="sticky w-11/12 mx-auto top-20">
        <NextLink
          href="/"
          className="flex items-center justify-center w-12 h-12 text-3xl rounded-full transition-all hover:bg-orange-300"
        >
          <div className="self-center text-center">{"<-"}</div>
        </NextLink>
      </div>
      <header className="flex items-center h-64 p-4">
        <h1 className="mx-auto my-8 text-4xl font-bold text-center text-gray-500">
          About Me
        </h1>
      </header>
      <main className="flex flex-col p-8 mx-auto gap-32 max-w-screen-lg">
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">基本情報</h2>
          <ul className="mt-4 text-gray-700">
            <li className="mx-auto text-xl list-disc list-inside marker:text-2xl">
              機械系の大学生(2022年度入学)
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">実務経験</h2>
          <ul className="mt-4 text-xl text-gray-700">
            <li className="mx-auto list-disc list-inside marker:text-2xl">
              フロントエンドインターン(2022年12月~)
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">
            主な制作物
          </h2>
          <ul className="flex flex-row mt-2 overflow-x-auto text-gray-700 sm: flex-nowrap whitespace-nowrap">
            <li>
              <ProductCard
                name="サークルのホームページ"
                image="/works/mcc-logo.svg"
                liveLink="https://www.tuatmcc.com"
                sourceLink="https://github.com/tuatmcc/homepage2.0"
              >
                <p>大学で所属するサークルのホームページを作成しました。</p>
                <p>
                  Next.js appDir
                  を使用し、マークダウンのブログシステムを実装しました。
                </p>
              </ProductCard>
            </li>
            <li>
              <ProductCard
                name="このポートフォリオ"
                image="/works/nextjs-logo.svg"
                liveLink="/"
                sourceLink="https://github.com/ojii3/ojii3"
              >
                <p>
                  Tailwind CSS を使ってみたり、View Transition API
                  を使ってみたりしました。
                </p>
              </ProductCard>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">
            趣味・スキル
          </h2>
          <div className="flex flex-wrap mt-4 text-gray-700 gap-1">
            <SkillCard name="Neovim" image="/skills/neovim-logo.png" />
            <SkillCard name="Unity" image="/skills/unity-logo.png" />
            <SkillCard name="Blender" image="/skills/blender-logo.png" />
            <SkillCard name="AtCoder" image="/skills/atcoder-logo.png" />
            <SkillCard name="ROS2" image="/skills/ros-logo.png" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
