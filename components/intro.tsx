"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dhakerImg from "@/public/DHAKER SGHAIER.jpg"
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
            src={dhakerImg}
              alt="dhaker portrait"
              quality="95"
              width={100}
              height={200}
              priority={true}
              className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p><span className="font-bold">Hello, I'm Mohamed Dhaker Sghaier 👋</span></p>
        A{" "}
        <span className="font-bold">Cloud & DevOps Engineer</span> with more than {" "}
        <span className="font-bold"> 1 year</span> of proffessional experience. I enjoy
        making <span className="italic">sites & apps</span> online. As a DevOps & Cloud enthusiast, I have hands-on experience in{" "}
        <span className="underline">AWS</span>, IaC {" "} <span className="underline">Terraform</span>, configuration management via {" "}
        <span className="underline">Ansible</span>, <span className="underline">Bash</span>, and building CI/CD pipelines with{" "} <span className="underline">Jenkins</span>,{" "}
        <span className="underline">Gitlab CI/CD</span> & <span className="underline">GithubActions</span>.
        <p className="mb-10 px-4 text-center text-gray-500">
        <small className="italic text-s mt-2">
        Contact me if you want to know more about me.
        </small>
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 hover:text-green-500" 
          href="/MyResume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="border-black flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition duration-300 focus:scale-[1.15] hover:scale-[1.1] borderBlack hover:text-blue-500 dark:bg-white/10 dark:text-white/60 dark:hover:text-blue-500"
          href="https://www.linkedin.com/in/dhaker-sghaier"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:hover:text-white dark:bg-white/10 dark:text-white/60"
          href="https://github.com/dhakersghaier"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
