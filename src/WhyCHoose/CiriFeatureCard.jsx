import React from "react";

export default function CiriFeatureCard({ id, title, description, align = "center" }) {
  return (
    <div className={`text-${align} w-100`}>
      <div
        className="d-inline-flex align-items-center justify-content-center bg-primary text-white mb-2"
        style={{
          width: "64px",
          height: "64px",
          fontSize: "48px",
          fontWeight: "bold",
          borderRadius: "16px",
        }}
      >
        {id}
      </div>
      <h6 className="fw-bold">{title}</h6>
      <small>{description}</small>
    </div>
  );
}
