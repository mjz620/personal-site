import { Link } from "react-router-dom";
import FaqAccordion, { type FaqItem } from "../components/FaqAccordion";
import HonorsMarquee, { type Honor } from "../components/HonorsMarquee";
import ScrollFloat from "../components/ScrollFloat";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = ["about", "experience", "projects", "fun"];

type HighlightPart = {
  text: string;
  href?: string;
  bold?: boolean;
  underline?: boolean;
};

type Highlight = {
  parts: HighlightPart[];
};

const highlights: Highlight[] = [
  {
    parts: [
      { text: "cs + math @ " },
      { text: "mit", bold: true },
    ],
  },
  {
    parts: [
      { text: "machine learning intern @ " },
      { text: "world bank", bold: true },
    ],
  },
  {
    parts: [
      { text: "treehacks 2026 winner (" },
      {
        text: "carelink",
        href: "https://devpost.com/software/carelink-k1pzeh",
        underline: true,
        bold: true,
      },
      { text: ")" },
    ],
  },
  {
    parts: [
      { text: "hackmit", bold: true },
      { text: " organizer" },
    ],
  },
];

const contactLinks = [
  {
    label: "mjz@mit.edu",
    href: "mailto:mjz@mit.edu",
    icon: FaEnvelope,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/mingjia-zhang-947419359/",
    icon: FaLinkedin,
  },
  {
    label: "github",
    href: "https://github.com/mjz620",
    icon: FaGithub,
  },
];

type CardItem = {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  detail?: string;
  tags: string[];
  href?: string;
};

const experienceItems: CardItem[] = [
  {
    category: "Internship",
    title: "Machine Learning Intern",
    subtitle: "World Bank Group — Development Impact AI",
    description:
      "Developing generative ML methods for augmenting training data and improving performance of ZeroHungerAI, a food insecurity forecasting tool.",
    detail: "May 2026 – present · Washington, DC",
    tags: ["generative ml", "data science", "time-series forecasting"],
  },
  {
    category: "Research",
    title: "Researcher, ML for Materials",
    subtitle: "MIT DMSE — Rafael Gómez-Bombarelli Group",
    description:
      "Built pipelines to evaluate active learning acquisition functions, detect out-of-distribution atomic structures, and analyze latent representations across neural-network materials models with SLURM HPC support.",
    detail: "Sep 2025 – May 2026 · Cambridge, MA",
    tags: ["pytorch", "high-performance computing", "bash"],
  },
  {
    category: "Research",
    title: "Researcher, Enzymatic Biochemistry",
    subtitle: "Summer Science Program",
    description:
      "Characterized an enzyme implicated in fungal pathogenesis through activity assays and computationally optimized a fungicidal enzyme inhibitor candidate.",
    detail: "Jun 2024 – Jul 2024 · West Lafayette, IN",
    tags: ["technical writing", "computational molecular design", "biochemical lab skills"],
  },
];

const projectItems: CardItem[] = [
  {
    category: "Hackathon",
    title: "CareLink",
    subtitle: "TreeHacks @ Stanford · Elastic Sponsor Prize Winner",
    description:
      "Built end-to-end agentic voice AI with clinical reasoning using Claude SDK to automate post-surgery follow-up calls, adapt questions based on symptoms, and flag complications for clinician review. Implemented RAG over clinical guidelines using Elasticsearch vector retrieval.",
    detail: "Feb 2026",
    tags: ["react", "agentic RAG", "elevenlabs", "twilio", "elasticsearch"],
    href: "https://devpost.com/software/carelink-k1pzeh",
  },
  {
    category: "Research",
    title: "M3 Math Modeling Champion Paper",
    subtitle: "MathWorks Math Modeling Challenge · Champion",
    description:
      "Winner of $20,000 grand prize out of 794 teams. Developed thermodynamics-based and regression models to identify drivers of heatwave vulnerability and prioritize targeted resource allocation; published in SIAM Undergraduate Research Online.",
    detail: "Mar 2025 - May 2025",
    tags: ["python", "r", "modeling", "regression"],
    href: "https://www.siam.org/media/cyujop5z/s177755.pdf",
  },
  {
    category: "Personal",
    title: "cv project",
    subtitle: "in progress :)",
    description:
      "pipeline in the works... deployed soon! dancing (collecting data) in the meantime",
    detail: "Jun 2026 - present",
    tags: ["mediapipe", "opencv", "librosa"],
  },
];

