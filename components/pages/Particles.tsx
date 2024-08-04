"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { DockDemo } from "./DockDemo";
import Image from "next/image"; // Assuming you're using next/image for image optimization
import IconCloud from "../magicui/icon-cloud";
import { StickyScrollRevealDemo } from "./Content";
import Session from "./Session";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";
import HireMe from "./HireMe";
import Stats from "./Stats";
import { CardHoverEffectDemo } from "./CardHoverEffect";

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
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-lg border bg-white md:shadow-xl">
      <div className="z-10 flex flex-col items-center text-center space-y-8">
        <Image
          src="/profile-pic.png" // Update with your image path
          alt="Atharva Joshi"
          width={300} // Adjust size as needed
          height={300} // Adjust size as needed
          className="rounded-full"
        />
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi 👋 Im
          <br className="block sm:hidden" /> Atharva Joshi
        </h1>
        <p className="text-lg md:text-2xl text-muted text-orange-950 font-bold">
          Minimialist Developer and Problem Solver
        </p>
        <DockDemo />
      </div>

      <div className="flex flex-col items-center justify-center mt-16 space-y-8 max-w-4xl p-8 bg-white rounded-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          I’m Atharva Joshi, a passionate software developer with a strong focus
          on full stack development using the MERN stack (MongoDB, Express.js,
          React, and Node.js). I am currently pursuing my undergraduate degree
          in Computer Science and Engineering, and I am in my third year of
          college. I reside in Pune, a vibrant city known for its educational
          and technological advancements.
          <br />
          <br />
          Throughout my academic journey, I have honed my skills in building
          dynamic and responsive web applications. My coursework and projects
          have provided me with a deep understanding of various web technologies
          and frameworks, enabling me to create robust and scalable
          applications. I am also an avid problem solver and enjoy tackling
          complex coding challenges on platforms like LeetCode. To date, I have
          successfully solved over 100 problems, which has significantly
          enhanced my algorithmic thinking and coding efficiency.
          <br />
          <br />
          In addition to my technical skills, I am committed to continuous
          learning and staying updated with the latest industry trends. My goal
          is to leverage my skills and knowledge to contribute to innovative
          projects and make a meaningful impact in the field of software
          development.
        </p>
        <div className="relative flex w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg p-6">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center mt-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">
          Top Skills
        </h1>
        <CardHoverEffectDemo />
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">
          My Works
        </h1>
        <StickyScrollRevealDemo />
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center mt-20">
        <Stats />
      </div>

      <div>
        <Session />
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center mt-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-20">
          Gallery
        </h1>
        <ParallaxScrollDemo />
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center my-20">
        <HireMe />
      </div>

      <Particles
        className="absolute inset-0"
        quantity={1800}
        ease={180}
        color="#00000"
        refresh
      />
    </div>
  );
}

export { ParticlesDemo };
