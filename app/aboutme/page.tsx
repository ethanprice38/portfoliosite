import MyButton from "@/components/MyButton";
import Image from "next/image";
import React from "react";
import { RESUME_FILENAME } from "../constants";

export default function AboutMe() {
  return (
    <main
      className="relative bg-gradient-to-b from-[#260f29] to-[#0f0514] flex justify-center items-center flex-col mx-auto
      sm:px-10 min-h-screen"
    >
      <div className="max-w-full text-white">
        <div className="px-5 flex flex-row items-center justify-center h-24">
          <Image
            src="/linkedin.jpeg"
            width={100}
            height={100}
            className="mr-3 rounded-xl"
            alt="Photo of Ethan"
          />
          <h1 className="text-center tracking-tight font-mono font-semibold text-5xl mb-5">
            About Ethan
          </h1>
        </div>
        <p className="px-5 font-mono max-w-4xl text-gray-300 mt-6">
          I’m a software engineer studying at the University of Maryland;
          passionate about solving real-world problems through creative and
          efficient solutions. My diverse interests— guitar, mindfulness, and
          working with children as a Registered Behavior Technician— have shaped
          my journey and fueled my curiosity in technology.
        </p>

        <p className="px-5 font-mono max-w-4xl text-gray-300 mt-6">
          Inspired by my love for music, I developed the{" "}
          <b>Guitar Fretboard Analyzer</b>, a tool to help guitarists improve
          their skills and streamline songwriting.
        </p>

        <p className="px-5 font-mono max-w-4xl text-gray-300 mt-6">
          Currently, I&#39;m building <b>Behaviorist</b>, an app designed to
          enable users to utilize the science of behavior analysis to change
          behaviors, form new habits, and live intentional lives.
        </p>

        <div className="flex px-5 py-5 flex-row items-center justify-center space-x-10 mt-5">
          <MyButton
            text="Home"
            redirectValue="/"
            isDownload={false}
            otherClasses="bg-[#1E90FF] hover:bg-[#187bcd]"
          />
          <MyButton
            text="See My Projects"
            redirectValue="projects"
            isDownload={false}
            otherClasses="bg-[#333333] hover:bg-neutral-800"
          />
          <MyButton
            text="View Resume"
            redirectValue={`/${RESUME_FILENAME}`}
            isDownload={true}
            otherClasses="bg-[#333333] hover:bg-neutral-800"
          />
        </div>
      </div>
    </main>
  );
}
