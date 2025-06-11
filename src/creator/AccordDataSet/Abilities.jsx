import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Abilities = ({ onAddSkill = () => {} }) => {
  const { t } = useTranslation();

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
        <label htmlFor="umiejetnosc" className="form-label">{t('skills')}</label>
        <input
          type="text"
          className="form-control-sm"
          id="umiejetnosc"
          name="umiejetnosc"
          value={skill}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-abi">{t('add')}</button>
    </form>
  );
};

export default Abilities;
