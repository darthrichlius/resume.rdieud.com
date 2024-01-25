import React from "react";
import { CertificationCard } from "../_";
import CertificationsMap from "@/data/map/certificationsMap";

const ResumeCertifications = () => {
  return (
    <article className="mt-96">
      <header>
        <h3 className="section-title-h3">Certifications</h3>
      </header>
      <div className="mt-64">
        {CertificationsMap.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>
    </article>
  );
};

export default ResumeCertifications;
