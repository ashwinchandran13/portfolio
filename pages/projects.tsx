import ProjectCard from "../components/projectCard"
import { projects } from "../data"

const Projects = () => {
    return (
        <div className="p-4">
            <nav>Navbar</nav>

            <div>
                {
                    projects.map((project) => {
                        <div>
                            <ProjectCard project={project} key={project.name}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Projects
