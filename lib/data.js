import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import petDogsImg from "@/public/petDogs.png"
import vgRankerImg from "@/public/vgr.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
];

export const projectsData = [
  {
    title: "Pet Dogs",
    description:
      "This is a pet dog app. Have fun with a quiz with basic dog breed info. The map can help you locate a pet shop nearby.",
    tags: ["React", "Next.js", "Tailwind", "Go"],
    imageUrl: petDogsImg,
  },
  {
    title: "Video Game Ranker",
    description:
      "Have fun with friends ranking video games. Drag and drop until certain. Use the form to make a new list.",
    tags: ["React", "Next.js", "Tailwind", "Go"],
    imageUrl: vgRankerImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "Framer Motion",
];