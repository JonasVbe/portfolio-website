import { FunctionComponent } from 'react'

interface SocialLink {
    platform: string
    url: string
}

interface ContactProps {
    email: string
    socialLinks: SocialLink[]
}

const Contact: FunctionComponent<ContactProps> = ({ email, socialLinks }) => {
    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-16 lg:mx-32" id="contact">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
            <p className="text-gray-400">Email: <a href={`mailto:${email}`} className="text-blue-400">{email}</a></p>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold text-white">Social Media</h3>
                <ul className="list-disc list-inside text-gray-400">
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400">{link.platform}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Contact
