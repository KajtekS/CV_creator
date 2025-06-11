import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function StudyForm({ onAddStudy = () => {} }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    poziom: '',
    szkola: '',
    dataStart: '',
    dataEnd: '',
    opis: ''
  });

  const [tempOpis, setTempOpis] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    onAddStudy(form);

    setForm({
      poziom: '',
      szkola: '',
      dataStart: '',
      dataEnd: '',
      opis: ''
    });
  };

  const openModal = () => {
    setTempOpis(form.opis);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveOpis = () => {
    setForm({ ...form, opis: tempOpis });
    closeModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="poziom" className="form-label-sm">{t('educationLevel')}</label>
          <input
            type="text"
            className="form-control-sm"
            id="poziom"
            name="poziom"
            value={form.poziom}
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
            value={form.szkola}
            onChange={handleChange}
          />
        </div>

        <div className="mb-1">
          <label className="form-label-sm">{t('startDate')}</label>
          <input
            type="date"
            className="form-control-sm"
            name="dataStart"
            value={form.dataStart}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="form-label-sm">{t('endDate')}</label>
          <input
            type="date"
            className="form-control-sm"
            name="dataEnd"
            value={form.dataEnd}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label-sm">{t('description')}</label>
          <input
            type="text"
            className="form-control-sm"
            name="opis"
            value={form.opis}
            onClick={openModal}
            readOnly
            placeholder={t('clickToAddDescription')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <button type="submit" className="btn btn-abi">{t('add')}</button>
      </form>

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
    </>
  );
};

export default StudyForm;
