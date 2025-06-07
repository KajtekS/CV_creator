import React, { useState } from 'react';

const Experience = ({ onAddExperience = () => {} }) => {
  const [form, setForm] = useState({
    dataStart: '',
    dataEnd: '',
    firma: '',
    stanowisko: '',       // 🔹 Dodane pole
    lokalizacja: '',
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
    if (!form.firma && !form.opis) {
      alert('Wypełnij minimum pole Firma lub Opis');
      return;
    }

    onAddExperience(form);

    setForm({
      dataStart: '',
      dataEnd: '',
      firma: '',
      stanowisko: '',
      lokalizacja: '',
      opis: ''
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="dataStart" className="form-label">Data od</label>
          <input
            type="date"
            className="form-control-sm"
            id="dataStart"
            name="dataStart"
            value={form.dataStart}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dataEnd" className="form-label">Data do</label>
          <input
            type="date"
            className="form-control-sm"
            id="dataEnd"
            name="dataEnd"
            value={form.dataEnd}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="firma" className="form-label">Firma</label>
          <input
            type="text"
            className="form-control-sm"
            id="firma"
            name="firma"
            value={form.firma}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stanowisko" className="form-label">Stanowisko</label>
          <input
            type="text"
            className="form-control-sm"
            id="stanowisko"
            name="stanowisko"
            value={form.stanowisko}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lokalizacja" className="form-label">Lokalizacja</label>
          <input
            type="text"
            className="form-control-sm"
            id="lokalizacja"
            name="lokalizacja"
            value={form.lokalizacja}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="opis" className="form-label">Opis</label>
          <input
            type="text"
            className="form-control-sm"
            id="opis"
            name="opis"
            value={form.opis}
            readOnly
            onClick={openModal}
            placeholder="Kliknij, aby wpisać opis"
            style={{ cursor: 'pointer' }}
          />
        </div>

        <button type="submit" className="btn btn-abi">Dodaj</button>
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
                <h5 className="modal-title">Wpisz opis</h5>
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
                  Anuluj
                </button>
                <button type="button" className="btn btn-primary" onClick={saveOpis}>
                  Zapisz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
