import React from 'react';
import { BackgroundGradientDemo } from './BackgroundGradientDemo';

function Session() {
  return (
    <div className="bg-transparent flex flex-col items-center p-8 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BackgroundGradientDemo
          imageUrl="/session1.jpg"
          altText="jordans"
          title="Intro to DSA and CP"
          description="A comprehensive introduction to Data Structures and Algorithms (DSA) and Competitive Programming (CP). This session covered the fundamental concepts and problem-solving techniques essential for excelling in coding competitions and technical interviews."
        />
        <BackgroundGradientDemo
          imageUrl="/session2.jpg"
          altText="jordans"
          title="Two Pointer and Sliding Window"
          description="An in-depth webinar on Two Pointer and Sliding Window techniques. These are crucial for solving a variety of problems efficiently, including those involving subarrays and subsequences."
        />
        <BackgroundGradientDemo
          imageUrl="/dsa.jpg"
          altText="dsa lead"
          title="Data Structure And Algorithm Lead"
          description=""
        />
      </div>
    </div>
  );
}

export default Session;
