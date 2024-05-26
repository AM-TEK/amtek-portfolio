"use client"
import React from 'react'
import { Button, Card, CardBody } from '@nextui-org/react';
import { projectsData } from '@/lib/data';
import Image from "next/image";


export default function Project({title, description, tags, imageUrl, githubUrl, websiteUrl}) {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mt-4"
      shadow="sm"
    >
      <CardBody>
        <div className="grid items-center justify-center grid-cols-6 gap-6 pt-3 sm:grid-cols-12 sm:gap-4">
          <div className="relative flex justify-center col-span-6 md:col-span-4">
            <Image
              alt={title}
              // className="object-cover"
              style={{objectFit: "contain"}}
              shadow="md"
              src={imageUrl}
              height={200}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-0">
                <div className="flex items-center">
                    <h1 className="font-semibold text-large text-foreground/90">{title}</h1>
                    <span className="mx-2 text-foreground/60">|</span>
                    <div className="flex gap-2">
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm">GitHub</a>
                      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm">Website</a>
                    </div>
                  </div>
                <p className="text-small text-foreground/80">{description}</p>
                <ul className="flex flex-wrap gap-2 mt-4 sm:mt-4">
                  {tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
