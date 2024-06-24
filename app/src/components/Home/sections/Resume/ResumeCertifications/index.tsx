"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import classNames from "classnames";
import { CertificationCard } from "../_";
import CertificationsMap from "@/data/map/certificationsMap";

const CERTIFICATION_MENU_ID = {
  ALL: "all",
  SE: "software-engineering",
  PM: "product-management",
  DS: "design",
  LG: "languages",
};

const ResumeCertifications = () => {
  const [selectedMenu, setSelectedMenu] = useState(CERTIFICATION_MENU_ID.ALL);

  const handleMenuChange = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    setSelectedMenu(id);
  };

  const data =
    selectedMenu === CERTIFICATION_MENU_ID.ALL
      ? CertificationsMap
      : CertificationsMap.filter((item) =>
          item.meta?.tags?.includes(selectedMenu)
        );

  return (
    <article id="resume-certification">
      <header>
        <h3 className="section-title-h3">Certifications</h3>
      </header>
      <div className="mt-64">
        <ul className="flex flex-nowrap gap-24 mb-40">
          <li>
            <NextLink
              id={CERTIFICATION_MENU_ID.ALL}
              className={classNames({
                ["certification-menu"]: true,
                ["is-active"]: selectedMenu === CERTIFICATION_MENU_ID.ALL,
              })}
              href={"#"}
              onClick={(e) => handleMenuChange(e, CERTIFICATION_MENU_ID.ALL)}
              target="blank"
              title="All certificates"
            >
              All
            </NextLink>
          </li>
          <li>
            <NextLink
              id={CERTIFICATION_MENU_ID.SE}
              className={classNames({
                ["certification-menu"]: true,
                ["is-active"]: selectedMenu === CERTIFICATION_MENU_ID.SE,
              })}
              href={"#"}
              onClick={(e) => handleMenuChange(e, CERTIFICATION_MENU_ID.SE)}
              target="blank"
              title="Software Engineering"
            >
              Software Engineering
            </NextLink>
          </li>
          <li>
            <NextLink
              id={CERTIFICATION_MENU_ID.PM}
              className={classNames({
                ["certification-menu"]: true,
                ["is-active"]: selectedMenu === CERTIFICATION_MENU_ID.PM,
              })}
              href={"#"}
              onClick={(e) => handleMenuChange(e, CERTIFICATION_MENU_ID.PM)}
              target="blank"
              title="Product Management, Marketing & Communication"
            >
              Product Management
            </NextLink>
          </li>
          <li>
            <NextLink
              id={CERTIFICATION_MENU_ID.DS}
              className={classNames({
                ["certification-menu"]: true,
                ["is-active"]: selectedMenu === CERTIFICATION_MENU_ID.DS,
              })}
              href={"#"}
              onClick={(e) => handleMenuChange(e, CERTIFICATION_MENU_ID.DS)}
              target="blank"
              title="UX & UI Design"
            >
              Design
            </NextLink>
          </li>
          <li>
            <NextLink
              id={CERTIFICATION_MENU_ID.LG}
              className={classNames({
                ["certification-menu"]: true,
                ["is-active"]: selectedMenu === CERTIFICATION_MENU_ID.LG,
              })}
              href={"#"}
              onClick={(e) => handleMenuChange(e, CERTIFICATION_MENU_ID.LG)}
              target="blank"
              title="Spoken and Working Languages"
            >
              Languages
            </NextLink>
          </li>
        </ul>
        {data.map((certification) => (
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
