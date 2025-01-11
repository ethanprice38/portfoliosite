import MyButton from "@/components/MyButton";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Projects() {
  return (
    <main
      className={`relative bg-gradient-to-b from-[#0a2911] to-[#000000] flex items-center flex-col mx-auto
    sm:px-10 min-h-screen overflow-y-scroll`}
    >
      <div className="max-w-full mt-10">
        <h1 className="text-center text-white tracking-tight font-mono font-semibold text-5xl">
          Ethan&#39;s Projects
        </h1>
      </div>

      <hr className="border-t-1 border-white w-full mt-5" />

      <ProjectCard
        title="Behaviorist"
        dateRange="January 2025 - Present"
        description={`
          Behaviorist is a full-stack, cross-platform app designed to enable
          users to apply the science of behavior analysis to change behaviors
          and build habits. It’s built with TypeScript, TailwindCSS, React Native,
          ExpressJS, and PostgreSQL.
        `}
        logoSrc="/behavioristlogo_big_highres_white.png"
        logoAlt="Behaviorist Logo"
      />

      <ProjectCard
        title="Guitar Fretboard Analyzer"
        dateRange="June 2024 - July 2024, December 2024"
        description={`
          Guitar Chord Analyzer is a full-stack web application that helps 
          users learn guitar and write songs through automated chord recognition. 
          It’s built with ReactJS and Flask.
        `}
        link="https://guitarchordanalyzer-lq9h.onrender.com/"
      />

      <div className="mt-5 flex flex-row space-x-10">
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
