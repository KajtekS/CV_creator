import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Cert = ({ onAddCert = () => {}, onRemoveCert = () => {} }) => {
  const { t } = useTranslation();

  const [certList, setCertList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [tempOpis, setTempOpis] = useState('');
  const [deletePanel, setDeletePanel] = useState(false);

  const [form, setForm] = useState({
    nazwa: '',
    data: '',
    organizator: '',
    opis: ''
  });

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
    const updatedList = [...certList, form];
    setCertList(updatedList);
    onAddCert(form);

    setForm({
      nazwa: '',
      data: '',
      organizator: '',
      opis: ''
    });
  };

  const handleDelete = (index) => {
    const updatedList = certList.filter((_, i) => i !== index);
    setCertList(updatedList);
    onRemoveCert(updatedList);
  };

  return (
    <>
      {!deletePanel && (
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
          <button type="button" className="btn btn-abi ms-2" onClick={() => setDeletePanel(prev => !prev)}>
            {t('delete')}
          </button>
        </form>
      )}

      {/* Lista certyfikatów */}
      {deletePanel && (
        <div className="mt-4">
          <h5>{t('certificatesList') || 'Lista certyfikatów'}</h5>
          <ul className="list-group">
            {certList.map((cert, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div>
                  <strong>{cert.nazwa}</strong> ({cert.data})<br />
                  {cert.organizator}<br />
                  <em>{cert.opis}</em>
                </div>
                <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => handleDelete(idx)}
                >
                  {t('delete')}
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-abi ms-2" onClick={() => setDeletePanel(prev => !prev)}>
            {t('back')}
          </button>
        </div>
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
