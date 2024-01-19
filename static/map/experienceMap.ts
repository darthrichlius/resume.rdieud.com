import { EExperiencePosition, IExperience } from "@@src/types";

const experienceMap: IExperience[] = [
  {
    description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
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
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>`,
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
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
    company: "deuxlynn",
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
    company: "deuslynn",
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
