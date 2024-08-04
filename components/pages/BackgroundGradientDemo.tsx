"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

interface BackgroundGradientDemoProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  
}

export function BackgroundGradientDemo({
  imageUrl,
  altText,
  title,
  description,
  
}: BackgroundGradientDemoProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={imageUrl}
          alt={altText}
          height="500"
          width="500"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        
      </BackgroundGradient>
    </div>
  );
}
