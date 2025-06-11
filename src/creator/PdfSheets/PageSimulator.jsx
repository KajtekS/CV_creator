import { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import './stack_overflow.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useTranslation } from 'react-i18next';

const PageSimulator = forwardRef (({ 
    personalData = {},
    study = [],
    experience = [],
    cert = [],
    language = [],
    abilities = []
}, ref) => {
    const pdfRef = useRef();
    const { t } = useTranslation();

    const generatePdf = () => {
        const input = pdfRef.current;
        html2canvas(input, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("cv.pdf");
        });
    };

    useImperativeHandle(ref, () => ({
        generatePdf
    }))

    return (
        <>
        <div ref={pdfRef}>
            <div className="container mt-5 d-flex justify-content-center cs">
                <div className="row shadow rounded bg-white w-100" style={{ maxWidth: "1000px" }}>
                    <div className="col-md-4 p-4">
                    <h3 className="text-center mb-4">
                        {(personalData.imie && personalData.nazwisko)
                        ? `${personalData.imie} ${personalData.nazwisko}`
                        : "Anna Kowalska"}
                    </h3>

                    <div>
                        <h5 className="fw-bold">{t('personalData')}</h5>

                        <p className="mb-1 text-break">
                        <strong>{t('email')}: </strong>
                        {personalData.email || "anna.kowalska@op.com"}
                        </p>

                        <p className="mb-1">
                        <strong>{t('number')}: </strong>
                        {personalData.numer || "+48 929 323 234"}
                        </p>

                        <p className="mb-1">
                        <strong>{t('dateofbirth')}: </strong>
                        {personalData.dataUrodzenia || "10.09.2003"}
                        </p>

                        <p className="mb-3">
                        <strong>{t('city')}: </strong>
                        {personalData.miasto || "Kraków"}
                        </p>

                        <h5 className="fw-bold mt-4">{t('skills')}</h5>
                        <ul className="list-unstyled">
                        {abilities.map((abi, id) => (
                            <li key={id}>• {abi}</li>
                        ))}
                        </ul>

                        <h5 className="fw-bold mt-4">{t('languages')}</h5>
                        <ul className="list-unstyled">
                        {language.map((lang, id) => (
                            <li key={id}>• {lang.language} ({lang.level})</li>
                        ))}
                        </ul>
                    </div>
                    </div>

                    {/* Prawa kolumna */}
                    <div className="col-md-8 p-4">
                    <h1 className="mb-3">CV | {personalData.imie} {personalData.nazwisko}</h1>
                    <p className="mb-4">{personalData.opis}</p>

                    <section className="mb-4">
                        <h5 className="fw-bold">{t('experience')}</h5>
                        {experience.map((exp, id) => (
                        <div className="mb-3" key={id}>
                            <p className="mb-1"><strong>{exp.stanowisko}</strong> | {exp.lokalizacja}</p>
                            <small className="text-muted">{exp.dataStart} – {exp.dataEnd}</small>
                            <ul className="mt-2">
                            {(Array.isArray(exp.opis) ? exp.opis : [exp.opis]).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </section>

                    <section className="mb-4">
                        <h5 className="fw-bold">{t('education')}</h5>
                        {study.map((std, id) => (
                        <div className="mb-3" key={id}>
                            <p className="mb-1"><strong>{std.szkola}</strong> | {std.lokalizacja}</p>
                            <small className="text-muted">{std.dataStart} – {std.dataEnd}</small>
                            <ul className="mt-2">
                            {(Array.isArray(std.opis) ? std.opis : [std.opis]).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </section>

                    <section>
                        <h5 className="fw-bold">{t('certificates')}</h5>
                        {cert.map((cer, id) => (
                        <div className="mb-3" key={id}>
                            <p className="mb-1"><strong>{cer.nazwa}</strong> | {cer.organizator}</p>
                            <small className="text-muted">{cer.data}</small>
                            <p className="mt-2">{cer.opis}</p>
                        </div>
                        ))}
                    </section>
                    </div>
                </div>
                </div>
        </div>
    </>
    );
});

export default PageSimulator;
