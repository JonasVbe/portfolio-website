import { FunctionComponent } from 'react';
import languageSkillsData from '../../data/skills.json'; // Pas dit aan naar de juiste locatie van je JSON-bestand

const LanguageSkills: FunctionComponent = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Talenkennis</h2>
            <div className="space-y-6">
                {languageSkillsData.languageSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-start">
                        <div className="flex justify-between w-full">
                            <div className="text-lg font-bold mb-2">{skill.language}</div>
                            <div className="text-sm text-gray-500 mb-2">{skill.proficiency}</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-6 mb-1">
                            <div
                                className="bg-tertiary h-6 rounded-full text-center text-white"
                                style={{ width: `${skill.percentage}%` }}
                            >
                                {skill.percentage}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageSkills;
