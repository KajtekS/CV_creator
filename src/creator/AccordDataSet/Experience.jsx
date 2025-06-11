import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./experience_style.css";

const Experience = ({ onAddExperience = () => {}, onRemoveExperience = () => {} }) => {
  const { t } = useTranslation();

  // Tablica doświadczeń
  const [form, setForm] = useState([]);

  // Pojedynczy formularz do wypełnienia
  const [newExperience, setNewExperience] = useState({
    dataStart: '',
    dataEnd: '',
    firma: '',
    stanowisko: '',
    lokalizacja: '',
    opis: ''
  });

  const [tempOpis, setTempOpis] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [deletePanel, setDeletePanel] = useState(false);

  const handleChange = (e) => {
    setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  };

  // Otwórz modal z opisem do edycji
  const openModal = () => {
    setTempOpis(newExperience.opis);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveOpis = () => {
    setNewExperience({ ...newExperience, opis: tempOpis });
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newExperience.firma && !newExperience.opis) {
      alert(t('fillAtLeastCompanyOrDescription') || 'Wypełnij minimum pole Firma lub Opis');
      return;
    }

    setForm(prev => [...prev, newExperience]);

    onAddExperience(newExperience);

    setNewExperience({
      dataStart: '',
      dataEnd: '',
      firma: '',
      stanowisko: '',
      lokalizacja: '',
      opis: ''
    });
  };

  const handleDelete = (index) => {
  const updatedForm = form.filter((_, i) => i !== index);
  setForm(updatedForm);
  onRemoveExperience(updatedForm);
  };


  return (
    <>
      {/* Formularz dodawania nowego doświadczenia */}
      {!deletePanel && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="dataStart" className="form-label">{t('startDate')}</label>
            <input
              type="date"
              className="form-control-sm"
              id="dataStart"
              name="dataStart"
              value={newExperience.dataStart}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dataEnd" className="form-label">{t('endDate')}</label>
            <input
              type="date"
              className="form-control-sm"
              id="dataEnd"
              name="dataEnd"
              value={newExperience.dataEnd}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="firma" className="form-label">{t('company')}</label>
            <input
              type="text"
              className="form-control-sm"
              id="firma"
              name="firma"
              value={newExperience.firma}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="stanowisko" className="form-label">{t('position')}</label>
            <input
              type="text"
              className="form-control-sm"
              id="stanowisko"
              name="stanowisko"
              value={newExperience.stanowisko}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lokalizacja" className="form-label">{t('location')}</label>
            <input
              type="text"
              className="form-control-sm"
              id="lokalizacja"
              name="lokalizacja"
              value={newExperience.lokalizacja}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="opis" className="form-label">{t('description')}</label>
            <input
              type="text"
              className="form-control-sm"
              id="opis"
              name="opis"
              value={newExperience.opis}
              readOnly
              onClick={openModal}
              placeholder={t('placeholderDescription')}
              style={{ cursor: 'pointer' }}
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

      {/* Modal do edycji opisu */}
      {modalOpen && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex="-1"
          role="dialog"
          onClick={closeModal}
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{t('enterDescription') || 'Wpisz opis'}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  rows="5"
                  value={tempOpis}
                  onChange={(e) => setTempOpis(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  {t('cancel') || 'Anuluj'}
                </button>
                <button type="button" className="btn btn-primary" onClick={saveOpis}>
                  {t('save') || 'Zapisz'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lista doświadczeń */}
      {deletePanel && (
        <div className="container mt-3">
          <ul className="list-group">
            {form.map((data, id) => (
              <li key={id} className="list-group-item d-flex justify-content-between align-items-start list-item-style">
                  <div>
                    <strong>{data.firma}</strong> | {data.stanowisko} <br />
                  </div>
                  <button
                    className="btn btn-abi btn-sm"
                    onClick={() => handleDelete(id)}
                  >
                  {t('delete')}
                </button>
              </li>
            ))}
          </ul>
          <button className='btn btn-abi' onClick={() => setDeletePanel(prev => !prev)}>{t('back')}</button>
        </div>
      )}
    </>
  );
};

export default Experience;
