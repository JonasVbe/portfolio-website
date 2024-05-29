import {FunctionComponent} from 'react'

interface skill {
    name: string
    level: number
    logo: string
}
interface SkillBarProps {
    skill: skill

}



const SkillBar: FunctionComponent<SkillBarProps> = ({skill}) => {
    return (
        <div className="flex items-center my-4">
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-10 h-10 mr-4"/>
            <div className="flex-grow">
                <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: `${skill.level}%`}}></div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar
