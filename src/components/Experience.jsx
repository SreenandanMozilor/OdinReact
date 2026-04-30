import { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({ 'name': '', 'role': '', 'start-date': '', 'end-date': '', 'place': '', 'description': ''});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="experience">
        <h3>Experience</h3>
        {isEditing ? (
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Company Name" value={formData['name']} onChange={handleChange} />
                <input type="text" name="role" placeholder="Job Role" value={formData['role']} onChange={handleChange} />
                <input type="text" name="start-date" placeholder="Start Date" value={formData['start-date']} onChange={handleChange} />
                <input type="text" name="end-date" placeholder="End Date" value={formData['end-date']} onChange={handleChange} /> 
                <input type="text" name="place" placeholder="Place" value={formData['place']} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description of work done" value={formData['description']} onChange={handleChange} />
                <button type="submit">Save</button>
            </form>
        ) : (
            <div className="info-display">
                <h2>{formData['name']}</h2>
                <p>Role: {formData['role']}</p>
                <p>Start Date: {formData['start-date']}</p>
                <p>End Date: {formData['end-date']}</p>
                <p>Place: {formData['place']}</p>
                <p>Description: {formData['description']}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>
        )}
    </div>
  )
}

export default Experience;
