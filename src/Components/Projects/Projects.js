import style from './Projects.module.css'
import { projects } from "../../assets/projects"

const ListProjects = () => {
  return (
    <div className={style.projects}>
      {projects.map((project, i) => (
        <div className={style.project} key={i} >
          <img
            src={require(`../../assets/images/${project.cover}`)}
            alt={project.name}
          />
          <div className={style.content}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span><strong>Tech stack: </strong>{project.techstack}</span>
            <div>
              <a href={project.live} target="_blank" rel="noreferrer"><img src={require("../../assets/images/link.png")} alt="link icon" />Live Preview</a>
              <a href={project.github} target="_blank" rel="noreferrer"><img src={require("../../assets/images/github.png")} alt="github icon" />View Code</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Projects = () => {
  return (
    <div id="Projects" className={`${style.section} section`}>
      <div className={style.container}>
        <h2>My Projects</h2>
        <br />
        <p>Lorem ipsum dolor set amit</p>
        <ListProjects />
        <div className={style.swipelabel}>
          <p>👉 Swipe to see more!</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
