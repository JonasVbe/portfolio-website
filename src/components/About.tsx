import { FunctionComponent } from 'react'

interface AboutProps {
    bio: string
    contactDetails: {
        email: string
        linkedin: string
        twitter: string
    }
}

const About: FunctionComponent<AboutProps> = ({ bio, contactDetails }) => {
    return (
        <div className="bg-gray-800 text-white p-8" id="about">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>{bio}</p>
            <div className="mt-4">
                <p>Email: <a href={`mailto:${contactDetails.email}`} className="text-blue-400">{contactDetails.email}</a></p>
                <p>LinkedIn: <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400">{contactDetails.linkedin}</a></p>
                <p>Twitter: <a href={contactDetails.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400">{contactDetails.twitter}</a></p>
            </div>
        </div>
    )
}

export default About
