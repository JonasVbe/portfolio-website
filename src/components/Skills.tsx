import { FunctionComponent } from 'react';

interface Skill {
    name: string;
    level: number;
}

const skills: Skill[] = [
    { name: 'C#', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'Angular', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Java', level: 65 },
];

const Skills: FunctionComponent = () => {
    return (
        <div className="p-8 bg-white">
            <h1 className="text-3xl font-bold mb-4">Vaardigheden</h1>
            {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                    <h2 className="text-lg font-semibold">{skill.name}</h2>
                    <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
