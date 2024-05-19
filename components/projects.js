import React from 'react'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section id='projects' className='mt-10 mb-10 max-w-[45rem] text-center leading-8 sm:mb-14 scroll-mt-28 card'>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}
