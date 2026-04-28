import Link from "next/link";
import React from "react";

const sourceGroups = [
  {
    label: "Predictive Brain",
    items: [
      {
        authors: "Friston, K.",
        year: "2010",
        title: "The free-energy principle: a unified brain theory?",
        publication: "Nature Reviews Neuroscience, 11, 127-138.",
        href: "https://www.nature.com/articles/nrn2787",
        visibleLink: "nature.com/articles/nrn2787",
        usedFor: "Predictive brain / prediction and prediction error.",
      },
    ],
  },
  {
    label: "Selective Attention",
    items: [
      {
        authors: "Desimone, R., & Duncan, J.",
        year: "1995",
        title: "Neural Mechanisms of Selective Visual Attention.",
        publication: "Annual Review of Neuroscience, 18, 193-222.",
        href: "https://pages.ucsd.edu/~msereno/107B/readings/04.09-VisAttnRev.pdf",
        visibleLink: "ucsd.edu/.../04.09-VisAttnRev.pdf",
        usedFor: "Selective attention as limited-capacity processing.",
      },
      {
        authors: "Simons, D. J., & Chabris, C. F.",
        year: "1999",
        title:
          "Gorillas in our midst: sustained inattentional blindness for dynamic events.",
        publication: "Perception, 28(9), 1059-1074.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10694957/",
        visibleLink: "pubmed.ncbi.nlm.nih.gov/10694957",
        usedFor: "Inattentional blindness / gorilla study.",
      },
      {
        authors: "Hall, C. C., Zhao, J., & Shafir, E.",
        year: "2014",
        title:
          "Self-Affirmation Among the Poor: Cognitive and Behavioral Implications.",
        publication: "Psychological Science, 25(2), 619-625.",
        href: "https://shafir.scholar.princeton.edu/sites/g/files/toruqf4226/files/self_affirmation_among_poor.pdf",
        visibleLink: "princeton.edu/.../self_affirmation_among_poor.pdf",
        usedFor: "46% vs 15% benefits-information result.",
      },
    ],
  },
  {
    label: "Self-Image",
    items: [
      {
        authors: "Markus, H., & Nurius, P.",
        year: "1986",
        title: "Possible Selves.",
        publication: "American Psychologist, 41(9), 954-969.",
        href: "https://www.researchgate.net/profile/Paula-Nurius/publication/232565363_Possible_Selves/links/540dcd1a0cf2d8daaacce112/Possible-Selves.pdf",
        visibleLink: "researchgate.net/.../Possible-Selves.pdf",
        usedFor: "Possible selves theory and identity-based motivation.",
      },
      {
        authors: "Oyserman, D., Bybee, D., & Terry, K.",
        year: "2006",
        title:
          "Possible Selves and Academic Outcomes: How and When Possible Selves Impel Action.",
        publication:
          "Journal of Personality and Social Psychology, 91(1), 188-204.",
        href: "https://sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/oyserman_byeee_terry_2006.pdf",
        visibleLink: "stanford.edu/.../oyserman_byeee_terry_2006.pdf",
        usedFor: "Possible selves linked to strategies and action.",
      },
    ],
  },
  {
    label: "Visualization That Works",
    items: [
      {
        authors: "Oettingen, G.",
        year: "2013",
        title: "Future thought and behaviour change.",
        publication: "European Review of Social Psychology, 23(1), 1-63.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3759023/",
        visibleLink: "pmc.ncbi.nlm.nih.gov/articles/PMC3759023",
        usedFor: "Mental contrasting: desired future plus present obstacle.",
      },
      {
        authors:
          "Duckworth, A. L., Kirby, T. A., Gollwitzer, A., & Oettingen, G.",
        year: "2013",
        title:
          "From Fantasy to Action: Mental Contrasting With Implementation Intentions (MCII) Improves Academic Performance in Children.",
        publication:
          "Social Psychological and Personality Science, 4(6), 745-753.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25068007/",
        visibleLink: "pubmed.ncbi.nlm.nih.gov/25068007",
        usedFor: "If-then planning combined with mental contrasting.",
      },
    ],
  },
] as const;

function SectionLabel({
  children,
  concise = false,
}: {
  children: React.ReactNode;
  concise?: boolean;
}) {
  return (
    <div
      className={`font-semibold uppercase tracking-[0.34em] text-[#b89a56] print:text-[9px] ${
        concise ? "text-[9px]" : "text-[10px]"
      }`}
    >
      {children}
    </div>
  );
}

