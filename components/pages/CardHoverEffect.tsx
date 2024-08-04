import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={skills} />
    </div>
  );
}

export const skills = [
  {
    title: "Building Apps on Flutter",
    description:
      "Experienced in developing high-performance mobile applications using Flutter.",
    link: "https://flutter.dev",
  },
  {
    title: "Web Development with MERN Stack",
    description:
      "Proficient in creating dynamic and responsive websites using MongoDB, Express.js, React, and Node.js.",
    link: "https://mern.io",
  },
  {
    title: "Proficient in Python",
    description:
      "Experienced in writing clean and efficient code in Python for various applications.",
    link: "https://www.python.org",
  },
  {
    title: "Proficient in Java",
    description:
      "Skilled in developing robust applications using Java and its frameworks.",
    link: "https://www.java.com",
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Strong understanding of DSA and its applications in optimizing code performance.",
    link: "https://en.wikipedia.org/wiki/Data_structure",
  },
  {
    title: "Real-time Communication with WebSockets",
    description:
      "Experienced in implementing real-time features and communication using WebSockets.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  },
];
