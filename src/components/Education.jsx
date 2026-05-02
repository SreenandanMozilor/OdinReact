import { useState } from 'react';
import '../styles/Education.css';

function Education({ onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    'level-of-education': '', institution: '', course: '',
    place: '', 'start-date': '', 'end-date': ''
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
    <div className="education">
      <h3>Education</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="level-of-education" placeholder="Highest Level of Education" value={formData['level-of-education']} onChange={handleChange} />
          <input type="text" name="institution" placeholder="Institution" value={formData.institution} onChange={handleChange} />
          <input type="text" name="course" placeholder="Course studied" value={formData.course} onChange={handleChange} />
          <input type="text" name="place" placeholder="Place" value={formData.place} onChange={handleChange} />
          <input type="date" name="start-date" placeholder="Start Date" value={formData['start-date']} onChange={handleChange} />
          <input type="date" name="end-date" placeholder="End Date" value={formData['end-date']} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="info-display">
          <h2>{formData['level-of-education']}</h2>
          <p>Institution: {formData.institution}</p>
          <p>Course: {formData.course}</p>
          <p>Place: {formData.place}</p>
          <p>Start Date: {formData['start-date']}</p>
          <p>End Date: {formData['end-date']}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default Education;
