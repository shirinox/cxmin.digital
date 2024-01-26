import {
  SiTailwindcss,
  SiVercel,
  SiMysql,
  SiPostgresql,
  SiPlanetscale,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
  SiFigma,
  SiVisualstudiocode,
  SiNeovim,
  SiGo,
  SiFramer,
  SiOpenai,
  SiPrisma,
  SiDiscord,
  SiLinkedin,
  SiUpwork,
  SiX,
  SiMedium,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { MousePointerClick, Quote } from "lucide-react";
import GridCell from "./_components/grid";

export default async function Home() {
  return (
    <div>
      <div className="mb-6 flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="cxmin.digital logo"
            width={120}
            height={36}
          />
        </Link>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-lime-400 shadow shadow-lime-400" />
          <Link href={"mailto:work@cxmin.digital"}>
            <span className="font-medium text-white">Available for work</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto grid h-[120vh] max-w-[1920px] grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <GridCell className="grid bg-[#212B88]">
          <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2">
            <div className="mt-auto">
              <MousePointerClick className="hidden h-16 w-16 2xl:block" />
              <h1>
                I&apos;m <span className="text-6xl">Cosmin</span>, a designer
                and developer from Romania.
              </h1>
            </div>
            <p className="mt-3 2xl:mt-auto">
              I have been freelancing most of my work for the past 3 years.
              Planning, designing, building and launching all of my work by
              myself, allowed me to have a large suite of skills, such as
              branding, unique designs & proficient time management.
            </p>
          </div>
        </GridCell>
        <GridCell className="relative grid bg-[#06483C]">
          <Image
            className="absolute right-0 top-2 z-10 rotate-[180deg] opacity-30 sm:hidden md:block 2xl:top-16 2xl:block"
            src="/contact.svg"
            alt="mail flying vector"
            width={250}
            height={220}
          />
          <div className="z-30 mt-auto text-clip">
            <h2 className="text-[#19826F]">LET&apos;S TALK</h2>
            <h2 className="mb-2 text-[#20A68E]">SEND ME A MESSAGE.</h2>
            <Link
              className="font-medium text-[#20A68E] underline"
              href={"mailto:work@cxmin.digital"}
            >
              work@cxmin.digital
            </Link>
          </div>
        </GridCell>
        <GridCell className="bg-[#FFDBBA] text-[#181818]">
          <div className="mt-auto">
            <h2 className="mb-4">TECHSTACK</h2>
            <div className="grid w-full grid-cols-7 gap-4">
              <SiNextdotjs size={32} />
              <SiReact size={32} />
              <SiPrisma size={32} />
              <SiJavascript size={32} />
              <SiTypescript size={32} />
              <SiGo size={32} />
              <SiGit size={32} />
              <SiGithub size={32} />
              <SiTailwindcss size={32} />
              <SiFramer size={32} />
              <SiFigma size={32} />
              <FaAws size={32} />
              <SiVercel size={32} />
              <SiOpenai size={32} />
              <SiPostgresql size={32} />
              <SiMysql size={32} />
              <SiPlanetscale size={32} />
              <SiVisualstudiocode size={32} />
              <SiNeovim size={32} />
            </div>
          </div>
        </GridCell>
        <GridCell className="flex flex-col bg-[#D3BEFF] text-lg font-medium text-[#181818]">
          <Quote size={48} stroke="transparent" fill="#181818" />
          <p className="mt-2">
            I recently had Cosmin develop a website for my gym, and I
            couldn&apos;t be happier with the result. The site is clean, easy to
            navigate, and perfectly captures the essence of our gym.
            Cosmin&apos;s attention to detail and quick turnaround time were
            impressive. It&apos;s been a big help for our online presence.
          </p>
          <div className="mt-16 flex flex-col text-right 2xl:mt-auto">
            <span className="text-4xl font-extrabold uppercase">Mihai</span>
            <span>GALAGYM</span>
          </div>
        </GridCell>
        <GridCell className="bg-[#882134] md:col-span-2">
          <h2 className="text-[#FFC1CC]">Design Philosophy</h2>
          <p className="w-full font-medium text-[#FF8CA1]">
            In a digital world that never stops changing,{" "}
            <b className="text-lg uppercase text-[#FFE9ED]">you</b> will find
            that my design philosophy is committed to producing work that{" "}
            <b className="text-lg uppercase text-[#FFE9ED]">will</b> capture
            attention visually and serve a practical purpose, ensuring
            you&apos;ll <b className="text-lg uppercase text-[#FFE9ED]">only</b>{" "}
            want to engage with the content. You will see designs that are
            uncluttered and direct, which users can clearly{" "}
            <b className="text-lg uppercase text-[#FFE9ED]">read</b>,
            emphasizing user-friendliness and the efficient delivery of
            information without unnecessary extras. Each project is developed
            with a keen attention to detail, crafted to be responsive,
            guaranteeing that you will have a smooth and consistent experience
            on any device.{" "}
            <b className="text-lg uppercase text-[#FFE9ED]">This</b> process is
            the user. I spend time to truly understand what you, the end-user,
            will need and how you interact, making sure that accessibility and
            active engagement are at the heart of every creative choice I make.
          </p>
        </GridCell>
        <GridCell className="relative col-span-full grid bg-[#C9FFF2] text-center">
          <h2 className="mb-4 text-[#181818]">LET&apos;S GET SOCIAL</h2>
          <div className="mx-auto grid w-full max-w-64 grid-cols-4 gap-4 text-[#181818]">
            <Link href="https://discord.gg/BNxHGCrDXA">
              <SiDiscord size={32} />
            </Link>
            <Link href={"https://www.linkedin.com/in/tatucosmin/"}>
              <SiLinkedin size={32} />
            </Link>
            <Link
              href={"https://www.upwork.com/freelancers/~011769b54eb474643c"}
            >
              <SiUpwork size={32} />
            </Link>
            <Link href={"https://twitter.com/cxmindigital"}>
              <SiX size={32} />
            </Link>
            <Link
              className="col-span-2 mx-auto"
              href={"https://medium.com/@cxmindigital"}
            >
              <SiMedium size={32} />
            </Link>
            <Link
              className="col-span-2 mx-auto"
              href={"https://github.com/shirinox"}
            >
              <SiGithub size={32} />
            </Link>
          </div>
        </GridCell>
      </div>
    </div>
  );
}
