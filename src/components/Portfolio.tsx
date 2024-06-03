import { FunctionComponent, useState } from 'react';
import projectsData from '../data/projects.json';
import ProjectModal from './ProjectModal';

const Portfolio: FunctionComponent = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="min-h-screen p-8 bg-primaryBg">
            <h1 className="text-4xl font-bold mb-8 text-center uppercase border-b-2 border-orange-500">Portfolio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
};

export default Portfolio;
