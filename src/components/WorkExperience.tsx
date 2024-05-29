import { FunctionComponent } from 'react'

interface Experience {
    role: string
    company: string
    description: string
    duration: string
}

interface WorkExperienceProps {
    experiences: Experience[]
}

const WorkExperience: FunctionComponent<WorkExperienceProps> = ({ experiences }) => {
    return (
        <div className="bg-gray-800 text-white p-8" id="work-experience">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                        <p className="mt-2">{exp.description}</p>
                        <p className="mt-1 text-gray-500">{exp.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience
