"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-18 max-w-[45rem] text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor's degree in <span className="font-medium">CSE</span> from the <span className="font-semibold"> Indian Institute of Technology</span> (ISM) Dhanbad,  I developed a strong passion for learning and working with various tech stacks. My experience spans <span className="underline"> full-stack development</span>, <span className="underline">AI-driven solutions</span>, and <span className="underline">cloud technologies</span>. I enjoy diving into new technologies and constantly expanding my skill set, with a focus on building scalable and efficient applications. <span className="italic">My favorite part of programming</span> is the <span className="font-medium">ever-evolving nature </span> of it. It keeps me <span className="underline">motivated</span> to continuously learn and improve. 
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy reading novels, sometimes non-fiction too. I am currently
        learning about <span className="font-medium">economics and game theory</span>. I also enjoy watching movies, playing video games and basking in the latest tech trends.
      </p>
    </motion.section>
  );
}