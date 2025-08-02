import MyButton from "@/components/MyButton";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <main
      className={`relative bg-gradient-to-b from-[#260f29] to-[#0f0514] flex justify-center items-center flex-col mx-auto
      sm:px-10 min-h-screen`}
    >
      <div className="max-w-full mt-10">
        <h1 className="text-center text-white tracking-tight font-mono font-semibold text-5xl">
          Ethan&#39;s Projects
        </h1>
      </div>

      <hr className="border-t-1 border-white w-full mt-5" />
      <ProjectCard
        title="Stretch With Donna"
        dateRange="June 2025"
        description={`
          Stretch with Donna is a frontend, single page application for a Maryland In-Home Assisted Stretching business. It’s built with TypeScript, TailwindCSS, NextJS. 
          I built this app to help Donna, the owner of the business, have a more professional online presence and to help her get more clients.
          The code is available on my GitHub for those interested.
        `}
        logoSrc="/logo.png"
        logoAlt="Stretch With Donna Logo"
        link="https://www.stretchwithdonna.com"
      />
      <ProjectCard
        title="Behaviorist"
        dateRange="January 2025 - Present"
        description={`
          Behaviorist is a full-stack, cross-platform app designed to enable
          users to apply the science of behavior analysis to change behaviors
          and build habits. It’s built with TypeScript, TailwindCSS, React Native,
          ExpressJS, and PostgreSQL. I am not able to work on Behaviorist currently due to work, school, 
          and other projects I am working on, but it will be completed by the end of 2025!
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

      <div className="mt-5 px-5 py-5 flex flex-row space-x-10">
        <MyButton
          text="Learn About Me"
          redirectValue="aboutme"
          isDownload={false}
          otherClasses="bg-[#333333] hover:bg-neutral-800"
        />
        <MyButton
          text="Home"
          redirectValue="/"
          isDownload={false}
          otherClasses="bg-[#1E90FF] hover:bg-[#187bcd]"
        />
        <MyButton
          text="View Resume"
          redirectValue="/EthanPrice_Software_Engineering_Intern_Resume.pdf"
          isDownload={true}
          otherClasses="bg-[#333333] hover:bg-neutral-800"
        />
      </div>
    </main>
  );
}
