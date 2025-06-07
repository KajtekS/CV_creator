import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import PersonalDataForm from './AccordDataSet/PersonalDataForm';
import Study from './AccordDataSet/Study';
import Experience from './AccordDataSet/Experience';
import Cert from './AccordDataSet/Cert';
import Language from './AccordDataSet/Language';
import Abilities from './AccordDataSet/Abilities';
import PdfPage from './PdfSheets/PdfPage';
import PdfDisplay from './PdfDisplay';
import GitHub from './PdfSheets/GitHub';

import { PDFViewer } from '@react-pdf/renderer';
import PdfErrorBoundary from './PdfErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import PageSimulator from './PdfSheets/PageSimulator';

const handleGeneratePDF = async () => {
  const cvData = {
    personalData,
    study,
    experience,
    cert,
    language,
    abilities
  };

  try {
    const res = await fetch("http://localhost:5173/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cvData),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cv.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("PDF generation failed:", error);
  }
};


const AccordionList = () => {
  const [personalData, setPersonalData] = useState([]);
  const [study, setStudy] = useState([]);
  const [experience, setExperience] = useState([]); // <-- poprawnie
  const [cert, setCert] = useState([]);
  const [language, setLanguage] = useState([]);
  const [abilities, setAbilities] = useState([]);

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-3 p-4 right">
          <div className="accordion" id="accordionExample">
            <button className='btn btn-generate w-100' onClick={handleGeneratePDF}>Generuj</button>
            <AccordionItem id="panel1" title="Dane osobowe" defaultOpen={true} className="rounded-top">
              <PersonalDataForm setPersonalData={setPersonalData} />
            </AccordionItem>

            <AccordionItem id="panel2" title="Wykształcenie">
              <Study onAddStudy={(newStudy) => (setStudy(prev => [...prev, newStudy]))} />
            </AccordionItem>

            <AccordionItem id="panel3" title="Doświadczenie Zawodowe">
              <Experience onAddExperience={(newExp) => setExperience(prev => [...prev, newExp])} />
            </AccordionItem>


            <AccordionItem id="panel4" title="Szkolenia, kursy, certyfikaty">
              <Cert onAddCert={(newCert) => setCert(prev => 
                [...prev, newCert]
              )}/>
            </AccordionItem>

            <AccordionItem id="panel5" title="Języki">
              <Language onAddLanguage={(newLang) => setLanguage(prev => [...prev, newLang])}/>
            </AccordionItem>

            <AccordionItem id="panel6" title="Umiejętności">
              <Abilities onAddSkill={(newSkill) => setAbilities(prev => [...prev, newSkill])}/>
            </AccordionItem>
          </div>
        </div>
        <div className="col-1 left">
        </div>
        <div className="col-7 bg bg-white">
          <PageSimulator
              personalData={personalData}
              study={study}
              experience={experience}
              cert={cert}
              language={language}
              abilities={abilities}
          />
        </div>
        <div className="col-1 left">
        </div>
      </div>
    </div>
  );
};

export default AccordionList;