const honorItems: Honor[] = [
  {
    parts: [
      { text: "M3 Challenge Champion" },
    ],
  },
  {
    parts: [
      { text: "TreeHacks 2026 Winner" },
    ],
  },
  {
    parts: [
      { text: "AIME Qualifier & MP4G Invitee"},
    ],
  },
  {
    parts: [
      { text: "YC AI Startup School Invitee"},
    ],
  },
  {
    parts: [
      { text: "Jane Street WiSE Invitee"},
    ],
  },
  {
    parts: [
      { text: "2x USNCO T50"},
    ],
  },
];

const funItems: FaqItem[] = [
  {
    question: "you do art?",
    answer: (
      <>
        i love making things. i help design the hackmit website, promotional materials, merchandise, and more!
        i've designed and created a dress from scratch for mit gala (campus' spring fashion show). i also just love
        drawing and painting.{" "}
        <Link
          to="/art"
          className="font-bold text-[#7e61b4] underline underline-offset-4 transition-colors duration-200 hover:text-[#5f4b8b]"
        >
          view my portfolio →
        </Link>
      </>
    ),
  },
  {
    question: "what have you been up to, and what's next?",
    answer: "interning in dc right now; working on projects in my free time and learning as much as i can. i'll be going to sf for yc ai startup school (sus) at the end of july, followed by jane street wise reunion in nyc!",
  },
  {
    question: "recent highlights?",
    answer: (
      <>
        photos!{" "}
        <Link
          to="/photos"
          className="font-bold text-[#7e61b4] underline underline-offset-4 transition-colors duration-200 hover:text-[#5f4b8b]"
        >
          see my album →
        </Link>
      </>
    ),
  },
  {
    question: "favorite drink?",
    answer: "white champaca matcha from molly tea, 0% sugar, iced",
  },
  {
    question: "thoughts on beli?",
    answer: "as of 6/17/2026, 235 restaurants and counting! follow me @mingjiazhang :D",
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-16 pt-12">
          <nav className="flex items-center justify-between border-b border-neutral-500 pb-7">
            <Link
              to="/"
              className="inline-block text-4xl font-bold text-[#7e61b4] tracking-tight float-hover"
            >
              mjz
            </Link>

            <div className="flex gap-24 text-3xl">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="inline-block transition-colors duration-200 hover:text-[#7e61b4] float-hover"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-16 pt-44">
        <section className="mx-auto flex max-w-[1300px] items-start justify-between">
          <div className="max-w-4xl">
            <ScrollFloat>
              <h1 className="group relative text-5xl font-bold italic leading-tight float-hover">
                hi, i'm{" "}
                <span className="inline-block text-[#7e61b4]">mingjia!</span>{" "}
                <span className="text-xl font-normal italic text-neutral-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  (rhymes with ninja)
                </span>
              </h1>
            </ScrollFloat>

            <ScrollFloat>
              <ul className="mt-16 space-y-7 pl-4 text-2xl font-light leading-relaxed">
                {highlights.map((highlight, highlightIndex) => (
                  <li
                    key={highlightIndex}
                    className="flex items-start gap-5 float-hover"
                  >
                    <span className="mt-3 text-xl leading-none text-[#7e61b4]">
                      ✦
                    </span>

                    <span>
                      {highlight.parts.map((part, partIndex) => {
                        const className = [
                          part.bold ? "font-bold" : "font-light",
                          part.underline
                            ? "underline underline-offset-4"
                            : "",
                          part.href
                            ? "transition-colors duration-200 hover:text-[#7e61b4] hover:underline"
                            : "",
                        ].join(" ");

                        return part.href ? (
                          <a
                            key={partIndex}
                            href={part.href}
                            target="_blank"
                            rel="noreferrer"
                            className={className}
                          >
                            {part.text}
                          </a>
                        ) : (
                          <span key={partIndex} className={className}>
                            {part.text}
                          </span>
                        );
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollFloat>

            <ScrollFloat>
              <div className="mt-16">
                <p className="text-2xl font-bold italic float-hover">
                  let’s connect:
                </p>

                <div className="mt-9 flex gap-16 pl-4 text-2xl font-light">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-3 transition-colors duration-200 hover:text-[#7e61b4] float-hover"
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        <Icon className="text-xl text-[#7e61b4]" />
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </ScrollFloat>
          </div>

          <ScrollFloat>
            <img
              src={`${import.meta.env.BASE_URL}IMG_9141.png`}
              alt="mingjia in florida!"
              className="w-[420px] rounded-full object-cover float-hover"
            />
          </ScrollFloat>
        </section>

        <ScrollFloat>
          <section id="about" className="mx-auto mt-32 max-w-[1300px]">
            <div>
              <h1 className="text-5xl font-bold leading-tight float-hover">
                about
              </h1>
              <p className="mt-12 text-2xl float-hover font-light">
                I'm a sophomore at MIT passionate about applied artificial intelligence, quantitative modeling, and design.
              </p>

              <p className="mt-12 text-2xl float-hover font-light">
                On campus, I serve as HackMIT's social chair, Sloan Business Club's Director of Communication Strategy,
                and as Asian Dance Team's (MIT's biggest club!) Marketing Director.
              </p>

              <p className="mt-12 text-2xl float-hover font-light">
                When I'm not psetting, you can probably find me in the Stud with Molly Tea.
              </p>
            </div>
          </section>
        </ScrollFloat>

        <ScrollFloat>
          <section id="experience" className="mx-auto mt-32 max-w-[1300px]">
            <h1 className="text-5xl font-bold leading-tight float-hover">
              experience
            </h1>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {experienceItems.map((item) => (
                <article
                  key={item.title}
                  className="float-hover flex min-h-[410px] flex-col justify-between rounded-3xl border border-neutral-300 bg-[#fbfaf7] px-9 py-8 transition-all duration-200 hover:border-[#7e61b4]/40"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full bg-[#eee9f7] px-4 py-2 text-lg font-bold text-[#5f4b8b]">
                        {item.category}
                      </span>

                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-2xl text-[#6f6480] transition-colors duration-200 hover:text-[#7e61b4]"
                          aria-label={`Open ${item.title}`}
                        >
                          ↗
                        </a>
                      )}
                    </div>

                    <h2 className="mt-7 text-3xl font-bold leading-tight text-[#2b223d]">
                      {item.title}
                    </h2>

                    {item.subtitle && (
                      <p className="mt-3 text-xl font-bold text-[#6f6480]">
                        {item.subtitle}
                      </p>
                    )}
                    {item.detail && (
                      <p className="mt-5 text-lg font-bold text-neutral-600">
                        {item.detail}
                      </p>
                    )}
                    <p className="mt-5 text-xl font-light leading-relaxed text-[#6f6480]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#eee9f7] px-4 py-2 text-base font-bold text-[#6f6480]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14">
              <HonorsMarquee items={honorItems} />
            </div>
          </section>
        </ScrollFloat>

        <ScrollFloat>
          <section id="projects" className="mx-auto mt-32 max-w-[1300px]">
            <h1 className="text-5xl font-bold leading-tight float-hover">
              projects
            </h1>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {projectItems.map((item) => (
                <article
                  key={item.title}
                  className="float-hover flex min-h-[410px] flex-col justify-between rounded-3xl border border-neutral-300 bg-[#fbfaf7] px-9 py-8 transition-all duration-200 hover:border-[#7e61b4]/40"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full bg-[#eee9f7] px-4 py-2 text-lg font-bold text-[#5f4b8b]">
                        {item.category}
                      </span>

                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-2xl text-[#6f6480] transition-colors duration-200 hover:text-[#7e61b4]"
                          aria-label={`Open ${item.title}`}
                        >
                          ↗
                        </a>
                      )}
                    </div>

                    <h2 className="mt-7 text-3xl font-bold leading-tight text-[#2b223d]">
                      {item.title}
                    </h2>

                    {item.subtitle && (
                      <p className="mt-3 text-xl font-bold text-[#6f6480]">
                        {item.subtitle}
                      </p>
                    )}
                    {item.detail && (
                      <p className="mt-5 text-lg font-bold text-neutral-600">
                        {item.detail}
                      </p>
                    )}
                    <p className="mt-5 text-xl font-light leading-relaxed text-[#6f6480]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#eee9f7] px-4 py-2 text-base font-bold text-[#6f6480]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollFloat>

        <ScrollFloat>
          <section id="fun" className="mx-auto mt-32 max-w-[1300px] pb-16">
            <div className="max-w-8xl">
              <h1 className="text-5xl font-bold leading-tight float-hover">
                fun
              </h1>
              <div className="mt-12 font-light">
                <FaqAccordion items={funItems} />
              </div>
            </div>
          </section>
        </ScrollFloat>
      </div>

      <footer className="mx-auto mt-24 max-w-[1600px] px-16 pb-8 text-center text-lg font-light text-neutral-500">
        © {new Date().getFullYear()} by mingjia zhang
      </footer>
    </main>
  );
}

export default Home;