function SourcesSection({ concise = false }: { concise?: boolean }) {
  return (
    <section
      className={`border-t border-white/10 ${concise ? "pt-2" : "pt-5"}`}
    >
      <SectionLabel concise={concise}>Sources</SectionLabel>
      {concise ? (
        <div className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-1 text-[7px] leading-[1.02] text-white/56">
          {sourceGroups.map((group) => (
            <div key={group.label} className="space-y-0.5">
              <div className="text-[6.5px] font-semibold uppercase tracking-[0.2em] text-[#b89a56]">
                {group.label}
              </div>
              {group.items.map((item) => (
                <div key={`${group.label}-${item.authors}-${item.year}`}>
                  <span className="font-semibold text-white/74">
                    {item.authors}
                  </span>
                  <span>{` (${item.year}) `}</span>
                  <span>{item.usedFor} </span>
                  <Link
                    href={item.href}
                    className="text-white/70 underline decoration-white/20 underline-offset-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.visibleLink}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-[10px] leading-4 text-white/56">
          {sourceGroups.map((group) => (
            <div key={group.label} className="space-y-1.5">
              <div className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#b89a56]">
                {group.label}
              </div>
              {group.items.map((item) => (
                <div
                  key={`${group.label}-${item.authors}-${item.year}`}
                  className="space-y-0.5"
                >
                  <div>
                    <span className="font-semibold text-white/74">
                      {item.authors}
                    </span>
                    <span>{` (${item.year}). `}</span>
                    <span>{item.title}</span>
                  </div>
                  <div>{item.publication}</div>
                  <div>
                    <span className="text-white/72">Used for:</span>{" "}
                    {item.usedFor}
                  </div>
                  <Link
                    href={item.href}
                    className="text-white/70 underline decoration-white/20 underline-offset-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.visibleLink}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function StatNote({
  value,
  caption,
  detail,
  concise = false,
}: {
  value: string;
  caption: string;
  detail?: string;
  concise?: boolean;
}) {
  return (
    <div
      className={`border border-white/10 bg-white/[0.03] ${
        concise ? "p-1.5" : "p-3"
      }`}
    >
      <div
        className={`font-semibold tracking-[-0.03em] text-[#d6b46b] ${
          concise ? "text-[7px]" : "text-lg"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-0.5 text-white/72 ${concise ? "text-[5.5px] leading-[1.0]" : "text-[11px] leading-4"}`}
      >
        {caption}
      </div>
      {detail ? (
        <div
          className={`mt-2 text-white/46 ${
            concise ? "mt-0.5 text-[5px] leading-none" : "text-[10px] leading-4"
          }`}
        >
          {detail}
        </div>
      ) : null}
    </div>
  );
}

function IdeaColumn({
  title,
  sentence,
  visual,
  concise = false,
}: {
  title: string;
  sentence: string;
  visual: React.ReactNode;
  concise?: boolean;
}) {
  return (
    <div
      className={`grid border-t border-white/10 print:gap-3 print:pt-3 ${
        concise ? "gap-1.5 pt-1.5" : "gap-4 pt-4"
      }`}
    >
      <div>
        <h3
          className={`font-semibold text-white print:text-[15px] ${
            concise ? "text-[11px]" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-white/68 print:mt-1 print:text-[11px] print:leading-4 ${
            concise
              ? "mt-0.5 text-[8px] leading-[1.0]"
              : "mt-2 text-[13px] leading-5"
          }`}
        >
          {sentence}
        </p>
      </div>
      <div
        className={`overflow-hidden rounded-[18px] border border-white/10 bg-[#121417] print:h-28 print:rounded-[12px] ${
          concise ? "h-12 rounded-[10px]" : "h-36"
        }`}
      >
        {visual}
      </div>
    </div>
  );
}

function FrameworkStep({
  index,
  title,
  copy,
  icon,
  concise = false,
}: {
  index: string;
  title: string;
  copy: string;
  icon: string;
  concise?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col justify-between border border-white/10 bg-white/[0.03] print:min-h-20 print:p-3 ${
        concise ? "min-h-14 p-2" : "min-h-28 p-4"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`uppercase tracking-[0.22em] text-white/42 print:text-[10px] ${
            concise ? "text-[8px]" : "text-[11px]"
          }`}
        >
          {index}
        </div>
        <div
          className={`text-[#b89a56] print:text-[12px] ${
            concise ? "text-[9px]" : "text-sm"
          }`}
        >
          {icon}
        </div>
      </div>
      <div>
        <div
          className={`font-semibold text-white print:text-[12px] ${
            concise ? "text-[10px]" : "text-sm"
          }`}
        >
          {title}
        </div>
        <div
          className={`mt-1 text-white/64 print:text-[10px] print:leading-4 ${
            concise ? "text-[8px] leading-[1.05]" : "text-[12px] leading-5"
          }`}
        >
          {copy}
        </div>
      </div>
    </div>
  );
}

function ApplicationCard({
  title,
  futureSelf,
  attention,
  obstacle,
  ifThen,
  concise = false,
}: {
  title: string;
  futureSelf: string;
  attention: string;
  obstacle: string;
  ifThen: string;
  concise?: boolean;
}) {
  return (
    <div
      className={`border border-white/10 bg-white/[0.03] print:p-3 ${
        concise ? "p-1" : "p-4"
      }`}
    >
      <div
        className={`font-semibold text-white ${concise ? "text-[7px]" : "text-sm"}`}
      >
        {title}
      </div>
      <div
        className={`mt-0.5 ${concise ? "space-y-0.5 text-[5px] leading-none" : "space-y-1.5 text-[12px] leading-5"}`}
      >
        <div className="text-white/68">
          <span className="mr-2 font-semibold uppercase tracking-[0.14em] text-white/42">
            Future Self:
          </span>
          {futureSelf}
        </div>
        <div className="text-white/68">
          <span className="mr-2 font-semibold uppercase tracking-[0.14em] text-white/42">
            Attention:
          </span>
          {attention}
        </div>
        <div className="text-white/68">
          <span className="mr-2 font-semibold uppercase tracking-[0.14em] text-white/42">
            Obstacle:
          </span>
          {obstacle}
        </div>
        <div className="text-white/82">
          <span className="mr-2 font-semibold uppercase tracking-[0.14em] text-[#d6b46b]">
            If-then:
          </span>
          {ifThen}
        </div>
      </div>
    </div>
  );
}

function HeroLightCone({ concise = false }: { concise?: boolean }) {
  const dots = [
    ["8%", "18%", "dark"],
    ["12%", "34%", "dark"],
    ["14%", "52%", "dark"],
    ["18%", "68%", "dark"],
    ["24%", "20%", "dark"],
    ["26%", "44%", "dark"],
    ["28%", "74%", "dark"],
    ["34%", "14%", "dark"],
    ["36%", "34%", "dark"],
    ["38%", "58%", "dark"],
    ["42%", "78%", "dark"],
    ["48%", "18%", "dark"],
    ["52%", "38%", "dark"],
    ["54%", "62%", "dark"],
    ["58%", "82%", "dark"],
    ["62%", "26%", "yellow"],
    ["64%", "44%", "dark"],
    ["66%", "64%", "yellow"],
    ["70%", "18%", "dark"],
    ["72%", "34%", "dark"],
    ["74%", "50%", "dark"],
    ["76%", "70%", "dark"],
    ["82%", "28%", "dark"],
    ["84%", "46%", "dark"],
    ["86%", "62%", "dark"],
    ["90%", "78%", "dark"],
  ] as const;

  return (
    <div
      className={`relative h-full overflow-hidden border border-white/10 bg-[#0f1114] print:min-h-44 ${
        concise ? "min-h-20" : "min-h-56"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(255,214,120,0.08),transparent_42%)]" />
      <div className="absolute right-[22%] top-[14%] h-[72%] w-[46%] skew-x-[-16deg] bg-[linear-gradient(180deg,rgba(184,154,86,0.35),rgba(184,154,86,0.03))] blur-[2px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_40%)]" />
      {dots.map(([left, top, tone], index) => (
        <div
          key={`${left}-${top}-${index}`}
          className={`absolute h-2.5 w-2.5 rounded-full print:h-2 print:w-2 ${
            tone === "yellow"
              ? "bg-[#d6b46b] shadow-[0_0_10px_rgba(214,180,107,0.35)]"
              : "bg-[#2a2d31]"
          }`}
          style={{ left, top }}
        />
      ))}
      <div
        className={`absolute left-3 right-3 uppercase tracking-[0.18em] text-white/48 ${
          concise ? "bottom-1.5 text-[5.5px]" : "bottom-3 text-[10px]"
        }`}
      >
        Attention does not show you everything. It selects.
      </div>
    </div>
  );
}

function GorillaMini({ concise = false }: { concise?: boolean }) {
  return (
    <div className="relative h-full">
      <img
        src="/gorilla.png"
        alt="Selective attention still with a gorilla in view"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.6))]" />
      <div className="absolute left-1.5 top-1.5 border border-[#d6b46b]/30 bg-[#121417]/80 px-1.5 py-1">
        <div
          className={`font-semibold text-[#d6b46b] ${concise ? "text-[8px]" : "text-lg"}`}
        >
          46% missed it
        </div>
        <div
          className={`uppercase tracking-[0.16em] text-white/55 ${concise ? "mt-0.5 text-[5.5px]" : "mt-1 text-[10px]"}`}
        >
          Even when it was in plain sight.
        </div>
      </div>
    </div>
  );
}

function GymMini({ concise = false }: { concise?: boolean }) {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="relative border-r border-white/8 bg-[#1c1811]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,180,107,0.14),transparent_48%)]" />
        <div
          className={`absolute inset-x-[16%] rounded-t-[24px] border border-white/10 bg-white/[0.04] ${concise ? "top-[10%] h-[24%]" : "top-[16%] h-[34%]"}`}
        />
        <div
          className={`absolute inset-x-[25%] text-center font-semibold tracking-[0.2em] text-white/82 ${concise ? "top-[13%] text-[7px]" : "top-[22%] text-[16px]"}`}
        >
          GYM
        </div>
        <div
          className={`absolute left-[44%] rounded-t-full bg-[#ece7db] ${concise ? "top-[52%] h-6 w-3" : "top-[64%] h-12 w-6"}`}
        />
        <div
          className={`absolute left-[43%] rounded-full bg-[#f7f1e7] ${concise ? "top-[46%] h-3 w-3" : "top-[56%] h-5 w-5"}`}
        />
        <div
          className={`absolute uppercase tracking-[0.16em] text-[#d6b46b] ${concise ? "left-1.5 top-1.5 text-[5.5px]" : "left-3 top-3 text-[10px]"}`}
        >
          future me
        </div>
        <div
          className={`absolute uppercase tracking-[0.16em] text-[#d6b46b] ${concise ? "right-1.5 top-5 text-[5.5px]" : "right-3 top-10 text-[10px]"}`}
        >
          momentum
        </div>
        <div
          className={`absolute uppercase tracking-[0.16em] text-[#d6b46b] ${concise ? "left-1.5 bottom-1.5 text-[5.5px]" : "left-4 bottom-3 text-[10px]"}`}
        >
          one step
        </div>
      </div>
      <div className="relative bg-[#11161d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,140,164,0.13),transparent_48%)]" />
        <div
          className={`absolute inset-x-[16%] rounded-t-[24px] border border-white/10 bg-white/[0.03] ${concise ? "top-[10%] h-[24%]" : "top-[16%] h-[34%]"}`}
        />
        <div
          className={`absolute inset-x-[25%] text-center font-semibold tracking-[0.2em] text-white/82 ${concise ? "top-[13%] text-[7px]" : "top-[22%] text-[16px]"}`}
        >
          GYM
        </div>
        <div
          className={`absolute left-[44%] rounded-t-full rotate-[9deg] bg-[#cfd4db] ${concise ? "top-[52%] h-6 w-3" : "top-[64%] h-12 w-6"}`}
        />
        <div
          className={`absolute left-[43%] rounded-full bg-[#edf1f5] ${concise ? "top-[46%] h-3 w-3" : "top-[56%] h-5 w-5"}`}
        />
        <div
          className={`absolute uppercase tracking-[0.16em] text-[#97a7bf] ${concise ? "left-1.5 top-1.5 text-[5.5px]" : "left-3 top-3 text-[10px]"}`}
        >
          exhausting
        </div>
        <div
          className={`absolute uppercase tracking-[0.16em] text-[#97a7bf] ${concise ? "right-1.5 top-5 text-[5.5px]" : "right-3 top-10 text-[10px]"}`}
        >
          judgment
        </div>
        <div
          className={`absolute uppercase tracking-[0.16em] text-[#97a7bf] ${concise ? "left-1.5 bottom-1.5 text-[5.5px]" : "left-4 bottom-3 text-[10px]"}`}
        >
          too hard
        </div>
      </div>
    </div>
  );
}

function IdentityMini({ concise = false }: { concise?: boolean }) {
  const bubbles = ["Speech", "Fitness", "Studiousness", "Avoidance"];

  return (
    <div className="relative h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_48%)]">
      <div className="absolute left-1/2 top-1/2 h-14 w-7 -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-white/80" />
      <div className="absolute left-1/2 top-[38%] h-5 w-5 -translate-x-1/2 rounded-full bg-white/90" />
      {bubbles.map((label, index) => (
        <div
          key={label}
          className={`absolute rounded-full border px-3 py-1 text-[11px] ${
            index < 3
              ? "border-[#b89a56]/30 bg-[#b89a56]/10 text-[#d6b46b]"
              : "border-[#94a1b8]/18 bg-[#94a1b8]/10 text-[#cbd3df]"
          }`}
          style={{
            left: ["11%", "66%", "49%", "14%"][index],
            top: ["15%", "22%", "62%", "64%"][index],
          }}
        >
          {label}
        </div>
      ))}
      {["-145deg", "-24deg", "75deg", "148deg"].map((rotation, index) => (
        <div
          key={rotation}
          className="absolute left-1/2 top-1/2 h-px origin-left bg-white/16"
          style={{
            width: index === 2 ? "86px" : "102px",
            transform: `rotate(${rotation})`,
          }}
        />
      ))}
    </div>
  );
}

export default function VisualEssayPage({
  variant = "standard",
}: {
  variant?: "standard" | "concise";
}) {
  const concise = variant === "concise";

  return (
    <main className="min-h-screen bg-[#0b0d10] px-4 py-6 text-white sm:px-6 print:bg-[#0b0d10] print:px-0 print:py-0">
      <div className="mx-auto mb-4 flex w-full max-w-[920px] justify-end print:hidden">
        <div className="inline-flex border border-white/10 bg-[#111317] p-1">
          <Link
            href="/presentation"
            className={`px-4 py-2 text-sm transition-colors ${
              !concise
                ? "bg-[#d6b46b] text-[#18140d]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Standard
          </Link>
          <Link
            href="/presentation?variant=concise"
            className={`px-4 py-2 text-sm transition-colors ${
              concise
                ? "bg-[#d6b46b] text-[#18140d]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Concise
          </Link>
        </div>
      </div>
      <article
        className={`poster-shell mx-auto w-full max-w-[920px] border border-white/10 bg-[#111317] shadow-[0_30px_80px_rgba(0,0,0,0.32)] print:h-[11in] print:w-[8.5in] print:max-w-none print:border-0 print:p-[0.3in] print:shadow-none ${
          concise ? "p-1.5 sm:p-2" : "p-6 sm:p-8"
        }`}
      >
        <section
          className={`grid border-b border-white/10 md:grid-cols-[1.2fr_0.8fr] print:gap-5 print:pb-5 ${
            concise ? "gap-1 pb-1" : "gap-8 pb-8"
          }`}
        >
          <div className="flex flex-col justify-between">
            <SectionLabel concise={concise}>Visual Essay</SectionLabel>
            <div
              className={concise ? "mt-0.5 print:mt-0.5" : "mt-5 print:mt-3"}
            >
              <h1
                className={`max-w-xl font-semibold leading-[1.02] tracking-[-0.04em] text-white print:text-[2.45rem] ${
                  concise
                    ? "text-[1.05rem] sm:text-[1.15rem]"
                    : "text-4xl sm:text-[3.55rem]"
                }`}
              >
                How Your Mind Shapes Your Future
              </h1>
              <p
                className={`text-white/72 print:mt-3 print:text-[12px] ${
                  concise ? "mt-0.5 text-[6px]" : "mt-4 text-lg"
                }`}
              >
                Visualization, self-image, attention, and behavior
              </p>
              <p
                className={`max-w-xl text-white/62 print:mt-4 print:max-w-none print:text-[10.5px] print:leading-4 ${
                  concise
                    ? "mt-0.5 text-[5px] leading-none"
                    : "mt-6 text-sm leading-6"
                }`}
              >
                Equal talent can still produce radically different outcomes
                because attention, prediction, and identity alter what people
                notice and attempt.
              </p>
            </div>
          </div>
          <HeroLightCone concise={concise} />
        </section>

        <section
          className={`border-b border-white/10 print:py-4 ${concise ? "py-1" : "py-7"}`}
        >
          <SectionLabel concise={concise}>Three Core Ideas</SectionLabel>
          <div
            className={`grid md:grid-cols-3 print:mt-4 print:gap-4 ${
              concise ? "mt-0.5 gap-0.5" : "mt-5 gap-6"
            }`}
          >
            <IdeaColumn
              title="Attention"
              sentence="You notice what your mind is prepared to see."
              visual={<GorillaMini concise={concise} />}
              concise={concise}
            />
            <IdeaColumn
              title="Prediction"
              sentence="Expectations shape how reality feels."
              visual={<GymMini concise={concise} />}
              concise={concise}
            />
            <IdeaColumn
              title="Identity"
              sentence="Self-image influences what actions feel natural."
              visual={<IdentityMini concise={concise} />}
              concise={concise}
            />
          </div>
          <div
            className={`grid md:grid-cols-3 ${
              concise ? "mt-0.5 gap-0.5" : "mt-5 gap-6"
            }`}
          >
            {concise ? (
              <>
                <div className="border border-white/10 bg-white/[0.03] px-1.5 py-1 text-[6px] leading-[1.0] text-white/64">
                  <span className="font-semibold text-[#d6b46b]">
                    46% vs 15%
                  </span>{" "}
                  affirmed low-income participants took benefits information.
                </div>
                <div className="border border-white/10 bg-white/[0.03] px-1.5 py-1 text-[6px] leading-[1.0] text-white/64">
                  <span className="font-semibold text-[#d6b46b]">
                    Your brain predicts before it reacts.
                  </span>{" "}
                  Expectations shape perception, attention, and action.
                </div>
                <div className="border border-white/10 bg-white/[0.03] px-1.5 py-1 text-[6px] leading-[1.0] text-white/64">
                  <span className="font-semibold text-[#d6b46b]">
                    264 low-income 8th graders
                  </span>{" "}
                  possible-selves gains lasted 2 years.
                </div>
              </>
            ) : (
              <>
                <StatNote
                  value="46% vs 15%"
                  caption="Affirmed low-income participants were more likely to take benefits information."
                  detail="46% of affirmed low-income participants took the benefits flier vs 15% in the neutral group."
                  concise={concise}
                />
                <StatNote
                  value="Your brain predicts before it reacts."
                  caption="Expectations shape perception, attention, and action."
                  concise={concise}
                />
                <StatNote
                  value="264 low-income 8th graders"
                  caption="Possible-selves intervention: gains lasted 2 years."
                  concise={concise}
                />
              </>
            )}
          </div>
        </section>

        <section
          className={`border-b border-white/10 print:py-4 ${concise ? "py-1" : "py-7"}`}
        >
          <SectionLabel concise={concise}>Reinforcing Loop</SectionLabel>
          {concise ? (
            <div className="mt-0.5 border border-white/10 bg-white/[0.03] px-1.5 py-1">
              <div className="text-[5px] uppercase tracking-[0.16em] text-white/38">
                Loop
              </div>
              <div className="mt-0.5 text-[0.46rem] font-semibold leading-none tracking-[-0.03em] text-white">
                {"Attention <-> Prediction <-> Identity"}
              </div>
              <div className="mt-0.5 text-[4.5px] leading-none text-white/58">
                These systems can trap you in threat detection or train you to
                notice possibility.
              </div>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-center print:mt-4 print:gap-4">
              <div className="flex min-h-40 items-center justify-center border border-white/10 bg-white/[0.03] px-4">
                <div className="text-center">
                  <div className="text-[12px] uppercase tracking-[0.28em] text-white/38 print:text-[10px]">
                    Loop
                  </div>
                  <div className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white print:mt-3 print:text-[1.15rem]">
                    {"Attention <-> Prediction <-> Identity"}
                  </div>
                </div>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/64 print:text-[10.5px] print:leading-4">
                These systems can trap you in threat detection or train you to
                notice possibility.
              </p>
            </div>
          )}
        </section>

        <section
          className={`border-b border-white/10 print:py-4 ${concise ? "py-1" : "py-7"}`}
        >
          <SectionLabel concise={concise}>
            Visualization That Works
          </SectionLabel>
          <div
            className={`${concise ? "mt-0.5 max-w-[150px]" : "mt-4 max-w-sm"}`}
          >
            <StatNote
              value="Wish + obstacle + if-then plan"
              caption="More effective than positive fantasy alone."
              concise={concise}
            />
          </div>
          <div
            className={`grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch print:mt-4 print:gap-2 ${
              concise ? "mt-0.5 gap-0.5" : "mt-5"
            }`}
          >
            <FrameworkStep
              index="1"
              title="Future Self"
              copy="Who am I becoming?"
              icon="[ ]"
              concise={concise}
            />
            <div
              className={`hidden items-center justify-center text-[#b89a56] md:flex ${concise ? "text-[8px]" : ""}`}
            >
              {"->"}
            </div>
            <FrameworkStep
              index="2"
              title="Attention"
              copy="What would that person notice?"
              icon="(*)"
              concise={concise}
            />
            <div
              className={`hidden items-center justify-center text-[#b89a56] md:flex ${concise ? "text-[8px]" : ""}`}
            >
              {"->"}
            </div>
            <FrameworkStep
              index="3"
              title="Obstacle"
              copy="What will pull me back?"
              icon="/!\\"
              concise={concise}
            />
            <div
              className={`hidden items-center justify-center text-[#b89a56] md:flex ${concise ? "text-[8px]" : ""}`}
            >
              {"->"}
            </div>
            <FrameworkStep
              index="4"
              title="If-Then Plan"
              copy="If that happens, what will I do?"
              icon="->"
              concise={concise}
            />
          </div>
        </section>

        <section
          className={`border-b border-white/10 print:py-4 ${concise ? "py-1" : "py-7"}`}
        >
          <SectionLabel concise={concise}>
            Applications for Independent Living After College
          </SectionLabel>
          <div
            className={`grid md:grid-cols-3 ${
              concise ? "mt-0.5 gap-0.5 print:mt-0.5" : "mt-4 gap-4 print:mt-3"
            }`}
          >
            <ApplicationCard
              title="Courageous Self"
              futureSelf="I am someone who moves with direction, even through uncertainty."
              attention="I notice openings to speak up, reach out, and take the next brave step."
              obstacle="I feel scared of rejection, failure, being judged, or not knowing what comes next."
              ifThen="If fear makes me want to shrink, then I will take one brave next step before overthinking it."
              concise={concise}
            />
            <ApplicationCard
              title="Healthy Self"
              futureSelf="I am someone who takes care of my body and mind."
              attention="I notice how what I do effects energy, stress, and body, and long-term outcomes."
              obstacle="When it comes time to workout, I just want to lay in bed"
              ifThen="If it is time to work out and I just want to lay in bed, then I will go to the gym and do one set. After that, I can leave if I want to."
              concise={concise}
            />
            <ApplicationCard
              title="Independent Self"
              futureSelf="I am someone who takes care of my time, money, and responsibilities"
              attention="I notice deadlines, spending, and small responsibilities before they snowball."
              obstacle="I get overwhelmed and avoid responsibilities."
              ifThen="If I feel overwhelmed, then I will take five deep breaths and complete one small task before doing anything else."
              concise={concise}
            />
          </div>
        </section>

        <section
          className={`text-center print:pt-4 ${concise ? "pt-1" : "pt-7"}`}
        >
          <SectionLabel concise={concise}>Closing</SectionLabel>
          <blockquote
            className={`mx-auto max-w-2xl font-semibold leading-tight tracking-[-0.035em] text-white print:mt-4 print:text-[1.55rem] ${
              concise ? "mt-0.5 text-[0.5rem]" : "mt-6 text-3xl"
            }`}
          >
            You can let fulfillment, relationships, growth, health, freedom, and
            opportunity slip by, while setbacks, rejection, comparison, fear,
            stress, and doubt dominate attention.
          </blockquote>
          <p
            className={`text-white/52 print:mt-3 print:text-[10.5px] ${
              concise ? "mt-0.5 text-[4.5px]" : "mt-5 text-sm"
            }`}
          >
            What are you training yourself to notice?
          </p>
        </section>
        <SourcesSection concise={concise} />
      </article>
    </main>
  );
}
