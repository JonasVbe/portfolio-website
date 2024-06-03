import { FunctionComponent } from 'react';
import CircularProgressBar from './CircularProgressBar';
import DetailedKnowledgeList from './DetailedKnowledgeList';
import LanguageSkills from './LanguageSkills';
import skillsData from '../../data/skills.json';

const Skills: FunctionComponent = () => {
    return (
        <div className="min-h-screen pt-20 p-8 bg-tertiaryBg flex flex-col justify-start">
            <h1 className="text-4xl font-bold mb-8 text-left uppercase border-b-2 border-tertiary">Vaardigheden</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.skills.map((skill, index) => (
                    <CircularProgressBar key={index} skill={skill} />
                ))}
            </div>
            <div className="flex justify-center my-8">
                <hr className="w-3/5 border-gray-300"/>
            </div>
            <DetailedKnowledgeList/>
            <div className="flex justify-center my-8">
                <hr className="w-3/5 border-gray-300"/>
            </div>
            <LanguageSkills/>
        </div>
    );
};

export default Skills;
