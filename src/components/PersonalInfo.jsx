import { useState } from 'react';
import '../styles/PersonalInfo.css';

function PersonalInfo({ onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({ name: '', age: '', email: '', phone: '' });

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
    <div className="personal-info">
      <h3>Personal Information</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="info-display">
          <h2>{formData.name}</h2>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default PersonalInfo;
