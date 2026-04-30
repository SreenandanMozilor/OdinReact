import { useState } from 'react'
import './App.css'

import PersonalInfo from './components/PersonalInfo.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

function App() {
  return (
    <div className="cv-generator">
      <h1>CV Generator</h1>
      <PersonalInfo />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
