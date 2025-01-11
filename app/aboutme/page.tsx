import MyButton from "@/components/MyButton";
import Image from "next/image";

export default function AboutMe() {
  return (
    <main
      className="relative bg-gradient-to-b from-[#260f29] to-[#0f0514] flex justify-center items-center flex-col mx-auto
      sm:px-10 min-h-screen"
    >
      <div className="max-w-full text-white">
        <div className="flex flex-row items-center justify-center">
          <Image
            src="/blahlaah.jpg"
            alt="Photo of Ethan"
            layout="intrinsic"
            objectFit="contain"
            width={50}
            height={20}
            className="mr-3 mb-3"
          />
          <h1 className="text-center tracking-tight font-mono font-semibold text-5xl mb-5">
            About Ethan
          </h1>
        </div>

        <p className="font-mono max-w-6xl text-gray-300 mt-6">
          I’m a software engineer studying at the University of Maryland;
          passionate about solving real-world problems through creative and
          efficient solutions. My diverse interests— guitar, mindfulness, and
          working with children as a Registered Behavior Technician— have shaped
          my journey and fueled my curiosity in technology.
        </p>

        <p className="font-mono max-w-6xl text-gray-300 mt-6">
          My love for music inspired me to develop a Inspired by my love for
          music, I developed the <b>Guitar Fretboard Analyzer</b>, a tool to
          help guitarists improve their skills and streamline songwriting.
        </p>

        <p className="font-mono max-w-6xl text-gray-300 mt-6">
          Currently, I&#39;m building <b>Behaviorist</b>, an app designed to
          enable users to utilize the science of behavior analysis to change
          behaviors, form new habits, and live intentional lives.
        </p>

        <div className="flex flex-row items-center justify-center space-x-10 mt-5">
          <MyButton text="Back to Home" redirectValue="/" isDownload={false} />
          <MyButton
            text="Projects"
            redirectValue="projects"
            isDownload={false}
          />
          <MyButton
            text="Resume"
            redirectValue="/PriceEthan_Software_Engineering_Intern_Resume.pdf"
            isDownload={true}
          />
        </div>
      </div>
    </main>
  );
}
