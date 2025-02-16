"use client"

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import profilePic from "@/public/alejandroPortrait.jpeg"
import brandImage from "@/public/AM-TEK.jpg";
import comptiaLogo from "@/public/comptia-itf-certification.png";
// import comptiaCert from "@/public/CompTIA-ITF+Certification.pdf";

export default function LandingPage() {
  return (
    <section id='home' className="mb-10 max-w-[50rem] text-center sm:mb-14 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
      <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          className="absolute bg-gray-300 rounded-full shadow-xl"
          style={{
            width: "200px",
            height: "200px",
            backgroundImage: `url(${brandImage.src})`,
            backgroundSize: '70%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'black',
          }}
        ></motion.div>
        
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          ease: "linear",
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        >
          <Image 
            src={profilePic} 
            alt="Alejandro Profile Picture"
            width="200"
            height="200"
            priority={true}
            className="object-cover border-2 border-white rounded-full shadow-xl w-25 h-25"
            />
        </motion.div>
      </div>

      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl">
        <span className="font-bold">Hello, I'm Alejandro.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with 4 years of experience. I enjoy building apps & tinkering with new technology. My focus is{" "}
        <span className="font-bold">JavaScript</span> with{" "}
        <span className="italic">React & Next.js</span> .
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row">
        <a 
          className="flex items-center gap-2 py-3 transition bg-gray-400 border rounded-md outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 border-black/20" 
          href="/AM-IT-Resume.pdf" 
          target="_blank"
        >
          Download Resume 
          <HiDownload 
            className="transition opacity-60 group-hover:translate-y-1"
          />
        </a>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a 
            className="flex items-center gap-2 p-4 text-gray-800 transition bg-white border rounded-lg cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 border-black/50"
            href="/certifications/CompTIA-ITF+Certification.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              src={comptiaLogo} 
              alt="CompTIA Certification Logo" 
              width={20} 
              height={20} 
            />
          </a>
          <a 
            className="flex items-center gap-2 p-4 text-gray-800 transition bg-white border rounded-lg cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 border-black/50"
            href="https://www.linkedin.com/in/alejandro-maldonado-35929232"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a 
            className="flex items-center gap-2 p-4 text-gray-800 transition bg-white border rounded-lg focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 border-black/50"
            href="https://github.com/AM-TEK?tab=overview&from=2024-05-01&to=2024-05-14"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

