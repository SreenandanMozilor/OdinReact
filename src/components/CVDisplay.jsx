import '../styles/CVDisplay.css';

// This component receives all the CV data as a single prop called "data"
// It has no state of its own — it's a "pure" display component
// It also receives onEdit so the user can go back and make changes
function CVDisplay({ data, onEdit }) {
  const { personalInfo, education, experience, projects, skills } = data;

  return (
    <div className="cv-document">

      {/* Header */}
      <div className="cv-header">
        <h1 className="cv-name">{personalInfo.name}</h1>
        <div className="cv-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.age && <span>Age: {personalInfo.age}</span>}
        </div>
      </div>

      {/* Education */}
      {education.institution && (
        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">{education['level-of-education']}</span>
              <span className="cv-entry-date">{education['start-date']} — {education['end-date']}</span>
            </div>
            <div className="cv-entry-subtitle">{education.institution} · {education.place}</div>
            <div className="cv-entry-body">{education.course}</div>
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.name && (
        <section className="cv-section">
          <h2 className="cv-section-title">Experience</h2>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">{experience.role}</span>
              <span className="cv-entry-date">{experience['start-date']} — {experience['end-date']}</span>
            </div>
            <div className="cv-entry-subtitle">{experience.name} · {experience.place}</div>
            <div className="cv-entry-body">{experience.description}</div>
          </div>
        </section>
      )}

      {/* Projects */}
      {projects['project-name'] && (
        <section className="cv-section">
          <h2 className="cv-section-title">Projects</h2>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">{projects['project-name']}</span>
            </div>
            <div className="cv-entry-subtitle">{projects.technologies}</div>
            <div className="cv-entry-body">{projects.description}</div>
            {projects.link && <div className="cv-entry-link">{projects.link}</div>}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills['skill-name'] && (
        <section className="cv-section">
          <h2 className="cv-section-title">Skills</h2>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">{skills['skill-name']}</span>
              <span className="cv-entry-date">{skills.proficiency}</span>
            </div>
            <div className="cv-entry-body">{skills.description}</div>
          </div>
        </section>
      )}

      <button className="cv-edit-btn" onClick={onEdit}>← Back to Editor</button>
    </div>
  );
}

export default CVDisplay;
