import {FunctionComponent} from 'react'
import SkillBar from './SkillBar.tsx'
import skillsData from '../data/skills.json'

interface Skill {
    name: string
    level: number
    logo: string

}

const Skills: FunctionComponent = () => {
    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-white mb-4">My Skills</h2>
            {skillsData.map((skill: Skill, index: number) => (
                <SkillBar key={index} skill={skill}/>
            ))}
        </div>
    )
}

export default Skills
