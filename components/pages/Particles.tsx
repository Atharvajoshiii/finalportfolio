"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { DockDemo } from "./DockDemo";
import Image from "next/image"; // Assuming you're using next/image for image optimization
import IconCloud from "../magicui/icon-cloud";
import { StickyScrollRevealDemo } from "./Content";
import { FollowingPointerDemo } from "./FollowingPointerDemo";
import Session from "./Session";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";
import HireMe from "./HireMe";
import Meteors from "../magicui/meteors";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-lg border bg-white md:shadow-xl ">
      
      
      <div className="z-10 flex flex-col items-center text-center space-y-8">
        <Image
          src="/profile-pic.png" // Update with your image path
          alt="Atharva Joshi"
          width={300} // Adjust size as needed
          height={300} // Adjust size as needed
          className="rounded-full"
        />
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi 👋 I'm<br className="block sm:hidden" /> Atharva Joshi
        </h1>
        <p className="text-lg md:text-2xl text-muted text-orange-950 font-bold">Minimialist Developer and Problem Solver</p>
        <DockDemo />
      </div>
      <div className="flex flex-col items-center justify-center mt-16 space-y-8 max-w-4xl p-8 bg-white rounded-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">About Me</h1>
        <p className="text-lg md:text-xl text-gray-700">
          I’m Atharva Joshi, a passionate software developer specializing in full stack development using the MERN stack. <br/>
          I am a computer science and Engineering Undergrad, currently in my 3rd year of college. I live in Pune. <br/>
          I am proficient in solving questions on LeetCode and have solved over 100+ questions.
        </p>
        <div className="relative flex w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg p-6">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <div className="relative z-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black">My Works</h1>
        <StickyScrollRevealDemo />
      </div>
      <div>
        <Session/>
      </div>
      <div className="relative z-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-20">Gallery</h1>
        <ParallaxScrollDemo/>
      </div>

      
      
      <div className="relative z-20 flex flex-col justify-center items-center my-20">
        <HireMe />
      </div>
      
      <Particles
        className="absolute inset-0"
        quantity={800}
        ease={180}
        color={color}
        refresh
      />

      
      
    </div>
  );
}

export { ParticlesDemo };
