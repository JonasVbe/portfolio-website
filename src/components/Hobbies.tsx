import { FunctionComponent } from 'react'

interface HobbiesProps {
    hobbies: string[]
    interests: string[]
}

const Hobbies: FunctionComponent<HobbiesProps> = ({ hobbies, interests }) => {
    return (
        <div className="bg-gray-800 text-white p-8" id="hobbies">
            <h2 className="text-3xl font-bold mb-4">Hobbies and Interests</h2>
            <div className="mb-4">
                <h3 className="text-2xl font-semibold">Hobbies</h3>
                <ul className="list-disc list-inside">
                    {hobbies.map((hobby, index) => (
                        <li key={index} className="mt-1">{hobby}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">Interests</h3>
                <ul className="list-disc list-inside">
                    {interests.map((interest, index) => (
                        <li key={index} className="mt-1">{interest}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Hobbies
