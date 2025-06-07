import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { generatePdfBlob } from './PdfGenerator';

// konfiguracja pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfDisplay = ({ personalData, study, experience, cert, language, abilities }) => {
  const [pdfBlob, setPdfBlob] = useState(null);

  useEffect(() => {
    const generate = async () => {
      const blob = await generatePdfBlob({ personalData, study, experience, cert, language, abilities });
      setPdfBlob(blob);
    };

    generate();
  }, [personalData, study, experience, cert, language, abilities]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff' }}>
      {pdfBlob && (
        <Document file={pdfBlob}>
          <Page pageNumber={1} width={800} />
        </Document>
      )}
    </div>
  );
};

export default PdfDisplay;
