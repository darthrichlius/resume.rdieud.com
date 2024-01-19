import { EExperiencePosition, IExperience } from "@@src/types";

const experienceMap: IExperience[] = [
  {
    description: `
        
      `,
    company: "veepee",
    contract: {
      location: "Paris, Île-de-France, France",
      position: "Product Owner",
      type: "Permanent",
      startDate: "May 2023",
      endDate: "Aug 2023",
      duration: "4 mos",
    },
    group: ["2023", EExperiencePosition.PRODUCT_MANAGER],
  },
  {
    description: `
    <ul>
        <li>- <b>Discovery</b>: Market Analysis</li>
        <li>- <b>Strategy</b>: Wokskhop / Brainstorming</li>
        <li>- <b>Design</b>: UI/UX Validation, Sketch / Prototyping</li>
        <li>- <b>Execution</b>: Prioritization, Backlog Grooming / Functional specification, Progress monitoring, QA / Acceptance Testing, Demos / Review- Discovery: Market Analysis - Strategy: Wokskhop / Brainstorming - Design: UI/UX Validation, Sketch / Prototyping - Execution: Prioritization, Backlog Grooming / Functional specification, Progress monitoring, QA / Acceptance Testing, Demos / Review</li>
    </ul>
    <p>
        <b>Skills:</b> Adobe XD · Trello · Datadog · Confluence · Anglais · Signature électronique · Gestion de projet · JIRA · Gestion des versions · Gestion de projet logiciel · Project Management · Kanban · Product Management · Product Development
    </p>
    `,
    company: "universign",
    contract: {
      location: "Paris, Île-de-France, France",
      position: "Product Owner",
      type: "Permanent",
      startDate: "Feb 2022",
      endDate: "Jul 2022",
      duration: "6 mos",
    },
    group: ["2022", EExperiencePosition.PRODUCT_MANAGER],
  },
  {
    description: `
    <p>Worked on the development of the SaaS solution built specifically for retailer willing to go digital and improve their experience in managing their stock and orders thanks to a ready to use omni-canal solution. The solution is currently helping several brands increasing their revenue by 10 to 15%.</p>
    <p>Beyond my Product Manager role, I helped the company on improving their workflow thanks to a tailored Scrum methodology to help deliver faster and better</p>
    <p>
        <b>Skills:</b> Trello · Datadog · Confluence · Anglais · Gestion de projet · JIRA · Linux · Test unitaire · Gestion des versions · Gestion de projet logiciel · Change Management · Scrum · E-commerce · Symfony · Api Platform · Redux · Product Management · Product Development
    </p>
    `,
    company: "wishibam",
    contract: {
      location: "Paris, Île-de-France, France",
      position: "Product Owner / Developer",
      type: "Permanent",
      startDate: "Dec 2018",
      endDate: "Jun 2020",
      duration: "1 yr 6 mos",
    },
    meta: {
      disableChildrenAvatar: true,
    },
    children: [
      {
        company: "wishibam",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Product Owner",
          type: "Permanent",
          startDate: "Jun 2019",
          endDate: "Jun 2020",
          duration: "1 yr",
        },
      },
      {
        company: "wishibam",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
          type: "Permanent",
          startDate: "Dec 2018",
          endDate: "Jun 2019",
          duration: "6 mos",
        },
      },
    ],
    group: ["2020", EExperiencePosition.PRODUCT_MANAGER],
  },

  {
    description: `
        <p>Worked on several projects around e-commerce online shops in the interest of brands like Ultra Premium Direct, Catimini, Yse Paris, Kidiliz, ... just to name a few.<p>
        <p>As a developer and senior member of the Scrum team, I was in charge of improving the software architecture, optimizing the database and adding new features.<p>
        <p>One of our core tasks was about adding SaaS serives like Target2Sell, Google UTM, ... Improving search performance through tools like Elastic Search and Algolia but also to create a tailored Prestashop version to meet our clients specific needs</p>
        <p>
          <b>Skills:</b> Confluence · JIRA · PHP · JavaScript · MySQL · Test unitaire · Tests de régression · Gestion des versions · Scrum · Prestashop · E-commerce · Symfony
        </p>
      `,
    company: "antilop",
    contract: {
      location: "Paris, Île-de-France, France",
      position: "Senior Fullstack Engineer",
      type: "Permanent",
      startDate: "Nov 2016",
      endDate: "Nov 2018",
      duration: "2yrs 1mo",
    },
    children: [
      {
        company: "catimini",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: "kidiliz",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: "tartine",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: "yse",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: "upd",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
    ],
    group: ["2016", EExperiencePosition.DEVELOPER],
  },
  {
    description: `
      <p>
        <b>Skills:</b> Confluence · Gestion de projet · JIRA · PHP · JavaScript · MySQL · Linux · SEO · Test unitaire · Tests de régression · Gestion des versions · Lean Startup · Gestion de projet logiciel · Administration des serveurs · Project Management · Scrum · Stratégie marketing · Management · Hotjar · Product Management
      </p>
    `,
    company: "deuslynn",
    contract: {
      location: "Lyon, Auvergne-Rhône-Alpes, France",
      position: "Owner / CPTO",
      type: "Permanent",
      startDate: "Nov 2012",
      endDate: "Oct 2016",
      duration: "4 yrs",
    },
    group: [
      "2012",
      EExperiencePosition.OWNER,
      EExperiencePosition.PRODUCT_MANAGER,
      EExperiencePosition.DEVELOPER,
    ],
  },
  {
    description: `
      <p>
        <b>Skills:</b> Gestion de projet · jQuery · HTML 5 · MySQL · Test unitaire · Gestion des versions · Gestion de projet logiciel · Project Management
      </p>
    `,
    company: "alstom",
    contract: {
      location: "Lyon, Auvergne-Rhône-Alpes, France",
      position: "Project Manager",
      type: "",
      startDate: "Oct 2011",
      endDate: "Sep 2012",
      duration: "1 yr",
    },
    group: [
      "2011",
      EExperiencePosition.PRODUCT_MANAGER,
      EExperiencePosition.DEVELOPER,
    ],
  },
];

export default experienceMap;
