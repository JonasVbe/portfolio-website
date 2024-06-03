import { FunctionComponent } from 'react';
import educationData from '../data/education.json';

interface FormalEducation {
    degree: string;
    institution: string;
    year: number;
}

interface Course {
    course: string;
    institution: string;
    year: number;
    description?: string;
}

const Education: FunctionComponent = () => {
    return (
        <div className="min-h-screen p-8 bg-tertiaryBg">
            <h1 className="text-4xl font-bold mb-8 text-center uppercase border-b-2 border-orange-500">Opleiding</h1>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 pr-4">
                    <h2 className="text-3xl font-bold mb-4">School</h2>
                    {educationData.education.formal.map((item: FormalEducation, index: number) => (
                        <div key={index} className="mb-6 p-4 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">{item.degree}</h3>
                            <p className="text-lg">{item.institution}</p>
                            <p className="text-md text-gray-500">Succesvol beëindigd in {item.year}</p>
                        </div>
                    ))}
                </div>

                <div className="md:w-1/2 pl-4">
                    <h2 className="text-3xl font-bold mb-4">Cursussen</h2>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        {educationData.education.courses.map((item: Course, index: number) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-xl font-semibold">{item.course}</h3>
                                <p className="text-md">{item.institution}, {item.year}</p>
                                {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
