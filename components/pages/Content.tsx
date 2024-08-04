"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "JSAlgorithms",
    description:
      "JSAlgorithms is an npm package that provides a collection of fundamental algorithms implemented in JavaScript. It's designed to help developers understand and implement algorithms efficiently in their projects.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/jsalgorithms.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="jsalgorithms npm package"
        />
        
      </div>
    
    ),
    href:"https://www.npmjs.com/package/@atharvawebworks/jsalgorithms"
  },
  {
    title: "AI Text Generator",
    description:
      "AI Text Generator is a project built using Gemini that generates human-like text based on user input. It leverages advanced AI models to assist with content creation, making it a powerful tool for writers and marketers.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/aigenerator.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI Text Generator project"
        />
        
      </div>
    ),
    href:"https://aitextgenerator.netlify.app/"
  },
  {
    title: "Blog Application",
    description:
      "A full-stack blog application built using the MERN stack. It features user authentication, post creation, and real-time updates. This project demonstrates a comprehensive implementation of a modern web application.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex flex-col items-center justify-center text-white">
        <Image
          src="/blog.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Blog Application"
        />
        
      </div>
    ),
    href:"https://github.com/Atharvajoshiii/Full-stack-blog-application"
  },
  {
    title: "Real-time Chat Application",
    description:
      "A real-time chat application built using the MERN stack. It features group chat functionality, real-time messaging, and WebSocket integration for a seamless communication experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex flex-col items-center justify-center text-white">
        <Image
          src="/chat.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Real-time Chat Application"
        />
        
      </div>
    ),
    href:""
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
