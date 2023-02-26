import projects from '../assets/portfolioIndex'

export default function Home() {
  return (
    <main>
      {projects.map((project) => {
        <>
          <section>
            <img src={`../images/{project.filename}`} />
            <div>
              <h2>{project.title}</h2>
              <p>Very short description of why this project is awesome, I used lots of tech yo! Great times had by all!</p>
              <a href={project.github} target="_blank">GitHub Link</a>
              <a href={project.link} target="_blank">Active Link</a>
            </div>
          </section>
          <hr></hr>
        </>
      })}
    </main>
  )
};