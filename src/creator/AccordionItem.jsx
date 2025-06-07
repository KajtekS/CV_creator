import React from 'react';

const AccordionItem = ({ id, title, children, defaultOpen = false }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`${id}-heading`}>
        <button
          className={`accordion-button ${defaultOpen ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}-collapse`}
          aria-expanded={defaultOpen}
          aria-controls={`${id}-collapse`}
        >
          {title}
        </button>
      </h2>

      <div
        id={`${id}-collapse`}
        className={`accordion-collapse collapse ${defaultOpen ? 'show' : ''}`}
        aria-labelledby={`${id}-heading`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
