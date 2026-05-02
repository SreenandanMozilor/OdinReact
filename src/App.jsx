import { useState } from 'react'
import './App.css'

import PersonalInfo from './components/PersonalInfo.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import CVDisplay from './components/CVDisplay.jsx'

function App() {
  const [showCV, setShowCV] = useState(false);
  const [cvData, setCvData] = useState({
    personalInfo: { name: '', age: '', email: '', phone: '' },
    education: { 'level-of-education': '', institution: '', course: '', place: '', 'start-date': '', 'end-date': '' },
    experience: { name: '', role: '', 'start-date': '', 'end-date': '', place: '', description: '' },
    projects: { 'project-name': '', description: '', technologies: '', link: '' },
    skills: { 'skill-name': '', proficiency: '', description: '' }
  });

  const [savedSections, setSavedSections] = useState({
    personalInfo: false,
    education: false,
    experience: false,
    projects: false,
    skills: false
  });

  const isComplete = Object.values(savedSections).every(v => v === true);

  return (
    <>
      {showCV ? (
        <CVDisplay data={cvData} onEdit={() => setShowCV(false)} />
      ) : (
        <div className="cv-generator">
          <h1>CV Generator</h1>

          <PersonalInfo
            onSave={(data) => {
              setCvData(prev => ({ ...prev, personalInfo: data }));
              setSavedSections(prev => ({ ...prev, personalInfo: true }));
            }}
            onEdit={() => setSavedSections(prev => ({ ...prev, personalInfo: false }))}
          />
          <Education
            onSave={(data) => {
              setCvData(prev => ({ ...prev, education: data }));
              setSavedSections(prev => ({ ...prev, education: true }));
            }}
            onEdit={() => setSavedSections(prev => ({ ...prev, education: false }))}
          />
          <Experience
            onSave={(data) => {
              setCvData(prev => ({ ...prev, experience: data }));
              setSavedSections(prev => ({ ...prev, experience: true }));
            }}
            onEdit={() => setSavedSections(prev => ({ ...prev, experience: false }))}
          />
          <Projects
            onSave={(data) => {
              setCvData(prev => ({ ...prev, projects: data }));
              setSavedSections(prev => ({ ...prev, projects: true }));
            }}
            onEdit={() => setSavedSections(prev => ({ ...prev, projects: false }))}
          />
          <Skills
            onSave={(data) => {
              setCvData(prev => ({ ...prev, skills: data }));
              setSavedSections(prev => ({ ...prev, skills: true }));
            }}
            onEdit={() => setSavedSections(prev => ({ ...prev, skills: false }))}
          />

          <button
            className="generate-btn"
            disabled={!isComplete}
            onClick={() => setShowCV(true)}
          >
            {isComplete ? 'Generate CV' : 'Fill in required sections to generate CV'}
          </button>
        </div>
      )}
    </>
  )
}

export default App
