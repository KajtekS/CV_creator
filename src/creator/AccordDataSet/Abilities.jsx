import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Abilities = ({ onAddSkill = () => {}, onRemoveSkill = () => {} }) => {
  const { t } = useTranslation();

  const [skill, setSkill] = useState('');
  const [skillsList, setSkillsList] = useState([]);
  const [deltePanel, setDeletePanel] = useState(false);

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = skill.trim();
    if (trimmed === '') {
      alert(t('fillSkill') || 'Proszę wpisać umiejętność');
      return;
    }

    const updated = [...skillsList, trimmed];
    setSkillsList(updated);
    onAddSkill(trimmed);
    setSkill('');
  };

  const handleDelete = (index) => {
    const updated = skillsList.filter((_, i) => i !== index);
    setSkillsList(updated);
    onRemoveSkill(updated);
  };

  return (
    <>
      {!deltePanel && (
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
          <button
                type="button"
                onClick={() => setDeletePanel(prev => !prev)}
                className="btn btn-abi ms-2"
              >
                {t('delete')}
          </button>
        </form>
      )}

      {deltePanel && (
        <div className="mt-4">
          <h5>{t('skillsList') || 'Lista umiejętności'}</h5>
          <ul className="list-group">
            {skillsList.map((s, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {s}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  {t('delete')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Abilities;
