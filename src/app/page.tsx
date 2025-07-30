/* eslint-disable */
"use client";
import Image from "next/image";
import Navabar from "@/components/global/navbar";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { FlipWords } from "@/components/ui/flip-words";
import Badge from "@/components/ui/badge";
import Projects from "@/components/ui/projects";
import { Timeline } from "@/components/ui/timeline";
import ExpandabelCard from "@/components/ui/expandable-cards";
import TechStack from "@/components/ui/tech-stack";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Meteors } from "@/components/ui/meteors";
import TopBar from "@/components/global/topbar";
export default function Home() {
  return (
    <main>
      <TopBar />
      <div className="flex justify-center gap-x-8 items-center h-screen bg-black ">
        <div className=" hidden md:flex items-center justify-center w-1/3 h-screen ">
          <Badge />
        </div>
        <div className="flex flex-col max-auto justify-end items-center md:items-start">
          <div className="text-[clamp(2.5rem,10vw,7rem)] leading-none font-semibold w-full  text-neutral-800 dark:text-neutral-400 text-center md:text-end">
            Developer&nbsp;
            <br />
            who's&nbsp;
            <br />
            <FlipWords words={words} />
          </div>
        </div>
      </div>
      <Meteors number={20} />

      <Timeline data={data} />
      <p className=" text-center mb-8 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Projects
      </p>
      <Projects />

      <div className="mt-14">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
              "As a versatile developer, I bring expertise in front-end,
              back-end, cloud, and blockchain technologies".
            </p>
          }
          className="h-[20rem] border rounded-md"
        >
          If it involves code, I've probably
          <span className="text-red-500"> broken it once, </span> then learned
          how to <span className="text-red-500">fix it twice!</span>.
        </MaskContainer>
      </div>
      <p className=" text-center mb-4 mt-32 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Tech Stack
      </p>
      <TechStack />
      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text="SHIVAM" />
      </div>
    </main>
  );
}

//CONTENT NOT CODE!!!!!!!!!!

const words = ["creative", "versatile", "builder", "innovator"];

const data = [
  {
    title: "Bytesview Analytics",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Developed robust APIs and customized the Django Admin panel with
          dynamic dashboards, custom filters, and inline models—streamlining
          admin operations and enhancing team productivity for the CryptoReach
          project.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Leveraged advanced web scraping techniques to parse and structure
          large-scale news data from XML feeds for NewsData.io, enabling
          efficient analysis and retrieval of financial news content.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <Image
            src="https://i0.wp.com/www.bytesview.com/blog/wp-content/uploads/2023/02/7f786ce0a9a4caa7283a3bbaedb0890b.jpg?fit=1584%2C891&ssl=1"
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Ministry Of Housing And Urban Affairs",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Around April of '23 I dugged into ground conditions (literally) and
          built a website that checked all the boxes for government
          guidelines—think accessibility features for blind and deaf users, plus
          color blindness support, all crafted with the basics of HTML5, CSS,
          and a pinch of JavaScript.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Sketched out the design in Figma, brought it to life ,handled all the
          backend magic with Firebase as BaaS. Finally, launched the whole
          prototype on DigitalOcean, making sure it was as smooth and
          user-friendly as a government site can get!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://drive.google.com/uc?export=view&id=14QaWqHHzQXoNNTyspyLXK5PYIxlfK_g9"
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Google Student Developer Club",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I was in my second year of college when I was recruited as Co-Lead of
          the Google Student Developer Club—clearly, they saw potential beyond
          just surviving exams!
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Led a team to organize online and offline webinars, introducing
          college students to Google development tools like Flutter and upcoming
          competitions, including the Google Solution Challenge.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          During this whirlwind of events, I managed to snag my first hackathon
          win🏆—proving that all those late-night coding sessions weren’t just
          for show and that caffeine truly is the programmer's best friend!
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Later in 2023, I was promoted to Public Relations Lead, where I
          shortlisted and interviewed over 250+ students for recruitment.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://drive.google.com/uc?export=view&id=1AzZoy79acRJt4RjNnOIYkD6cGNU5JpON"
            alt="Hac1"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://drive.google.com/uc?export=view&id=1JywOV0fXVsBzzCj2agGzW3QVPB20A63p"
            alt="hack2"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Zuraverse Private Limited",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          I was always facinated by blockchain technology and hence during
          August of '23 I joined the team at Zuraverse to explore the
          everchanging world of Web3. Here I was introduced to the fast pace
          game of startups.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          During my time at Zuraverse I built a dynamic 3D map module using
          Three.js for the play to earn and conserve game Virtual Forest—perfect
          for visualizing plantations and keeping users engaged.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          On top of that, I organized as well as attended various Web3 events,
          dived into discussions about new projects, brainstorming ways to
          improve our current designs, and learning all about smart contracts. I
          even got introduced to Web3 security—let’s just say I learned a lot
          and my brain was buzzing with ideas!
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://drive.google.com/uc?export=view&id=1gPwZkf7D-cQsMBXUBAF0ef20b3G9LnY4"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Delhi Technological University Inhouse Internship",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Currently working as an Inhouse Intern withing my University on
          network simulations with NETSIM, where I've been on a mission to
          identify bottlenecks and tweak configurations to boost network
          performance.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          I’ve been running simulations to optimize and troubleshoot network
          setups, making sure everything runs as smoothly as possible.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Plus, I’m using NETSIM's Random Number Generator and Seed Value
          techniques to keep my simulations replicable and consistent—ensuring
          that I can get the same results every time (because who wants random
          surprises?).
        </p>

        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
];
