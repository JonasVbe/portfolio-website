import { FunctionComponent } from 'react';

interface ProjectModalProps {
    project: {
        title: string;
        images: string[];
        subtitles: string[];
        description: string;
        technologies: string[];
        link?: string;
    };
    onClose: () => void;
}

const ProjectModal: FunctionComponent<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                >
                    &times;
                </button>
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <div className="mb-4">
                        {project.images.map((image, index) => (
                            <div key={index} className="mb-4">
                                <img src={image} alt={project.subtitles[index]} className="w-full h-auto" />
                                <p className="text-gray-600 text-center mt-2">{project.subtitles[index]}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg mb-4">{project.description}</p>
                    <p className="text-lg font-bold mb-4">Technologies Used:</p>
                    <ul className="list-disc list-inside mb-4">
                        {project.technologies.map((tech, index) => (
                            <li key={index} className="text-gray-700">{tech}</li>
                        ))}
                    </ul>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Project
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
