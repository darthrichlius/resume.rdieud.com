import { ICertification } from "@@/Home/sections/Resume/_/CertificationCard";

const CertificationsMap: ICertification[] = [
  {
    title: "TOEIC® | 920/990",
    issued: "Jan 2023",
    provider: "ets_global",
  },
  {
    title: "Professional Scrum Product Owner I",
    issued: "Feb 2023",
    credentialUrl: "https://www.scrum.org/certificates/924702",
    provider: "scrum_org",
    skills: [
      "Product Management",
      "Stakeholder Management",
      "Evidence-based Management",
      "Backlog Management",
      "Scrum",
      "Risk Management",
    ],
  },
  {
    title: "OKR Certification: Leadership and Goal Setting",
    issued: "Jan 2023",
    credentialUrl:
      "https://coursera.org/share/f29571fd7abb09f1e4d54d2c71ecbd51",
    provider: "mwm",
  },
  {
    title: "Wharton certified Marketing",
    issued: "Jan 2023",
    credentialUrl:
      "https://coursera.org/share/0b6b9be4247339baf162aa431eddf3b6",
    provider: "wharton_online",
    skills: [
      "Marketing Management",
      "Branding",
      "Positioning (Marketing)",
      "Go-to-Market Strategy",
      "Marketing",
      "Pricing Strategy",
    ],
  },
  {
    title: "Google Certified Foundations of User Experience (UX) Design",
    issued: "Dec 2022",
    credentialUrl:
      "https://coursera.org/share/24a0347e2e3d84635d0ddedc39b117a5",
    provider: "google",
  },
  {
    title: "Certified Product Manager",
    issued: "Nov 2022",
    credentialUrl: "https://badgr.com/public/assertions/1Oz35EDsTl-gYZtyK9dXPw",
    provider: "hubvisory",
  },
];

export default CertificationsMap;
