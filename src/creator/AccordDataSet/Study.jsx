import React, { useState } from 'react';

function StudyForm({ onAddStudy = () => {}}) {
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
          <label htmlFor="poziom" className="form-label-sm">Poziom Wykształcenia</label>
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
          <label htmlFor="szkola" className="form-label-sm">Szkoła</label>
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
          <label className="form-label-sm">Data od</label>
          <input
            type="date"
            className="form-control-sm"
            name="dataStart"
            value={form.dataStart}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="form-label-sm">Data do</label>
          <input
            type="date"
            className="form-control-sm"
            name="dataEnd"
            value={form.dataEnd}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label-sm">Opis</label>
          <input
            type="text"
            className="form-control-sm"
            name="opis"
            value={form.opis}
            onClick={openModal}
            readOnly
            placeholder="Kliknij, aby dodać opis"
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
                <h5 className="modal-title">Wpisz opis edukacji</h5>
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
                <button className="btn btn-secondary" onClick={closeModal}>Anuluj</button>
                <button className="btn btn-primary" onClick={saveOpis}>Zapisz</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudyForm;
