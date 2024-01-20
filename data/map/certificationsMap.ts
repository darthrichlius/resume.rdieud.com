import { ICertification } from "@@/Home/sections/Resume/_/CertificationCard";

const CertificationsMap: ICertification[] = [
  {
    title: "TOEIC® | 920/990",
    issued: "Jan 2023",
    provider: {
      name: "ETS Global",
      url: "",
      /**
       * ! IMPORTANT
       * @todo Use local
       */
      logoUrl:
        "https://media.licdn.com/dms/image/C560BAQG8wr1PJuA-qw/company-logo_200_200/0/1630587150189/educational_testing_service_ets_logo?e=1714003200&v=beta&t=8H4FNF3eFpv0zjSXPQCdVDecPF1hvrLuYdyzng5WOj4",
    },
  },
  {
    title: "Professional Scrum Product Owner I",
    issued: "Feb 2023",
    credentialUrl: "https://www.scrum.org/certificates/924702",
    provider: {
      name: "Scrum.org",
      url: "",
      /**
       * ! IMPORTANT
       * @todo Use local
       */
      logoUrl:
        "https://media.licdn.com/dms/image/C560BAQFzF6WZjNSHkQ/company-logo_200_200/0/1631433558836?e=1713398400&v=beta&t=p62Ev5VxLW9JNcM3UaAsCSheL0jOBWbu_Iiqol2Fbfc",
    },
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
    provider: {
      name: "Measure What Matters | OKR Resources",
      url: "https://www.linkedin.com/company/34766609/",
      logoUrl:
        "https://media.licdn.com/dms/image/C560BAQHYCv6AZxLxww/company-logo_200_200/0/1630617283120?e=1713398400&v=beta&t=-3Vl16EcNjVeoopMOGK1QbDOiQGOT7MnU_X9E-3gCMc",
    },
  },
  {
    title: "Wharton certified Marketing",
    issued: "Jan 2023",
    credentialUrl:
      "https://coursera.org/share/0b6b9be4247339baf162aa431eddf3b6",
    provider: {
      name: "Wharton Online",
      url: "https://www.linkedin.com/school/wharton-online/",
      logoUrl:
        "https://media.licdn.com/dms/image/C4E0BAQESwPxGyVRzpw/company-logo_200_200/0/1634665776561/wharton_online_logo?e=1713398400&v=beta&t=oJKw3Ze07B46VRSzrAFByqRsDy79andi74GIWp3wX4U",
    },
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
    provider: {
      name: "Google",
      url: "https://www.linkedin.com/company/google/",
      logoUrl:
        "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1631311446380?e=1713398400&v=beta&t=l7wviACTcwEKpr7bhw0WNZAo2OX0O7DMXcs2t50yeh8",
    },
  },
  {
    title: "Certified Product Manager",
    issued: "Nov 2022",
    credentialUrl: "https://badgr.com/public/assertions/1Oz35EDsTl-gYZtyK9dXPw",
    provider: {
      name: "Hubvisory",
      url: "https://www.linkedin.com/company/hubvisory/",
      logoUrl:
        "https://media.licdn.com/dms/image/D560BAQHJd5On3c-bvw/company-logo_200_200/0/1667399764092/hubvisory_logo?e=1713398400&v=beta&t=zD66Db7mSWB90JbyI2llPJ83P7eeo9_SLAAP_PTL1Gk",
    },
  },
];

export default CertificationsMap;
