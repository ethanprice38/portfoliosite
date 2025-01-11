import MyButton from "@/components/MyButton";

export default function AboutMe() {
  return (
    <main
      className="relative bg-gradient-to-b from-[#260f29] to-[#0f0514] flex justify-center items-center flex-col overflow-hidden mx-auto
      sm:px-10 min-h-screen"
    >
      <div className="max-w-full text-white">
        <div className="flex flex-row items-center justify-center">
          <img
            src="/blahlaah.jpg"
            alt="Ethan's Photo"
            className="rounded-md w-12 h-12 object-cover mr-2 mb-3"
          />
          <h1 className="text-center tracking-tight font-mono font-semibold text-5xl mb-5">
            About Ethan
          </h1>
        </div>
        <p className="font-mono max-w-6xl text-gray-300">
          I’m a software engineer with diverse passions— guitar, mindfulness,
          and working with children, especially as a Registered Behavior
          Technician. I also study Computer Science at the University of
          Maryland. These experiences shaped my journey and fueled my curiosity
          to solve real-world problems creatively.
          <br />
          <br />
          My love for music inspired me to develop a{" "}
          <b>Guitar Fretboard Analyzer</b>, a tool that helps guitarists master
          their instrument and seamlessly write songs without full knowledge of
          the fretboard.
          <br />
          <br />
          Currently, I'm building <b>Behaviorist</b>, an app designed to enable
          users to utilize the science of behavior analysis to change behaviors,
          form new habits, and live intentional lives.
        </p>
        <span className="space-x-10 items-center justify-center flex flex-row mt-5">
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
        </span>
      </div>
    </main>
  );
}
