import MyButton from "@/components/MyButton";

export default function Home() {
  return (
    <main
      className={`relative bg-gradient-to-b from-[#121038] to-[#000000] flex justify-center items-center flex-col overflow-hidden mx-auto
    sm:px-10 min-h-screen`}
    >
      <div className="max-w-full text-white">
        <h1 className="text-center tracking-tight font-mono font-semibold text-5xl mb-5">
          Ethan Price
        </h1>
      </div>
      <div className="max-w-5xl">
        <h2 className="text-white text-center font-mono">
          Hi, I'm Ethan— a Full-Stack Software Engineer and undergraduate
          computer science major at the{" "}
          <b>University of Maryland, College Park</b> on a mission to enrich the
          day-to-day experiences of users through intuitive tech solutions.
        </h2>
        <div className="mt-5 justify-center items-center flex flex-row space-x-10">
          <MyButton
            text="About Me"
            redirectValue="aboutme"
            isDownload={false}
          />
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
