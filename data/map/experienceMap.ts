import { EExperiencePosition, IExperience } from "@@src/types";

const experienceMap: IExperience[] = [
  {
    description: `
        <p>Veepee is an extraordinary company, where I had the pleasure of experiencing an <b>exceptional working environment</b>, <b>talented management</b>, and the <b>responsibility and challenges</b> that accelerated my experience in product ownership.</p>
        <p>Recruited in 2023 as a Product Owner, I led a portfolio of a dozen products, impacting the entire 5000+ employee organization.</p>
        <p>In this pivotal role, my team and I were central to the company's operations, engaging with stakeholders at various levels, including the CTO (Director of VeepeeTech), VP Tech (Jean Baptiste Kempf, Founder and Lead for VLC), and VP Product (Boris De Lastours), among others. Our work had a real impact on millions of our users, providing solutions that helped other teams perform..</p>
        <p>Finally, the internal work environment, where English is widely spoken, added to the unique and vibrant atmosphere of the company. I really appreciated the international-oriented environment and the confidence given to each employee, while being a very demanding position and company.</p>
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
        <li>- <b>Discovery</b>: Competitive Analysis</li>
        <li>- <b>Strategy</b>: Wokskhop / Brainstorming</li>
        <li>- <b>Design</b>: UI/UX Validation, Sketch / Prototyping</li>
        <li>- <b>Execution</b>: Prioritization, Backlog Grooming / Functional Specification, Progress Monitoring, QA / Acceptance Testing, Demos / Review</li>
    </ul>
    <p>
      <b>Scope</b>: Product Management · Electronic Signature · Software Project Management · Scrum · Kanban · English Workplace
    </p>
    <p>
      <b>Stack</b>: Adobe XD · Trello · Datadog · Confluence · JIRA · Miro
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
    <p>Worked on the development of a <b>SaaS solution</b> specifically designed for retailers <b>transitioning to an omnichannel sales strategy</b>. One of the key features was the creation of a smart and versatile catalog importer, addressing a significant barrier in the transition process.</p>
    <p>The solution facilitates digital transformation, enhances stock management, and streamlines orders through a ready-to-use online omnichannel platform. A major achievement has been assisting several retailers in sustaining their operations and staying competitive. Consequently, our solution played a pivotal role in <b>increasing the revenue of several brands by 10 to 15%</b>.</p>
    <p>In addition to my role as a Product Manager, I contributed to improving the company's workflow by implementing a customized Scrum methodology, resulting in faster and more effective delivery.</p>
    `,
    company: "wishibam",
    contract: {
      location: "Paris, Île-de-France, France",
      position: "Product Manager / Developer",
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
        description: `
        <p>
          <b>Scope</b>: Product Management · Product Development · Project Management · Change Management · Scrum · E-commerce
        </p>
        <p>
          <b>Stack</b>: Trello · Confluence  · JIRA
        </p>
        `,
        company: "wishibam",
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Product Manager",
          type: "Permanent",
          startDate: "Jun 2019",
          endDate: "Jun 2020",
          duration: "1 yr",
        },
      },
      {
        description: `
        <p>
          <b>Stack</b>: React · Symfony · API Platform · Redux · Unit Testing · Git · Wordpress · Docker
        </p>
        `,
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
      <p>Contributed to multiple projects involving <b>e-commerce online shops</b> for prominent brands such as Ultra Premium Direct, Catimini, Yse Paris, Kidiliz, and more. Notably, our work helped our clients <b>sustain the high seasons of sales and other major marketing events, regularly increasing their revenues</b>.<p>
      <p>In my capacity as a developer and senior member of the Scrum team, I spearheaded efforts to enhance software architecture, optimize databases, and introduce new features.<p>
      <p>A central focus was integrating <b>SaaS services like Global-E, Target2Sell, Google UTM, and others</b>. Additionally, we prioritized improving search performance utilizing tools such as Elastic Search and Algolia. Moreover, we developed a customized Prestashop version to cater to the specific needs of our clients.</p>
      <p>
        <b>Scope</b>: Scrum · E-commerce · API Design · Unit Testing · E2E Testing
      </p>
      <p>
        <b>Stack</b>: Gulp · Git · Stripe · Be2Bill · PHP · Prestashop · Symfony · JavaScript · Algolia · Elastic Search · MySQL · PHP Unit · Behat · Cypress · Jenkins · Capistrano
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
        <b>Scope</b>: Project Management · Product Management · Team Management
      </p>
      <p>
        <b>Stack</b>: PHP · Javascript · jQuery · HTML 5 · MySQL · Unit Testing · Tortoise SVN
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
          <b>Scope</b>: Project Management · Software Development · Roadmapping
      </p>
      <p>
          <b>Stack</b>: C# · .Net · Microsoft Access · Tortoise SVN 
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
