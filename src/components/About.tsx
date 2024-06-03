import { FunctionComponent } from 'react';
import overmij from '../data/overmij.json';

const About: FunctionComponent = () => {
    return (
        <div className="min-h-screen p-8 bg-primaryBg flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-center uppercase border-b-2 border-orange-500">Over mij</h1>
            <div className="max-w-2xl mx-auto mt-8">
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="font-bold">Naam:</p>
                    <p>{overmij.name}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="font-bold">Email:</p>
                    <a href={`mailto:${overmij.email}`} className="text-blue-500">{overmij.email}</a>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="font-bold">Geboortedatum:</p>
                    <p>{overmij.birthdate}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="font-bold">Woonplaats:</p>
                    <p>{overmij.location}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="font-bold">Nationaliteit:</p>
                    <p>{overmij.nationality}</p>
                </div>
                <div className="mt-6">
                    <p>{overmij.aboutText}</p>
                </div>
            </div>
        </div>
    );
};

export default About;
