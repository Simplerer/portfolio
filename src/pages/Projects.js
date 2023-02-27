import projects from '../assets/portfolioIndex'
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <main>
      {projects.map(project => (
        <React.Fragment key={project.id}>
          <section className='projects'>
            <a href={project.link} target={"_blank"} rel="noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/${project.filename}`} alt="project images" /></a>
            <div className='info'>
              <h2><a href={project.github} target={"_blank"} rel="noreferrer">
                {project.title}</a></h2>
              <p>{project.description}</p>
            </div>
          </section>
          <hr></hr>
        </React.Fragment>
      ))}
    </main>
  )
};