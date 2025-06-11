import React, { useRef, useState } from 'react';
import AccordionItem from './AccordionItem';
import PersonalDataForm from './AccordDataSet/PersonalDataForm';
import Study from './AccordDataSet/Study';
import Experience from './AccordDataSet/Experience';
import Cert from './AccordDataSet/Cert';
import Language from './AccordDataSet/Language';
import Abilities from './AccordDataSet/Abilities';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import PageSimulator from './PdfSheets/PageSimulator';

const AccordionList = () => {
  const pageSimulatorRef = useRef();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [personalData, setPersonalData] = useState([]);
  const [study, setStudy] = useState([]);
  const [experience, setExperience] = useState([]);
  const [cert, setCert] = useState([]);
  const [language, setLanguage] = useState([]);
  const [abilities, setAbilities] = useState([]);

  const buttons = [
    {language: 'pl', icon: '🇵🇱'},
    {language: 'en', icon: '🇬🇧'},
    {language: 'de', icon: '🇩🇪'},
    {language: 'es', icon: '🇪🇸'},
    {language: 'fr', icon: '🇫🇷'},
  ];

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-3 p-4 right">
          <div className="d-flex justify-content-center mb-3" >
            {buttons.map((but, id) => (
              <button onClick={() => changeLanguage(but.language)} className="btn btn-sm btn-style me-2">
              {but.icon}
            </button>
            ))}
          </div>

          <div className="accordion" id="accordionExample">
            <AccordionItem id="panel1" title={t('personalData')} defaultOpen={true} className="rounded-top">
              <PersonalDataForm setPersonalData={setPersonalData} />
            </AccordionItem>

            <AccordionItem id="panel2" title={t('education')}>
              <Study onAddStudy={(newStudy) => setStudy(prev => [...prev, newStudy])} />
            </AccordionItem>

            <AccordionItem id="panel3" title={t('experience')}>
              <Experience onAddExperience={(newExp) => setExperience(prev => [...prev, newExp])} onRemoveExperience={(updatedlist) => {
                setExperience(updatedlist);
              }}/>
            </AccordionItem>

            <AccordionItem id="panel4" title={t('certificates')}>
              <Cert onAddCert={(newCert) => setCert(prev => [...prev, newCert])} />
            </AccordionItem>

            <AccordionItem id="panel5" title={t('languages')}>
              <Language onAddLanguage={(newLang) => setLanguage(prev => [...prev, newLang])} />
            </AccordionItem>

            <AccordionItem id="panel6" title={t('skills')}>
              <Abilities onAddSkill={(newSkill) => setAbilities(prev => [...prev, newSkill])} />
            </AccordionItem>
          </div>
          <div className='justify-content-center'>
          <button className='btn btn-style btn-sm mt-2' onClick={() =>    pageSimulatorRef.current.generatePdf()}>{t('generate')}</button>
          </div>
        </div>

        <div className="col-7" style={{ backgroundColor: "#15141A" }}>
          <PageSimulator
            ref={pageSimulatorRef}
            personalData={personalData}
            study={study}
            experience={experience}
            cert={cert}
            language={language}
            abilities={abilities}
          />
        </div>

        <div className='col-2' style={{ backgroundColor: "#15141A" }}></div>
      </div>
    </div>
  );
};

export default AccordionList;
