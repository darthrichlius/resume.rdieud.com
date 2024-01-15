import { EExperiencePosition, IExperience } from "@/app/src/types";

const experienceMap: IExperience[] = [
  {
    description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
      `,
    company: {
      name: "Veepee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat",
      logo: "https://media.licdn.com/dms/image/C4D0BAQE-L8HBv3pQeg/company-logo_100_100/0/1630513258950/veepee_logo?e=1713398400&v=beta&t=1KecDAotDXMVWpDGLkl3gzB6MyuYjr7JPvCNdEcna5A",
    },
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
    company: {
      name: "Universign",
      logo: "https://media.licdn.com/dms/image/D4E0BAQFQItGYgQKYcQ/company-logo_100_100/0/1704357630320/signaturitgroup_logo?e=1713398400&v=beta&t=88kJckJ9Q21madCmCD8l1pn0TY2YaVwa6lTBQosRMjo",
    },
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
    company: {
      name: "Wishibam",
      logo: "https://media.licdn.com/dms/image/C4D0BAQFKQPh3FJIb4Q/company-logo_100_100/0/1632414460524/wishibam_logo?e=1713398400&v=beta&t=cpFE6yi37vgbok7ZGZF_OxwFn6GjmSf0hlUMfL2VdrI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat",
    },
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
        company: {
          name: "Wishibam",
          logo: "https://media.licdn.com/dms/image/C4D0BAQFKQPh3FJIb4Q/company-logo_100_100/0/1632414460524/wishibam_logo?e=1713398400&v=beta&t=cpFE6yi37vgbok7ZGZF_OxwFn6GjmSf0hlUMfL2VdrI",
        },
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
        company: {
          name: "Wishibam",
          logo: "https://media.licdn.com/dms/image/C4D0BAQFKQPh3FJIb4Q/company-logo_100_100/0/1632414460524/wishibam_logo?e=1713398400&v=beta&t=cpFE6yi37vgbok7ZGZF_OxwFn6GjmSf0hlUMfL2VdrI",
        },
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat. Donec congue eros ligula<p>
      `,
    company: {
      name: "Antilop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat",
    },
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
        company: {
          name: "Catimini",
          logo: "https://media.licdn.com/dms/image/C4D0BAQFfemjsrvPhMg/company-logo_200_200/0/1631336122444?e=1713398400&v=beta&t=vrGWlntLSlXlTfqBOIHZSpoYxEcAiwMxlap3pbZz8ZY",
        },
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: {
          name: "Kidiliz",
          logo: "https://media.licdn.com/dms/image/C4D0BAQFfemjsrvPhMg/company-logo_200_200/0/1631336122444?e=1713398400&v=beta&t=vrGWlntLSlXlTfqBOIHZSpoYxEcAiwMxlap3pbZz8ZY",
        },
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: {
          name: "Tartine et Chocolat",
          logo: "https://media.licdn.com/dms/image/C4D0BAQHhEBcd2jO9nQ/company-logo_200_200/0/1630580947720/tartine_et_chocolat_logo?e=1713398400&v=beta&t=A157pgVjxBzbUlVDjIgOtFhvoQ06Nxd5PUGh5pFyhrU",
        },
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: {
          name: "Ysé Paris",
          logo: "https://media.licdn.com/dms/image/C4E0BAQERrmiVh1t78w/company-logo_200_200/0/1677084042599?e=1713398400&v=beta&t=vlEZPTjUnwxSaehim0XrBcQc1UNz9SrNSEsqh2JPVoA",
        },
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
      {
        company: {
          name: "Ultra Premium Direct",
          logo: "https://media.licdn.com/dms/image/C4E0BAQE10q9bFmsnrA/company-logo_200_200/0/1630648967699/natura_plus_ultra_pet_food_logo?e=1713398400&v=beta&t=A30CeZ5q0UI3FEtkBKr8I76ytTRf80W9C1sCLRZtKEc",
        },
        contract: {
          location: "Paris, Île-de-France, France",
          position: "Senior Fullstack Engineer",
        },
      },
    ],
    group: ["2016", EExperiencePosition.DEVELOPER],
  },
  {
    company: {
      name: "Deuslynn Entreprise",
      logo: "https://media.licdn.com/dms/image/C560BAQFSAba7Lp-LUA/company-logo_100_100/0/1631341291740?e=1713398400&v=beta&t=spTSqOhfXIkEk_s_nrZzTyipupk1ggYWrYSE9wemfJk",
    },
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
    company: {
      name: "Alstom",
      logo: "https://media.licdn.com/dms/image/C4E0BAQHeGrabdKRiig/company-logo_100_100/0/1630578969587/alstom_logo?e=1713398400&v=beta&t=t0pNOPGx82bm0-MfGUr_znfT4jtxReXCAMYr6VH_n2s",
    },
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
