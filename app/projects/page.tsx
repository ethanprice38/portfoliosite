import MyButton from "@/components/MyButton";
import Image from "next/image";

export default function Projects() {
  return (
    <main
      className={`relative bg-gradient-to-b from-[#0a2911] to-[#000000] flex items-center flex-col mx-auto
    sm:px-10 min-h-screen overflow-y-scroll`}
    >
      <div className="max-w-full">
        <h1 className="text-center text-white tracking-tight font-mono font-semibold text-5xl mt-10">
          Ethan&#39;s Projects
        </h1>
      </div>

      <hr className="border-t-1 border-white w-full mt-5" />

      <div className="w-full flex justify-between items-start mt-5 px-5">
        <div className="flex items-center space-x-4">
          <Image
            src="/behavioristlogo_big_highres_white.png"
            alt="Behaviorist Logo"
            width="80"
            height="60"
            className="object-cover"
          ></Image>
          <h2 className="text-white font-mono font-extrabold text-xl">
            Behaviorist
          </h2>
        </div>

        <div className="text-white font-mono mt-5">
          <p className="text-sm">January 2025 - Present</p>
        </div>
      </div>
      <div className="mt-3 px-7">
        <p className="text-gray-300 font-mono">
          Behaviorist is a full-stack, cross-platform app designed to enable
          users to apply the science of behavior analysis to change behaviors
          and build habits. This is currently in progress and is projected to
          fully release by March of 2025. Behaviorist is being built with{" "}
          <b>TypeScript</b>, <b>TailwindCSS</b>, <b>React Native</b>,{" "}
          <b>ExpressJS</b>, and a <b>PostgreSQL</b> database.
        </p>
      </div>

      <hr className="border-t-1 border-white w-full mt-5" />

      <div className="w-full flex justify-between items-start mt-5 px-5">
        <div>
          <h2 className="text-white font-mono font-extrabold text-xl ml-2 mt-3">
            Guitar Fretboard Analyzer
          </h2>
        </div>

        <div className="text-white font-mono mt-5">
          <p className="text-sm">June 2024 - July 2024, December 2024</p>
        </div>
      </div>
      <div className="mt-2 px-7">
        <a
          href="https://guitarchordanalyzer-lq9h.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-mono tracking-tight underline hover:text-blue-300"
        >
          https://guitarchordanalyzer-lq9h.onrender.com/
        </a>

        <p className="text-gray-300 font-mono">
          Guitar Chord Analyzer is a full-stack web application made to help
          users learn guitar and write songs through automated chord
          recognition. Guitar Fretboard Analyzer was built with <b>ReactJS</b>{" "}
          and <b>Flask</b>.
        </p>
      </div>

      <div className="mt-5 justify-center items-center flex flex-row space-x-10">
        <MyButton text="About Me" redirectValue="aboutme" isDownload={false} />
        <MyButton text="Back to Home" redirectValue="/" isDownload={false} />
        <MyButton
          text="Resume"
          redirectValue="/PriceEthan_Software_Engineering_Intern_Resume.pdf"
          isDownload={true}
        />
      </div>
    </main>
  );
}
