import { EExperiencePosition, IExperience } from "@@src/types";

const experienceMap: IExperience[] = [
  {
    description: {
      display: `
        <p>After years as a Product Leader, I decided to <b>transition back to software engineering</b> to fully embrace the exciting opportunities offered by the industry, especially in the <b>cloud services</b> and the promising <b>new AI era</b>.</p>
        <p>In my free time, I developed half a dozen personal projects focused on improving and perfecting technologies that interest me, including <b>React</b>, <b>Next.js</b>, <b>Node.js/Express.js</b>, <b>monorepos</b>, <b>microservices</b>, <b>microfrontends</b>, and <b>cloud/serverless</b> applications.</p>
      `,
      complement: `
        <p>During this period, I built applications in various contexts and fields, such as <b>video games</b>, <b>productivity</b>, <b>real-time communication</b>, and <b>AI conversation</b>.</p>
        <p>Additionally, I obtained certifications in various domains to enhance my knowledge, creativity, and resourcefulness, making me an even more valuable asset to any company I would be proud to join.<p>
        `,
      footer: `
          <p>
            <b>Stack</b>: TypeScript · React · NextJS · NodeJS · ExpressJS · API · PostgreSQL · Turborepo · Prisma · Webpack · React Native
          </p>
          <p>
            <b>Certifications</b>: Meta Front-End Developer · Meta Back-End Developer · NodeJS Application Developper (JSNAD) · NodeJS Services Developer (JSNSD) · AWS certified Practitioner · AWS certified Developer
          </p>
        `,
    },
    company: "",
    contract: {
      location: "France",
      position: "Freelance Senior Fullstack Engineer",
      type: "Permanent",
      startDate: "Oct 2023",
      endDate: "Today",
      duration: "9 mos",
    },
    group: ["2024", EExperiencePosition.DEVELOPER],
  },
  {
    description: {
      display: `
        <p>Veepee is an extraordinary company, where I had the pleasure of experiencing an <b>exceptional working environment</b>, <b>talented management</b>, and the <b>responsibility and challenges</b> that accelerated my experience in product ownership.</p>
        <p>Recruited in 2023 as a Product Owner, I led a portfolio of a dozen products, impacting the entire 5000+ employee organization.</p>
      `,
      complement: `
        <p>In this pivotal role, my team and I were central to the company's operations, engaging with stakeholders at various levels, including the CTO (Director of VeepeeTech), VP Tech (Jean Baptiste Kempf, Founder and Lead for VLC), and VP Product (Boris De Lastours), among others. Our work had a real impact on millions of our users, providing solutions that helped other teams perform..</p>
        <p>Finally, the internal work environment, where English is widely spoken, added to the unique and vibrant atmosphere of the company. I really appreciated the international-oriented environment and the confidence given to each employee, while being a very demanding position and company.</p>
      `,
    },
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
    description: {
      display: `
        <p>After a 2-year professional break in the context of the COVID-19 pandemic and a private event, I re-entered the professional arena as a Product Owner for Universign, driven by my curiosity around crypto technologies.</p>
      `,
      complement: `
        <p>I was part of a product team composed of 3 other POs (1 permanent and 2 contractual) and a Product Lead. My daily routine involved project meetings, workshops, follow-ups with designers, testing, backlog management, and backlog grooming with tech leads, as well as competitive analysis.</p>
        <p>My scope <b>covered both the web application and the mobile application</b>. In contrast to the web scope, I was the sole Product Owner for a mobile team of 4.</p>
        <p>
          - <b>Discovery</b>: Competitive Analysis
          - <b>Strategy</b>: Wokskhop / Brainstorming
          - <b>Design</b>: UI/UX Validation, Sketch / Prototyping
          - <b>Execution</b>: Prioritization, Backlog Grooming / Functional Specification, Progress Monitoring, QA / Acceptance Testing, Demos / Review
        </p>
      `,
      footer: `
        <p>
          <b>Scope</b>: Product Management · Electronic Signature · Software Project Management · Scrum · Kanban · English Workplace
        </p>
        <p>
          <b>Stack</b>: Adobe XD · Trello · Datadog · Confluence · JIRA · Miro
        </p>
      `,
    },
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
    description: {
      display: `
        <p>Worked on the development of a <b>SaaS solution</b> specifically designed for retailers <b>transitioning to an omnichannel sales strategy</b>. One of the key features was the creation of a smart and versatile catalog importer, addressing a significant barrier in the transition process.</p>
      `,
      complement: `
        <p>The solution facilitates digital transformation, enhances stock management, and streamlines orders through a ready-to-use online omnichannel platform. A major achievement has been assisting several retailers in sustaining their operations and staying competitive. Consequently, our solution played a pivotal role in <b>increasing the revenue of several brands by 10 to 15%</b>.</p>
        <p>In addition to my role as a Product Manager, I contributed to improving the company's workflow by implementing a customized Scrum methodology, resulting in faster and more effective delivery.</p>
      `,
    },
    company: "wishibam",
    contract: {
      location: "Paris, Île-de-France, France",
      position: "Senior Fullstack Engineer /Product Manager",
      type: "Permanent",
      startDate: "Dec 2018",
      endDate: "Jun 2020",
      duration: "1 yr 6 mos",
    },
    meta: {
      disableChildrenAvatar: true,
      disableChildrenCompany: true,
    },
    children: [
      {
        description: {
          footer: `
            <p>
              <b>Scope</b>: Product Management · Product Development · Project Management · Change Management · Scrum · E-commerce
            </p>
            <p>
              <b>Stack</b>: Trello · Confluence  · JIRA
            </p>
          `,
        },
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
        description: {
          footer: `
            <p>
              <b>Stack</b>: React · Symfony · API Platform · Redux · Unit Testing · Git · Wordpress · Docker
            </p>
          `,
        },
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
    description: {
      display: `<p>Contributed to multiple projects involving <b>e-commerce online shops</b> for prominent brands such as Ultra Premium Direct, Catimini, Yse Paris, Kidiliz, and more. Notably, our work helped our clients <b>sustain the high seasons of sales and other major marketing events, regularly increasing their revenues</b>.<p>`,
      complement: `
        <p>In my capacity as a developer and senior member of the Scrum team, I spearheaded efforts to enhance software architecture, optimize databases, and introduce new features.<p>
        <p>A central focus was integrating <b>SaaS services like Global-E, Target2Sell, Google UTM, and others</b>. Additionally, we prioritized improving search performance utilizing tools such as Elastic Search and Algolia. Moreover, we developed a customized Prestashop version to cater to the specific needs of our clients.</p>
      `,
      footer: `
        <p>
          <b>Scope</b>: Scrum · E-commerce · API Design · Unit Testing · E2E Testing
        </p>
        <p>
          <b>Stack</b>: Gulp · Git · Stripe · Be2Bill · PHP · Prestashop · Symfony · JavaScript · Algolia · Elastic Search · MySQL · PHP Unit · Behat · Cypress · Jenkins · Capistrano
        </p>
      `,
    },
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
    description: {
      display: `
        <p>As a Lead Technical and Product Manager, I led a 3-member team in the development of "Trenqr.com," a social network designed for individuals seeking connections and friendships based on common interests.</p>
      `,
      complement: `
        <p>The pitch aimed to offer a solution that blended the visual appeal of Instagram, the networking features of Facebook, and the interest-based meetings of Meetup. Despite the product turning out to be more technically challenging than anticipated, notably due to a <b>lack of experience in complex technologies such as real-time, concomitant events management, and responsiveness (which was not as simple as it is today), we successfully launched it in 2015</b>.</p>
        <p>Unfortunately, we missed the market momentum, and the final product did not align with current trends and the intense competition from our rivals. Consequently, the platform was closed one year later, although it did manage to activate a little more than a <b>thousand user accounts</b>.</p>
      `,
      footer: `
        <p>
          <b>Scope</b>: Project Management · Product Management · Team Management
        </p>
        <p>
          <b>Stack</b>: PHP · Javascript · jQuery · HTML 5 · MySQL · Unit Testing · Tortoise SVN
        </p>
      `,
    },
    company: "deuslynn",
    contract: {
      location: "Lyon, Auvergne-Rhône-Alpes, France",
      position: "Owner / Principal Tech & Product",
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
    description: {
      display: `
        <p>I work-studied for 1 year at Alstom Transport as a Junior Project Manager and technical lead for a project during my 'IT Project Management' License program.</p>
      `,
      complement: `
        <p>The objective was to collaborate with team members on the train boardcard manufacturing line. Their main challenge revolved around using Excel as a reporting and monitoring tool.</p>
        <p>During my mission, I was tasked with studying and understanding their needs, providing requirements, and successfully developing a Proof of Concept (POC).</p>
      `,
      footer: `
        <p>
            <b>Scope</b>: Project Management · Software Development · Roadmapping
        </p>
        <p>
            <b>Stack</b>: C# · .Net · Microsoft Access · Tortoise SVN 
        </p>
      `,
    },
    company: "alstom",
    contract: {
      location: "Lyon, Auvergne-Rhône-Alpes, France",
      position: "Tech Lead / Project Manager",
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
