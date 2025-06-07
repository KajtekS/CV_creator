import girlImage from './girl.png';
import "./style.css";

function FirstView() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6 text-start">
                    <h1 className="heading">Zyskaj przewagę na <br />starcie</h1>
                    <p>Dość ciszy po wysłaniu CV? Z Ciri usłyszysz: "Jesteś dokładnie tym, kogo szukamy." Koniec z szablonami – czas na dokument, który mówi Twoim głosem.</p>
                    <button className="btn btn-style text-white">Stwórz CV!</button>
                </div>
                <div className="col-6">
                    <img
                    src={girlImage}
                    style={{ width: '100%', maxWidth: '612px', height: 'auto' }}
                    alt="dziewczynka"
                    className="img-fluid"
                    />
                </div>
            </div>
        </div>
    )
}

export default FirstView;