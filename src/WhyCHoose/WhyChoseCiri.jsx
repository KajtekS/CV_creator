import React from "react";
import CiriFeatureCard from "./CiriFeatureCard";
import { ciriFeatures } from "./feature.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./resume.png";

export default function WhyChooseCiri() {
  // Podział na dwie kolumny: lewą i prawą
  const leftFeatures = ciriFeatures.slice(0, 2);
  const rightFeatures = ciriFeatures.slice(2);

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-5 fw-bold">
        Dlaczego Warto Wybrać <span className="text-primary">Ciri</span>
      </h2>

      <div className="row align-items-center justify-content-center">
        {/* Lewa kolumna */}
        <div className="col-4 d-flex flex-column gap-5 align-items-end">
          {leftFeatures.map((feature) => (
            <CiriFeatureCard key={feature.id} {...feature} align="end" />
          ))}
        </div>

        {/* Środkowy obrazek */}
        <div className="col-4 d-flex justify-content-center mb-5 mb-md-0">
          <div
            className="bg-light border rounded shadow p-4"
            style={{ width: "240px", height: "320px" }}
          >
            <img src={image} className="img-fluid" alt="CV" />
          </div>
        </div>

        {/* Prawa kolumna */}
        <div className="col-4 d-flex flex-column gap-5 align-items-start">
          {rightFeatures.map((feature) => (
            <CiriFeatureCard key={feature.id} {...feature} align="start" />
          ))}
        </div>
      </div>
    </div>
  );
}
