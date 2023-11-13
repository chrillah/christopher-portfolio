import './App.css'
import { Route, Routes } from 'react-router-dom'

import Hemma from './pages/Hemma'
import NavBar from './components/NavBar'
import ContactBar from './components/ContactBar'
import AboutMe from './pages/AboutMe'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'
import ProjectItem from './pages/ProjectItem'

function App(): JSX.Element {
    return (
        <div className="app-bg">
            <NavBar />
            <Routes>
                {/* TEST, SKA BORT! */}
                <Route path="/" element={<Hemma />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/project/:project" element={<ProjectItem />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ContactBar />
        </div>
    )
}

export default App
