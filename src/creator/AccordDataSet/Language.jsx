import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const levels = [
  { code: 'A1' },
  { code: 'A2' },
  { code: 'B1' },
  { code: 'B2' },
  { code: 'C1' },
  { code: 'C2' },
];

const Language = ({ onAddLanguage = () => {} }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    language: '',
    level: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    console.log('Dodaję język:', form);
    e.preventDefault();
    if (form.language.trim() === '' || form.level === '') {
      alert('Proszę wypełnić oba pola: język i poziom');
      return;
    }
    onAddLanguage(form);
    setForm({ language: '', level: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label htmlFor="language" className="form-label">{t('language')}</label>
        <input
          type="text"
          className="form-control-sm"
          id="language"
          name="language"
          value={form.language}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="level" className="form-label-sm me-5">{t('level')}</label>
        <select
          className="form-select-sm"
          id="level"
          name="level"
          value={form.level}
          onChange={handleChange}
        >
          <option value="">{t('selectLevelPlaceholder')}</option>
          {levels.map((level) => (
            <option key={level.code} value={level.code}>
              {level.code}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-abi">{t('add')}</button>
    </form>

  );
};

export default Language;
