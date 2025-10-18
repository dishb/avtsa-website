import Link from "next/link";

export default function Page() {
  return (
    <div className="relative h-screen p-6 bg-gradient-to-b from-amber-500 to-purple-900">
      <div className="relative h-full rounded-xl overflow-hidden bg-[url(/photos/4.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 opacity-80 bg-[#2A1044] md:bg-radial-[at_75%_50%] md:from-[#2A1044]/10 md:to-[#2A1044]/90 to-50%" />
        <div className="relative z-10 h-full w-full flex justify-evenly items-center">
          <div className="max-w-[90%] md:max-w-[40%]">
            <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold">
              <span className="pb-2 bg-gradient-to-b from-amber-500 from-40% to-purple-900 text-transparent bg-clip-text inline-block transition-all duration-500 ease-in-out transform">
                404
              </span>{" "}
              Requested page not found.
            </h1>

            <h2 className="mt-12 text-3xl text-center md:text-left text-purple-300">
              Try going back{" "}
              <Link
                href="/"
                className="text-white hover:underline decoration-amber-500 decoration-3"
              >
                home
              </Link>
              ?
            </h2>
          </div>

          <div className="hidden md:block min-w-[40%]" />
        </div>
      </div>
    </div>
  );
}
