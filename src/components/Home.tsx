import { FunctionComponent } from 'react';
import overmij from '../data/overmij.json';
import backgroundImage from '../assets/HERO1.webp'; // Import the image

const Home: FunctionComponent = () => {
    return (
        <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center text-center p-4">
                <h1 className="text-4xl md:text-6xl text-white mb-4 drop-shadow-2xl">IK BEN</h1>
                <h2 className="text-3xl md:text-5xl text-white mb-2 drop-shadow-2xl">{overmij.name}</h2>
                <div className="border-t-2 border-white w-24 my-4"></div>
                <h3 className="text-xl md:text-2xl text-gray-200 drop-shadow-2xl">{overmij.title}</h3>
            </div>
        </div>
    );
};

export default Home;
