import React, { useState } from 'react';

const Abilities = ({ onAddSkill = () => {} }) => {
  const [skill, setSkill] = useState('');

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill.trim() === '') {
      alert('Proszę wpisać umiejętność');
      return;
    }
    onAddSkill(skill.trim());
    setSkill('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="umiejetnosc" className="form-label">Umiejętność</label>
        <input
          type="text"
          className="form-control-sm"
          id="umiejetnosc"
          name="umiejetnosc"
          value={skill}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-abi">Dodaj</button>
    </form>
  );
};

export default Abilities;
