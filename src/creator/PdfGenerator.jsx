import { pdf } from '@react-pdf/renderer';
import PdfPage from './PdfSheets/PdfPage';

export const generatePdfBlob = async ({ personalData, study, experience, cert, language, abilities }) => {
  const blob = await pdf(
    <PdfPage
      personalData={personalData}
      study={study}
      experience={experience}
      cert={cert}
      language={language}
      abilities={abilities}
    />
  ).toBlob();

  return blob;
};
