import projects from '../assets/portfolioIndex'
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <main>
      {projects.map(project => (
        <React.Fragment key={project.id}>
          <section>
            <img src={`${process.env.PUBLIC_URL}/images/${project.filename}`} alt="project images" />
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target={"_blank"} rel="noreferrer">GitHub Link</a>
              <a href={project.link} target={"_blank"} rel="noreferrer">Active Link</a>
            </div>
          </section>
          <hr></hr>
        </React.Fragment>
      ))}
    </main>
  )
};