import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-center h-64">
        <img
          width={128}
          height={128}
          alt="profile"
          src="https://avatars.githubusercontent.com/u/84656786?v=4"
          className="self-center rounded-full"
        />
      </header>
      <main className="flex flex-col p-3 mx-auto h-max max-w-screen-lg gap-12">
        <h1 className="m-auto text-4xl font-bold text-center text-gray-500">
          I ❤️{" "}
          <a
            href="https://neovim.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neovim!
          </a>
        </h1>
        <div className="flex flex-col gap-8">
          <NextLink
            href="/about"
            className="m-auto text-2xl font-bold text-center text-gray-500 transition-all hover:underline"
          >
            About Me {"->"}
          </NextLink>
          <NextLink
            href="/playground"
            className="m-auto text-2xl font-bold text-center text-gray-500 transition-all hover:underline"
          >
            My Playground {"->"}
          </NextLink>
        </div>
      </main>
    </>
  );
}
