import React, { useState } from 'react';

const PersonalDataForm = ({ setPersonalData }) => {
  const [form, setForm] = useState({
    imie: '',
    nazwisko: '',
    dataUrodzenia: '',
    kraj: '',
    miasto: '',
    numer: '',
    email: '',
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
    setPersonalData(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Imię', name: 'imie' },
          { label: 'Nazwisko', name: 'nazwisko' },
          { label: 'Data urodzenia', name: 'dataUrodzenia', type: 'date' },
          { label: 'Kraj zamieszkania', name: 'kraj' },
          { label: 'Miasto', name: 'miasto' },
          { label: 'Numer', name: 'numer' },
          { label: 'Email', name: 'email' },
        ].map(({ label, name, type = 'text' }) => (
          <div className="mb-1" key={name}>
            <label htmlFor={name} className="form-label">{label}</label>
            <input
              type={type}
              className="form-control-sm"
              id={name}
              name={name}
              value={form[name]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* 🔹 Opis jako modal */}
        <div className="mb-2">
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

        <button type="submit" className="btn btn-abi">Zapisz</button>
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

export default PersonalDataForm;
