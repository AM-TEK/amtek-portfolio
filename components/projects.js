import React from 'react'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section id='projects' className='mt-5 text-center scroll-mt-28 mb-28 sm:mb-14'>
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
