import { FunctionComponent } from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/skills components/Skills.tsx';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact';

const App: FunctionComponent = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-0 md:ml-60">
                <Topbar />
                <div className="pt-14 md:pt-0">
                    <section id="home"><Home /></section>
                    <section id="about"><About /></section>
                    <section id="skills"><Skills /></section>
                    <section id="work-experience"><WorkExperience /></section>
                    <section id="education"><Education /></section>
                    <section id="hobbies"><Portfolio /></section>
                    <section id="contact"><Contact /></section>
                </div>
            </div>
        </div>
    );
};

export default App;
