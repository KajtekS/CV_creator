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

const Language = ({ onAddLanguage = () => {}, onRemoveLanguage = () => {} }) => {
  const { t } = useTranslation();

  const [form, setForm] = useState({ language: '', level: '' });
  const [languageList, setLanguageList] = useState([]);
  const [deltePanel, setDeletePanel] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.language.trim() === '' || form.level === '') {
      alert(t('fillBothFields') || 'Proszę wypełnić oba pola: język i poziom');
      return;
    }

    const updatedList = [...languageList, form];
    setLanguageList(updatedList);
    onAddLanguage(form);

    setForm({ language: '', level: '' });
  };

  const handleDelete = (index) => {
    const updatedList = languageList.filter((_, i) => i !== index);
    setLanguageList(updatedList);
    onRemoveLanguage(updatedList);
  };

  return (
    <>
      {!deltePanel && (
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
            <label htmlFor="level" className="form-label-sm me-2">{t('level')}</label>
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
          <h5>{t('languagesList') || 'Lista języków'}</h5>
          <ul className="list-group">
            {languageList.map((lang, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div>
                  <strong>{lang.language}</strong> – {lang.level}
                </div>
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

export default Language;
