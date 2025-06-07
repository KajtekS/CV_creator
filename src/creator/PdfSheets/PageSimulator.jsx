import { useState } from 'react';
import './styles.css';

function PageSimulator({ 
    personalData = {},
    study = [],
    experience = [],
    cert = [],
    language = [],
    abilities = []
}) {
    return (
        <div className="container mt-4">
            <div className="row">
                {/* Lewa kolumna */}
                <div className="col-md-4 sidebar text-center">
                    <img src="https://via.placeholder.com/150" alt="Anna Kowalska" className="profile-img" />
                    <h3 className="mt-3">
                        {(personalData.imie && personalData.nazwisko) ? `${personalData.imie} ${personalData.nazwisko}` : "Anna Kowalska"}
                    </h3>

                    <div className="mt-4 text-start">
                        <h5 className="section-title">Kontakt</h5>
                        <p><strong>E-mail: </strong>{personalData.email || "anna.kowalska@op.com"}</p>
                        <p><strong>Telefon: </strong>{personalData.numer || "+48 929 323 234"}</p>
                        <p><strong>Data urodzenia: </strong>{personalData.dataUrodzenia || "10.09.2003"}</p>
                        <p><strong>Miasto: </strong>{personalData.miasto || "Kraków"}</p>

                        <h5 className="section-title">Umiejętności</h5>
                        <ul className="list-unstyled">
                            {abilities.map((abi, id) => (
                                <li key={id}>{abi}</li>
                            ))}
                        </ul>

                        <h5 className="section-title">Języki</h5>
                        <ul className="list-unstyled">
                            {language.map((lang, id) => (
                                <li key={id}>{lang.language} {lang.level}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Prawa kolumna */}
                <div className="col-md-8">
                    <h1>CV | {personalData.imie} {personalData.nazwisko}</h1>
                    <p>{personalData.opis}</p>

                    <div className="row">
                        <div className="col-12">
                            <h5 className="section-title">Doświadczenie zawodowe</h5>
                            {experience.map((exp, id) => (
                                <div className="mb-3" key={id}>
                                    <p>{exp.dataStart} - {exp.dataEnd}<br />
                                        <strong>{exp.stanowisko}</strong> | {exp.lokalizacja}</p>
                                    <ul>
                                        {Array.isArray(exp.opis)
                                            ? exp.opis.map((item, i) => <li key={i}>{item}</li>)
                                            : <li>{exp.opis}</li>
                                        }
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="col-12">
                            <h5 className="section-title">Wykształcenie</h5>
                            {study.map((std, id) => (
                                <div className="mb-3" key={id}>
                                    <p>{std.dataStart} - {std.dataEnd}<br />
                                        {std.szkola} | {std.lokalizacja}</p>
                                    <ul>
                                        {Array.isArray(std.opis)
                                            ? std.opis.map((item, i) => <li key={i}>{item}</li>)
                                            : <li>{std.opis}</li>
                                        }
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="col-12">
                            <h5 className="section-title">Szkolenia, kursy, certyfikaty</h5>
                            {cert.map((cer, id) => (
                                <div className="mb-3" key={id}>
                                    <p><strong>{cer.data}</strong><br />
                                        {cer.nazwa} | {cer.organizator}<br />
                                        {cer.opis}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageSimulator;
