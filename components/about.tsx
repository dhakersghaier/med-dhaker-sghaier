"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With over a year of experience in a{" "}
      <span className="font-medium">learning-working program</span> in the IT field, I have deepened my expertise in{" "}
      <span className="font-medium">Cloud and DevOps</span> by working on both production and personal projects. My experience includes{" "}
      <span className="font-medium">designing cloud architectures with AWS</span>,{" "}
      <span className="font-medium">automating infrastructure with Terraform</span>, and{" "}
      <span className="font-medium">building CI/CD pipelines using Jenkins and Docker</span>. I am passionate about{" "}
      <span className="italic">applying my skills to more real-world challenges</span>, ensuring{" "}
      <span className="underline">efficient and scalable solutions</span>. My background in{" "}
      <span className="font-medium">telecommunications</span> and hands-on experience in IT drive my commitment to{" "}
      <span className="font-medium">continuous learning and innovation</span> in cloud technologies.
      </p>
    </motion.section>
  );
}
