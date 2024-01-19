import React from "react";
import { CertificationCard } from "../_/";
import CertificationsMap from "@/static/certificationsMap";

const ResumeCertifications = () => {
  return (
    <div className="mt-96">
      {CertificationsMap.map((certification) => (
        <CertificationCard
          key={certification.title}
          certification={certification}
        />
      ))}
    </div>
  );
};

export default ResumeCertifications;
