import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import petDogsImg from "@/public/petDogs3.png";
import vgRankerImg from "@/public/vgr2.png";
import mernBooksImg from "@/public/mernBooks.png";
import pivotImg from "@/public/pivotImg.png";

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
      "This is a pet dog app. Have fun browsing a list of dogs and add your favorites! The map can help you locate a pet shop nearby.",
    tags: ["React", "Next.js", "Tailwind", "API", "GoogleMaps", "CSS"],
    imageUrl: petDogsImg,
    githubUrl: 'https://github.com/AM-TEK/pet-dogs',
    websiteUrl: 'https://pet-dogs.vercel.app/',
  },
  {
    title: "Video Game Ranker",
    description:
      "Have fun with friends ranking video games. Drag and drop until certain. Use the form to make a new list.",
    tags: ["React", "Next.js", "Tailwind", "Go"],
    imageUrl: vgRankerImg,
    githubUrl: 'https://github.com/AM-TEK/vgranker',
    websiteUrl: 'https://videogame-ranker.vercel.app/',
  },
  {
    title: "Personal Book Library",
    description:
      "This app focuses on CRUD operations for handling book data. It was a fun learning experience to transfer my real books into a digital format!",
    tags: ["NodeJS", "MongoDB", "Mongoose", "Express", "Tailwind"],
    imageUrl: mernBooksImg,
    githubUrl: 'https://github.com/AM-TEK/mern-books-app',
    websiteUrl: 'https://mern-books-library-frontend.vercel.app/'
  },
  {
    title: "Business Client Website",
    description:
      "Website showcasing business client's services and contact information.",
    tags: ["Python", "Flask", "HTML", "CSS"],
    imageUrl: pivotImg,
    githubUrl: 'https://github.com/AM-TEK/pivot-website',
    websiteUrl: 'https://elsazambranopivot.vercel.app/',
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Vercel",
  "Express",
  "Figma",
  "SQL",
  "Cisco Packet Tracer",
  "VMware",
  "Microsoft OS"
];