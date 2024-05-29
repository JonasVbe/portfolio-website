import { FunctionComponent } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact.tsx'
import bioData from './data/bio.json'
import contactData from './data/contact.json'

import projectsData from './data/projects.json'
import workExperienceData from './data/WorkExperience.json'

const App: FunctionComponent = () => {
    return (
        <div className="font-sans bg-gray-900 text-white">
            <Navbar />
            <Hero name={bioData.name} title={bioData.title} bio={bioData.bioText} image={bioData.profileImage} />
            <About bio={bioData.bioText} contactDetails={{ email: bioData.email, linkedin: bioData.linkedin, twitter: bioData.twitter }} />
            <Skills />
            <Projects projects={projectsData} />
            <Education />
            <WorkExperience experiences={workExperienceData} />
            <Hobbies hobbies={bioData.hobbies} interests={bioData.interests} />
            <Contact email={contactData.email} socialLinks={contactData.socialLinks} />
        </div>
    )
}

export default App
