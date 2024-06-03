import { FunctionComponent } from 'react';
import workExperience from '../data/workExperience.json';

interface Job {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

const WorkExperience: FunctionComponent = () => {
    return (
        <div className="min-h-screen bg-primaryBg p-8">
            <h1 className="text-4xl font-bold mb-4 text-left">WERKERVARING</h1>
            <div className="border-b-4 border-secondary w-1/4 mb-8"></div>
            <div className="relative">
                <div className="hidden lg:block absolute left-1/2 h-full border-l-4 border-secondary"></div>
                <div className="space-y-8 lg:space-y-4">
                    {workExperience.map((job: Job, index: number) => (
                        <div
                            key={index}
                            className={`relative lg:w-1/2 lg:mb-8 lg:p-4 ${
                                index % 2 === 0 ? 'lg:ml-auto lg:pl-10' : 'lg:mr-auto lg:pr-10'
                            }`}
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold mb-2">{job.position}</h2>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    {job.company} - {job.location}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {job.startDate} - {job.endDate}
                                </p>
                                <ul className="list-disc list-inside">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-gray-800">{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
