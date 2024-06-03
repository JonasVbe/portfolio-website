import { FunctionComponent, useState } from 'react';
import { Link } from 'react-scroll';
import overmij from '../data/overmij.json';

const Topbar: FunctionComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);





    return (
        <div className="md:hidden bg-gray-900 text-white p-4 shadow-lg fixed w-full top-0 z-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                                       <h1 className="text-xl font-bold">{overmij.name}</h1>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <nav className="mt-4 space-y-2 text-sm">
                    <Link to="home" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="about" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-blue-400" onClick={() => setMenuOpen(false)}>Over mij</Link>
                    <Link to="skills" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-blue-400" onClick={() => setMenuOpen(false)}>Vaardigheden</Link>
                    <Link to="work-experience" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-blue-400" onClick={() => setMenuOpen(false)}>Werkervaring</Link>
                    <Link to="education" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-blue-400" onClick={() => setMenuOpen(false)}>Opleiding</Link>
                    <Link to="hobbies" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-blue-400" onClick={() => setMenuOpen(false)}>Hobby's</Link>
                    <Link to="contact" smooth={true} className="cursor-pointer block py-2 border-b border-gray-700 uppercase hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</Link>
                    <div className="py-4"></div>
                    <div className="flex space-x-4 justify-center">
                        <a href={overmij.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href={overmij.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Topbar;
