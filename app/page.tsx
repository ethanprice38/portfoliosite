import MyButton from "@/components/MyButton";
import React from "react";

export default function Home() {
  return (
    <main
      className={`relative bg-gradient-to-b from-[#121038] to-[#000000] flex flex-col justify-center items-center mx-auto
    sm:px-10 min-h-screen overflow-y-auto px-4 pb-10`}
    >
      <div className="flex flex-row space-x-5">
        <a
          href="https://github.com/ethanprice38"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            width={25}
            height={25}
            className="fill-white hover:fill-[#AAAAAA]"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/ethanpriceSWE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 448 512"
            width={25}
            height={25}
            className="fill-white hover:fill-blue-400"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>
        <a
          href="mailto:ethanprice082@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-7 w-7 stroke-white hover:stroke-red-500"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
      <div className="max-w-full text-white mt-10">
        <h1 className="text-center tracking-tight font-mono font-semibold text-5xl">
          Hi, I&#39;m Ethan Price
        </h1>
      </div>

      <div className="max-w-5xl mt-5">
        <p className="text-white text-center font-mono">
          I&#39;m a Full-Stack Software Engineer and undergraduate computer
          science major at the <b>University of Maryland, College Park</b> on a
          mission to enrich the day-to-day experiences of users through
          intuitive tech solutions, especially through the application of my
          knowledge from other domains.
        </p>
      </div>

      <div className="mt-5 px-5 py-5 justify-center items-center flex flex-row space-x-10">
        <MyButton
          text="Learn About Me"
          redirectValue="aboutme"
          isDownload={false}
          otherClasses="bg-[#333333] hover:bg-neutral-800"
        />
        <MyButton
          text="See My Projects"
          redirectValue="projects"
          isDownload={false}
          otherClasses="bg-[#333333] hover:bg-neutral-800"
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
