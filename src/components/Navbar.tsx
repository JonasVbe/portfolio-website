import { FunctionComponent } from 'react'
import { Link } from 'react-scroll'
const Navbar: FunctionComponent = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Jonas Van Berlo</div>
                <div className="flex space-x-4">
                    <Link to="about" smooth={true} className="hover:text-blue-400">About</Link>
                    <Link to="skills" smooth={true} className="hover:text-blue-400">Skills</Link>
                    <Link to="projects" smooth={true} className="hover:text-blue-400">Projects</Link>
                    <Link to="contact" smooth={true} className="hover:text-blue-400">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
