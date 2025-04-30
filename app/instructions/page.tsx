import Image from "next/image";

export default function TimeBlocking() {
  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-slate-100 to-slate-300 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl mb-10 bg-white rounded-lg p-8 leading-relaxed text-gray-900">
        <p>
          <b>TO:</b> Professor Nelson
        </p>
        <p>
          <b>FROM:</b> Ethan Price
        </p>
        <p>
          <b>DATE:</b> April 29, 2025
        </p>
        <p>
          <b>SUBJECT:</b> Time-Blocking Instruction Set Reflection
        </p>
        <br />
        <p>
          The goal of this assignment was to create an instruction set that
          could be easily presented and followed by an audience of college
          students. To fulfill this requirement, I first picked my topic:
          creating a time-blocked schedule. I chose this topic because I have
          experience with creating visual schedules for myself, and had some
          background knowledge of the science behind effective scheduling.
          Following the approval of my topic, I sketched an initial set of 10
          steps that would form the base of my presentation. The steps I
          originally sketched could be broken into a few categories: preparing
          to create the schedule, building it, and finalizing it. After
          reviewing my plans, I realized the steps that fell into the
          “preparing” category would be most challenging for the audience
          without clear guidance.
        </p>
        <br />

        <p>
          Unfortunately, I was not able to get my instruction set peer reviewed.
          However, based on my experience reflecting on my own work, I can infer
          that early feedback would revolve around vague terms and missing
          context. For example, “shading” or “fixed commitments” were originally
          undefined, and the initial brain dump step did not include how to
          format your tasks. These gaps in definitions and context would cause
          the user to complete the schedule without explicit verbal context,
          causing them to backtrack multiple times (or be confused on how to
          proceed altogether).
        </p>
        <br />

        <p>
          The limited time for presenting meant that the audience could not mess
          up early in the instruction set (“preparing” category); if an audience
          member messed up an earlier step, it would be extremely hard to
          complete later steps. I saw that there were some potential warnings
          that would reduce the amount of these errors. I also saw a need to
          define terms clearly, such as what is meant by “shading” or “fixed
          commitments”. To address these challenges, I noted various visual
          examples, warnings, and notes that each step could benefit from. After
          understanding the needs of the audience and presentation more deeply,
          I decided to build a small (mostly) HTML single page application.
          Since I already have a personal website deployed, this was a
          straight-forward addition. This single page application would hold the
          instruction set, allow users to access it from anywhere, and benefit
          from easily implemented visual aids like color scheming, prominent
          content cards with clear headers. This way, warnings and notes on
          semantics would be quick to find, too.
        </p>
        <br />

        <p>My usability test has five questions:</p>
        <ul>
          <li>How hard was it to understand each step? (1-5)</li>
          <li>Which step was the most difficult?</li>
          <li>Did the order of the steps make logical sense to you?</li>
          <li>
            Were you ever unsure of what tools or materials you needed to
            complete a step?
          </li>
          <li>
            How hard was it to visualize what the next step would look like
            before completing it? (1-5)
          </li>
        </ul>
        <br />

        <p>
          The first question had a wide range of answers, but most people
          answered between 1-3. I took this as an indicator that the
          instructions were not very confusing, and also weighted the opinions
          of the users who answered 3-4 more heavily. The consensus most
          difficult steps were chunk and time box, and mark your biological
          prime-time window. To address the chunk and time-box step, I bolded
          some of the more important words, as the confusion may have stemmed
          from a lack of understanding in how exactly to draw in focus blocks.
          Nearly all users reported that the order of the steps made logical
          sense. Nearly all users reported not being unsure of what materials
          were needed for each step. Most users answered ‘3’ for how hard it was
          to visualize the next step. To remedy this, I added headings in each
          content card which denotes whether it’s a preparation step,
          construction step, or finalization step. This context helps users
          better understand the output of what each step should produce.
        </p>

        <p>
          While developing my instruction set, I primarily relied on the
          “Writing Instructions” reading within the instructions module. This
          website emphasized a few things that I kept in mind: clear writing,
          audience analysis, ensuring users can visualize steps, headings,
          lists, and special notices (warnings); all of these shaped my final
          instruction set. To ensure that the steps could be effectively
          visualized, I nested steps more connected to their prior step inside
          the prior step. To write for the needs of my audience, I tailored my
          wording for college students and gave examples of parts of a typical
          college student’s day to include on the schedule. I also incorporated
          the reading’s advice on emphasizing key actions through graphics by
          having warnings for common errors in yellow and separate from the
          steps themselves. Additionally, I followed the reading’s suggestion on
          reader-friendly formatting by using content cards and color-coding,
          ensuring that my steps were easy to parse and follow.
        </p>
        <br />

        <p>
          Unfortunately, I did not get to review my peers’ work, but I did watch
          a few present their instruction sets. While watching my peers present,
          I realized how easy it is for steps to become unclear when the writer
          does not provide clear warnings or phrases things imprecisely. I
          noticed that many presenters used reference words like ‘this’ without
          clearly defining what the user was supposed to do or look at, making
          the instructions harder to follow. Through observing my peers, it
          reinforced my decision to use visual cues such as color-coded warnings
          and bolded terms, as well as breaking steps into labeled content
          cards. Seeing common pitfalls makes me feel confident that designing a
          visually scannable and semantically clear instruction set was the
          right approach for meeting the audience’s needs.
        </p>
      </div>

      <div
        className="w-full max-w-3xl p-10 rounded-lg shadow-lg text-white text-center"
        style={{
          backgroundImage: "linear-gradient(180deg, #260f29, #0f0514)",
        }}
      >
        <h1 className="text-4xl font-thin tracking-wide mb-4 text-gray-100">
          Time-Blocking
        </h1>
        <h2 className="text-xl text-gray-400 tracking-tight">
          An instruction set for creating a time-blocked visual schedule.
        </h2>
        <h2 className="text-xl text-gray-500 mt-2 tracking-wide">
          By: Ethan Price
        </h2>
      </div>
      <div className="bg-slate-300 p-6 rounded-md shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl text-center font-bold mb-4 text-gray-800">
          Introduction
        </h2>
        <p className="text-center text-black font-semibold mb-4 text-lg">
          The goal of this activity is to create a visual personal schedule for
          today. By drawing on paper and using other simple materials, we will
          assemble a time-blocked schedule to target your 'most important tasks'
          and enable flexible routines.
        </p>
        <p className="text-center font-semibold text-black mb-4 text-lg">
          It requires basic time estimation skills and a general sense of the
          activities you do in a day. After completing these instructions, you
          will have a visual personal schedule for today.
        </p>
      </div>
      <h1 className="mt-2 text-center text-black font-bold text-xl">
        Finished product:{" "}
      </h1>
      <Image
        src="/finishedproduct.jpg"
        width={500}
        height={500}
        className="mt-3 rounded-xl"
        alt="Finished schedule"
      />
      <div className="bg-slate-200 p-4 mt-6 rounded-md shadow max-w-[50%]">
        <h2 className="font-bold text-lg text-gray-900 mb-2">
          Technical Background
        </h2>
        <p className="text-sm text-gray-700">
          Before beginning, users should be comfortable estimating how long
          tasks will take and generally aware of their daily routine. No digital
          tools are required, but some familiarity with basic scheduling is
          helpful.
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-md shadow-lg w-full max-w-[30%] mt-6">
        <h1 className="text-white text-center font-bold text-2xl mb-4">
          Materials
        </h1>
        <div className="grid grid-cols-2 gap-x-16 gap-y-5 text-slate-300 text-sm">
          <div className="flex flex-col text-center mt-2 border-b border-slate-800 pb-2">
            <span className="font-bold">1 sheet of paper</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="font-bold">Orange stickies</span>
            <span className="ml-4">1 per 'most important' task of the day</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="font-bold">Green stickies</span>
            <span className="ml-3">1 per secondary task of the day</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="font-bold">Pencil</span>
            <span>For timeline + labels</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="font-bold">Black marker</span>
            <span>For fixed commitments</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="font-bold">Blue marker</span>
            <span>For breaks</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="font-bold">Red marker</span>
            <span>For a 'hard-stop' time</span>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-w-3xl grid grid-cols-3 gap-12">
        <div className="border-t-8 border-pink-400 bg-pink-100 text-pink-900 min-w-64 shadow-md rounded-md p-4">
          <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
            Preparation
          </span>

          <h3 className="font-bold text-lg mb-2">
            Step 1: Perform a brain-dump
          </h3>
          <p>
            In the upper-left corner of your paper list every significant task
            you would like to complete today and its duration. Limit yourself to
            at most <b>seven broad items</b>.<br />
            <br />
            These should be meaningful tasks that require some effort and/or
            focus for extended periods of time.
            <br />
            <br />
            Fixed commitments should be written in the form:
            <br />
            <b>Work (5PM — 6PM)</b>
            <br />
            <br />
            Flexible tasks that can be completed at any time should be written
            in the form:
            <br />
            <b>Doom scroll (1hr)</b>
            <br />
            <br /> An example list might be:
          </p>
          <ul className="list-disc list-inside mt-1 mb-1">
            <li>Work (10am — 3pm)</li>{" "}
            <span className="text-xs">
              [I <em>ACTUALLY</em> have work from 11am — 2:15pm, see this
              section's WARNING!]
            </span>
            <li>Instrument practice (1hr)</li>
            <li>Gym (2hr)</li>
            <li>Coding (9PM — 2AM)</li>
          </ul>
          <div className="bg-yellow-100 border-l-8 border-yellow-500 p-4 my-6 rounded-md shadow-md">
            <div className="flex flex-col space-x-2 space-y-4">
              <span className="text-yellow-700 text-xl font-bold">
                ⚠️ WARNING!
              </span>
              <ul className="list-disc list-outside space-y-3">
                <li className="text-yellow-700 text-sm">
                  Overestimate how long each task will take to account for
                  commutes, breaks, and other interruptions.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t-8 border-pink-200 mt-5 p-3 bg-white bg-opacity-60 rounded">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Preparation
            </span>
            <h4 className="font-semibold text-sm mb-1">
              Step 2: Circle your 'most important tasks'
            </h4>
            <p className="text-sm">
              Circle at least one and at most three tasks that, if completed,
              make the day a success.
              <br />
              <br /> Together they should add up to 2–5 hours and they should
              not be fixed commitments like class or work.
            </p>
          </div>
        </div>

        <div className="border-t-8 border-indigo-800 max-h-fit bg-indigo-100 text-indigo-900 shadow-md rounded-md p-4">
          <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
            Preparation
          </span>
          <h3 className="font-bold text-lg mb-2">Step 3: Create a timeline</h3>
          <p>
            Draw a vertical timeline from 9 AM to bedtime with horizontal ticks
            for every hour. Mark every three hours with a label.
          </p>
          <div className="relative h-96 w-2/3 mx-auto mt-10 mb-10">
            {/* draw a line */}
            <div className="absolute left-1/2 w-0.5 h-full bg-indigo-700"></div>
            <div className="flex flex-col items-center space-y-14 mt-4">
              {/* map each tick mark to a label on the timeline */}
              {["9 AM", "12 PM", "3 PM", "6 PM", "9 PM"].map((label) => (
                <div className="flex items-center ml-8 mt-16">
                  {/* draw a tick mark */}
                  <div className="w-4 h-[1px] bg-indigo-700"></div>
                  {/* draw the time label */}
                  <span className="text-xs text-indigo-700 pl-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <p>
            {" "}
            Your timeline will look similar to this, but with ticks representing
            hours in between labeled ticks
          </p>
        </div>

        <div className="border-t-8 border-sky-700 bg-sky-100 h-fit text-sky-900 shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Construction
            </span>
            <h3 className="font-bold text-lg">
              Step 4: Time block fixed commitments
            </h3>
            <div className="bg-yellow-100 border-l-8 border-yellow-500 p-4 my-4 rounded-md shadow-md">
              <div className="flex flex-col space-x-2 space-y-4">
                <span className="text-yellow-700 text-xl font-bold">
                  ⚠️ WARNING!
                </span>
                <ul className="list-disc list-outside space-y-3">
                  <li className="text-yellow-700 text-sm">
                    In the context of these instructions, 'Shading' is defined
                    as coloring in the space between two horizontal ticks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4">
            Shade all fixed commitments in with black marker. Pencil the name of
            each commitment beside its block. <br />
            <br />
            These are the items from your brain dump that you wrote in the form:{" "}
            <br />
            <b>Work (10am — 12pm)</b>
          </p>
        </div>
        <div className="border-t-8 border-purple-400 bg-purple-100 text-purple-900 h-fit shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Construction
            </span>
            <h3 className="font-bold text-lg">
              Step 5: Time block your biological prime-time.{" "}
            </h3>
            <p className="mt-4">
              Shade the 2–5 hours when you’re most alert in pencil.
              <br />
              <br />
              The window can be continuous or split, but it must end at least
              one hour before bedtime.
            </p>
            <div className="bg-yellow-100 border-l-8 border-yellow-500 p-4 my-4 rounded-md shadow-md">
              <div className="flex flex-col space-x-2 space-y-4">
                <span className="text-yellow-700 text-xl font-bold">
                  ⚠️ WARNING!
                </span>
                <ul className="list-disc list-outside space-y-3">
                  <li className="text-yellow-700 text-sm">
                    Ideally, your primetime window is roughly equal to the sum
                    of the hours in your circled tasks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-8 border-indigo-800 bg-indigo-100 text-indigo-900 h-fit shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Preparation
            </span>
            <h3 className="font-bold text-lg">Step 6: Prepare sticky notes</h3>
            <p className="mt-4">
              Grab one orange sticky for each 'most important task'.
              <br />
              <br /> Grab one green stickies for all other flexible tasks.
              <br />
              <br />
              For example: if the user has 2 circled tasks and 3 uncircled tasks
              which are not fixed commitments, then they would prepare 2 orange
              stickies and 3 green stickies.
              <br />
              <br />
              Fold each sticky in half twice, sticky side out. The sticky side
              should NOT be folding toward itself nor sticking to the note.
            </p>
          </div>
        </div>
        <div className="border-t-8 border-indigo-800 bg-indigo-100 text-indigo-900 h-fit shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Construction
            </span>
            <h3 className="font-bold text-lg">
              Step 7: Place your 'most important tasks' in your primetime window
            </h3>
            <p className="mt-4">
              Write each circled task on a separate orange sticky and park theme
              inside your prime-time window, being careful to leave a 1-2 inch
              margin between stickies and the timeline.
              <br />
              <br />
              An example of 'most important tasks' might be:
            </p>
            <ul className="list-disc list-inside mt-1 mb-1">
              <li>Instrument practice</li>
              <li>Gym</li>
              <li>Homework</li>
            </ul>
            <div className="bg-orange-100 border-l-8 border-orange-500 p-4 my-6 rounded-md shadow-md">
              <div className="flex flex-col space-x-2 space-y-4">
                <span className="text-orange-700 text-xl font-bold">Note:</span>
                <ul className="list-disc list-outside space-y-3">
                  <li className="text-orange-700 text-sm">
                    Parking these in free-time is fine too, but aim for
                    primetime windows.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-8 border-indigo-800 bg-indigo-100 text-indigo-900 h-fit shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Construction
            </span>
            <h3 className="font-bold text-lg">
              Step 8: Chunk tasks into focus blocks
            </h3>

            <p className="mt-4">
              In the margin between your stickies and your timeline, sketch in
              pencil
              <b> 25-minute to 2-hour long vertical lines</b>. These are your
              <b> focus blocks</b>.
              <br />
              <br />
              <b>ENSURE</b> that you leave a<b> 5- to 25-minute gap</b> between
              each focus block.
            </p>

            <div className="bg-orange-100 border-l-8 border-orange-500 p-4 my-6 rounded-md shadow-md">
              <div className="flex flex-col space-x-2 space-y-4">
                <span className="text-orange-700 text-xl font-bold">Note:</span>
                <ul className="list-disc list-outside space-y-3">
                  <li className="text-orange-700 text-sm">
                    The ending point of these lines should strategically timed
                    for meaningful breakpoints in tasks.
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t-8 border-indigo-800 bg-indigo-100 text-indigo-900 h-fit shadow-md rounded-md p-4">
              <div className="flex flex-col space-x-2 space-y-4">
                <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
                  Construction
                </span>
                <h3 className="font-bold text-lg">Step 9: Insert breaks</h3>
                <p className="mt-4">
                  After every two subtasks, draw a 5 to 15-minute blue bar
                  labeled 'Rest'.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-8 border-indigo-800 bg-indigo-100 text-indigo-900 h-fit shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Construction
            </span>
            <h3 className="font-bold text-lg">Step 10: Add remaining tasks</h3>
            <div className="bg-yellow-100 border-l-8 border-yellow-500 p-4 my-6 rounded-md shadow-md">
              <div className="flex flex-col space-x-2 space-y-4">
                <span className="text-yellow-700 text-xl font-bold">
                  ⚠️ WARNING!
                </span>
                <ul className="list-disc list-outside space-y-3">
                  <li className="text-yellow-700 text-sm">
                    Like 'most important tasks', these should end at least an
                    hour before bedtime.
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              Write remaining tasks that are neither 'most important tasks' nor
              fixed commitments on green stickies and place them in leftover
              gaps.
              <br />
              <br /> Some typical examples include:
              <br />
            </p>
            <ul className="list-disc list-inside mt-1 mb-1">
              <li>Groceries</li>
              <li>Cleaning</li>
              <li>Low-intensity hobbies</li>
            </ul>
          </div>
        </div>
        <div className="border-t-8 border-red-500 bg-red-100 text-red-800  h-fit shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Construction
            </span>
            <h3 className="font-bold text-lg">
              Step 11: Schedule a hard stop/wind-down
            </h3>
            <p className="mt-4">
              Shade with red marker starting at least one hour before bed and
              list relaxing activities beside it such as:
            </p>
            <ul className="list-disc list-inside mt-1 mb-1">
              <li>Reading</li>
              <li>Meditation</li>
              <li>Journaling</li>
              <li>Showering</li>
            </ul>
            <p>
              Or whatever else you find relaxing. This is your mandatory
              wind-down time.
            </p>
          </div>
        </div>
        <div className="col-start-2 min-w-96 border-t-8 border-emerald-400 bg-emerald-100 text-emerald-900 h-fit shadow-md rounded-md p-4">
          <div className="flex flex-col space-x-2 space-y-4">
            <span className="inline-block self-start bg-gray-200 text-gray-700 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded uppercase mb-2">
              Finalization
            </span>
            <h3 className="font-bold text-lg">
              Step 12: Perform a 30-second sanity check
            </h3>
            <p className="mt-4">
              Check for crowding. Slide stickies up or down or remove them to
              reflect any last-minute changes and confirm the plan feels doable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
