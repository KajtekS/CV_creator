import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function StudyForm({ onAddStudy = () => {}, onRemoveStudy = () => {} }) {
  const { t } = useTranslation();

  const [form, setForm] = useState([]); // lista studiów
  const [modalOpen, setModalOpen] = useState(false);
  const [deletePanel, setDeletePanel] = useState(false);
  const [tempOpis, setTempOpis] = useState('');

  const [newStudy, setNewStudy] = useState({
    poziom: '',
    szkola: '',
    dataStart: '',
    dataEnd: '',
    opis: ''
  });

  const handleChange = (e) => {
    setNewStudy({
      ...newStudy,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedList = [...form, newStudy];
    setForm(updatedList);
    onAddStudy(newStudy);

    setNewStudy({
      poziom: '',
      szkola: '',
      dataStart: '',
      dataEnd: '',
      opis: ''
    });
  };

  const openModal = () => {
    setTempOpis(newStudy.opis);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveOpis = () => {
    setNewStudy({ ...newStudy, opis: tempOpis });
    closeModal();
  };

  const handleDelete = (index) => {
    const updatedList = form.filter((_, i) => i !== index);
    setForm(updatedList);
    onRemoveStudy(updatedList);
  };

  return (
    <>
      {!deletePanel && (
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="poziom" className="form-label-sm">{t('educationLevel')}</label>
            <input
              type="text"
              className="form-control-sm"
              id="poziom"
              name="poziom"
              value={newStudy.poziom}
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="szkola" className="form-label-sm">{t('school')}</label>
            <input
              type="text"
              className="form-control-sm"
              id="szkola"
              name="szkola"
              value={newStudy.szkola}
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label className="form-label-sm">{t('startDate')}</label>
            <input
              type="date"
              className="form-control-sm"
              name="dataStart"
              value={newStudy.dataStart}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label-sm">{t('endDate')}</label>
            <input
              type="date"
              className="form-control-sm"
              name="dataEnd"
              value={newStudy.dataEnd}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label-sm">{t('description')}</label>
            <input
              type="text"
              className="form-control-sm"
              name="opis"
              value={newStudy.opis}
              onClick={openModal}
              readOnly
              placeholder={t('clickToAddDescription')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <button type="submit" className="btn btn-abi">{t('add')}</button>
          <button type="button" className="btn btn-abi ms-2" onClick={() => setDeletePanel(prev => !prev)}>
            {t('delete')}
          </button>
        </form>
      )}

      {/* Modal */}
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
                <h5 className="modal-title">{t('enterEducationDescription')}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  rows="4"
                  value={tempOpis}
                  onChange={(e) => setTempOpis(e.target.value)}
                  autoFocus
                ></textarea>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>{t('cancel')}</button>
                <button className="btn btn-primary" onClick={saveOpis}>{t('save')}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lista studiów z opcją usunięcia */}
      {deletePanel && (
        <div className="container mt-3">
          <ul className="list-group">
            {form.length === 0 && (
              <li className="list-group-item">{t('noStudies') || 'Brak zapisanych studiów'}</li>
            )}
            {form.map((data, id) => (
              <li key={id} className="list-group-item d-flex justify-content-between align-items-start list-item-style">
                <div>
                  <strong>{data.szkola}</strong> | {data.poziom}<br />
                  {data.dataStart} - {data.dataEnd}<br />
                  <em>{data.opis}</em>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(id)}
                >
                  {t('delete')}
                </button>
              </li>
            ))}
          </ul>
          <button className='btn btn-secondary mt-3' onClick={() => setDeletePanel(false)}>
            {t('back')}
          </button>
        </div>
      )}
    </>
  );
}

export default StudyForm;
