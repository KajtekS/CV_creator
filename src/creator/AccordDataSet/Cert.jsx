import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Cert = ({ onAddCert = () => {} }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nazwa: '',
    data: '',
    organizator: '',
    opis: ''
  });

  const [tempOpis, setTempOpis] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCert(form);  // <-- wywołanie callbacku z poprawną nazwą
    setForm({
      nazwa: '',
      data: '',
      organizator: '',
      opis: ''
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nazwa" className="form-label">{t('name')}</label>
          <input
            type="text"
            className="form-control-sm"
            id="nazwa"
            name="nazwa"
            value={form.nazwa}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="data" className="form-label">{t('date')}</label>
          <input
            type="date"
            className="form-control-sm"
            id="data"
            name="data"
            value={form.data}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="organizator" className="form-label">{t('organizer')}</label>
          <input
            type="text"
            className="form-control-sm"
            id="organizator"
            name="organizator"
            value={form.organizator}
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
            value={form.opis}
            readOnly
            onClick={openModal}
            placeholder={t('placeholderDescription')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <button type="submit" className="btn btn-abi">{t('add')}</button>
      </form>

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
                <h5 className="modal-title">{t('modalTitle')}</h5>
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
                  {t('cancel')}
                </button>
                <button type="button" className="btn btn-primary" onClick={saveOpis}>
                  {t('save')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cert;
