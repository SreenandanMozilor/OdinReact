import { useState } from 'react';
import '../styles/Projects.css';

function Projects({ onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    'project-name': '', description: '', technologies: '', link: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
    onSave(formData);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="projects">
      <h3>Projects</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="project-name" placeholder="Project Name" value={formData['project-name']} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input type="text" name="technologies" placeholder="Technologies Used" value={formData.technologies} onChange={handleChange} />
          <input type="text" name="link" placeholder="Project Link" value={formData.link} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="info-display">
          <h2>{formData['project-name']}</h2>
          <p>Description: {formData.description}</p>
          <p>Technologies: {formData.technologies}</p>
          <p>Link: {formData.link}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default Projects;
