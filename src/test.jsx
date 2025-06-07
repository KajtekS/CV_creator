import React from 'react';

const CiriLanding = () => {
  return (
    <div className="bg-light text-dark py-5 px-3">
      {/* Hero Section */}
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="mb-4 mb-md-0">
          <h1 className="fw-bold">
            Zyskaj przewagę na <span className="text-primary">starcie</span>
          </h1>
          <p className="mt-3">
            Dość ciszy po wysłaniu CV? Z Ciri usłyszysz: "Jesteś dokładnie tym, kogo szukamy." <br />
            Koniec z szablonami – czas na dokument, który mówi Twoim głosem.
          </p>
          <button className="btn btn-primary mt-3">Stwórz CV!</button>
        </div>
        <div>
          <img src="./first_view/girl.png" alt="Kobieta z dokumentem" className="img-fluid" />
        </div>
      </div>

      {/* Dlaczego Warto Wybrać */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">
          Dlaczego Warto Wybrać <span className="text-primary">Ciri</span>
        </h2>

        <div className="row mt-4 align-items-center">
          <div className="col-md-3">
            <h3 className="text-primary">1</h3>
            <h5>Brak kosztów</h5>
            <p>
              Ile razy tworzyłeś CV, a na końcu – tuż przed pobraniem – pojawiała się opłata? Z Ciri nie ma takich niespodzianek. Całkowicie za darmo.
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="text-primary">2</h3>
            <h5>Języki</h5>
            <p>
              Jednym kliknięciem zmień tytuły nagłówków na wybrany przez siebie język. Zamień ZŁ na EU.
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="text-primary">3</h3>
            <h5>Czas</h5>
            <p>
              Masz LinkedIna? Ciri zrobi resztę. Skopiuje twój biogram, uzupełni dane i stworzy gotowe CV – bez przepisywania.
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="text-primary">4</h3>
            <h5>Design</h5>
            <p>
              Rekruter średnio widzi twoje CV przez 7 sec. Spraw by twoje CV zapadło mu w pamięci.
            </p>
          </div>
        </div>
      </div>

      {/* Opinie */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">
          Zobacz co inni myślą o <span className="text-primary">Ciri</span>
        </h2>
        {/* Tutaj możesz dodać np. komponenty opinii/testymoniali */}
      </div>
    </div>
  );
};

export default CiriLanding;
