import { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import overmij from '../data/overmij.json';
import avatar from '../assets/images/profile.jpg'; // Importing the image directly

const Sidebar: FunctionComponent = () => {
    const avatarUrl = avatar; // Using the imported image

    const getInitials = (name: string) => {
        const nameParts = name.split(' ');
        if (nameParts.length >= 2) {
            return nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
        }
        return nameParts[0].charAt(0);
    };

    const initials = getInitials(overmij.name);

    return (
        <>
            <div className="fixed top-0 left-0 h-full w-60 bg-navBg text-white p-6 shadow-lg hidden md:block">
                <div className="flex flex-col items-center mb-8 mt-4">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt="Avatar" className="w-32 h-32 border-2 border-white shadow-lg mb-4 object-cover" />
                    ) : (
                        <div className="w-32 h-32 bg-gray-700 flex items-center justify-center text-4xl font-bold mb-4 border-2 border-white shadow-lg">
                            {initials}
                        </div>
                    )}
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">{overmij.name}</h1>
                        <p className="text-sm text-gray-300">{overmij.title}</p>
                    </div>
                </div>
                <nav className="space-y-2">
                    <Link to="home" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-tertiary">Home</Link>
                    <Link to="about" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-tertiary">Over mij</Link>
                    <Link to="skills" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-tertiary">Vaardigheden</Link>
                    <Link to="work-experience" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-tertiary">Ervaring</Link>
                    <Link to="education" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-tertiary">Opleiding</Link>
                    <Link to="hobbies" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-tertiary">Portfolio</Link>
                    <Link to="contact" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-tertiary">Contact</Link>
                </nav>
                <div className="flex items-center justify-center mt-8 space-x-4">
                    <a href={overmij.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x text-white shadow-lg transform hover:scale-110 transition-transform duration-200"></i>
                    </a>
                    <a href={overmij.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x text-blue-700 shadow-lg transform  hover:scale-110 transition-transform duration-200"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
