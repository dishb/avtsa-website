"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import titles from "@/data/titles";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function Page() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setAnimate(true);
      }, 500);

      return () => clearTimeout(timeout);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative h-screen p-6 bg-gradient-to-b from-amber-500 to-purple-900">
        <div className="relative h-full rounded-xl overflow-hidden bg-[url(/photos/1.png)] bg-cover bg-center">
          <div className="absolute inset-0 bg-radial-[at_75%_50%] from-[#2A1044]/10 to-[#2A1044]/90 to-50%" />
          <div className="relative z-10 h-full w-full flex justify-evenly items-center">
            <div className="max-w-[40%]">
              <h1 className="text-6xl font-bold">
                A community of Amador Valley's{" "}
                <span
                  className={`pb-2 bg-gradient-to-b from-amber-500 from-40% to-purple-900 text-transparent bg-clip-text inline-block transition-all duration-500 ease-in-out transform ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {titles[index]}
                </span>
              </h1>

              <h2 className="mt-12 text-3xl text-purple-300">
                TSA has something for <span className="italic">everyone</span>.
              </h2>
            </div>

            <div className="min-w-[40%]" />

            <button
              className="absolute bottom-3 animate-bobbing"
              onClick={() => {
                const el = document.getElementById("main-content");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ArrowDown size={46} />
            </button>
          </div>
        </div>
      </div>

      <div
        id="main-content"
        className="h-screen flex flex-col justify-center items-center0"
      >
        <div className="flex items-center justify-evenly w-full h-90">
          <div className="h-full p-2 rounded-lg bg-gradient-to-b from-amber-500 to-purple-900 hover:bg-[#2A1044]">
            <div className="w-75 h-full rounded-lg bg-background/80 flex flex-col items-center px-4 py-6">
              <h2 className="text-2xl font-bold">Build</h2>
              <p
                className={`flex flex-col justify-center w-full h-full text-lg ${ibmPlexSans.className}`}
              >
                Create your event submission. Whether it is a poster
                presentation, a speech, or a piece of software, this is your
                creativity and skill. Your time starts in early September and
                ends in March!
              </p>
            </div>
          </div>

          <div className="h-full p-2 rounded-lg bg-gradient-to-b from-amber-500 to-purple-900 hover:bg-[#2A1044]">
            <div className="w-75 h-full rounded-lg bg-background/80 flex flex-col items-center px-4 py-6">
              <h2 className="text-2xl font-bold">Compete</h2>
              <p
                className={`flex flex-col justify-center w-full h-full text-lg ${ibmPlexSans.className}`}
              >
                Compete in 40 events encompassing various topics from speech and
                debate to coding! A lot of the events team-based, but there are
                also solo events if you thrive independently.
              </p>
            </div>
          </div>

          <div className="h-full p-2 rounded-lg bg-gradient-to-b from-amber-500 to-purple-900 hover:bg-[#2A1044]">
            <div className="w-75 h-full rounded-lg bg-background/80 flex flex-col items-center px-4 py-6">
              <h2 className="text-2xl font-bold">Win</h2>
              <p
                className={`flex flex-col justify-center w-full h-full text-lg ${ibmPlexSans.className}`}
              >
                Win your chapter-wide competition to qualify for the regionals
                conference, where you compete within your state. If you win that
                too, the annual TSA Nationals Conference, in Washington D.C., is
                next!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
