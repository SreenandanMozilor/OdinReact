import { useState } from 'react';
import '../styles/Skills.css';

function Skills({ onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    'skill-name': '', proficiency: '', description: ''
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
    <div className="skills">
      <h3>Skills</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="skill-name" placeholder="Skill Name" value={formData['skill-name']} onChange={handleChange} />
          <input type="text" name="proficiency" placeholder="Proficiency Level" value={formData.proficiency} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="info-display">
          <h2>{formData['skill-name']}</h2>
          <p>Proficiency: {formData.proficiency}</p>
          <p>Description: {formData.description}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default Skills;
