import {FunctionComponent} from 'react'

interface BioProps {
    name: string
    bioText: string
    profileImage: string
    birthDate: string
    location: string
    phone: string
    email: string
    linkedin: string
    twitter: string
    hobbies: string[]
    interests: string[]
}

const Bio: FunctionComponent<BioProps> = ({ name, bioText, profileImage, birthDate, location, phone, email, linkedin, twitter, hobbies, interests}) => {
    return (
        <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-16 lg:mx-32">
            <img src={profileImage} alt={`${name}'s profile`} className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
            <p className="text-gray-400">{bioText}</p>
            <p className="text-gray-400 mt-4"><strong>Birth Date:</strong> {birthDate}</p>
            <p className="text-gray-400"><strong>Location:</strong> {location}</p>
            <p className="text-gray-400"><strong>Phone:</strong> {phone}</p>
            <p className="text-gray-400"><strong>Email:</strong> <a href={`mailto:${email}`}
                                                                    className="text-blue-400">{email}</a></p>
            <p className="text-gray-400"><strong>LinkedIn:</strong> <a href={linkedin} target="_blank"
                                                                       rel="noopener noreferrer"
                                                                       className="text-blue-400">{linkedin}</a></p>
            <p className="text-gray-400"><strong>Twitter:</strong> <a href={twitter} target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="text-blue-400">{twitter}</a></p>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold text-white">Hobbies</h3>
                <ul className="list-disc list-inside text-gray-400">
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold text-white">Interests</h3>
                <ul className="list-disc list-inside text-gray-400">
                    {interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Bio
