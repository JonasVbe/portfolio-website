import {FunctionComponent} from 'react'

interface Project{
    name: string
    description: string
    image: string
}
interface ProjectsProps {
    projects: Project[]
}

const Projects: FunctionComponent<ProjectsProps> = ({projects}) => {
    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-white mb-4">My Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <img src={project.image} alt={project.name} className="w-full rounded-lg"/>
                </div>
            ))}
        </div>
    )
}

export default Projects
