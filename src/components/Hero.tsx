import { FunctionComponent } from 'react'

interface HeroProps {
    name: string
    title: string
    bio: string
    image: string
}

const Hero: FunctionComponent<HeroProps> = ({ name, title, bio, image }) => {
    return (
        <div className="bg-gray-800 text-white p-8 flex flex-col items-center">
            <img src={image} alt={`${name}`} className="w-32 h-32 rounded-full mb-4" />
            <h1 className="text-4xl font-bold">{name}</h1>
            <h2 className="text-2xl mt-2">{title}</h2>
            <p className="mt-4 text-center">{bio}</p>
        </div>
    )
}

export default Hero
