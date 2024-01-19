import { ICompany } from "@@src/types";

interface ICompanyModel extends ICompany {
  id: string;
}

const CompaniesStatic: ICompanyModel[] = [
  {
    id: "veepee",
    name: "Veepee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat",
    logo: "https://media.licdn.com/dms/image/C4D0BAQE-L8HBv3pQeg/company-logo_100_100/0/1630513258950/veepee_logo?e=1713398400&v=beta&t=1KecDAotDXMVWpDGLkl3gzB6MyuYjr7JPvCNdEcna5A",
  },
  {
    id: "universign",
    name: "Universign",
    logo: "https://media.licdn.com/dms/image/D560BAQHvvXP-MLE5mQ/company-logo_100_100/0/1705589789842/signaturitgroup_logo?e=1714003200&v=beta&t=-wOtDjGfLMroWuLbAav5GTwvTrDMp_1aIAWxv2jfJS0",
  },
  {
    id: "wishibam",
    name: "Wishibam",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFKQPh3FJIb4Q/company-logo_100_100/0/1632414460524/wishibam_logo?e=1713398400&v=beta&t=cpFE6yi37vgbok7ZGZF_OxwFn6GjmSf0hlUMfL2VdrI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat",
  },
  {
    id: "antilop",
    name: "Antilop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin eleifend turpis, cursus sagittis velit blandit non. Quisque tincidunt faucibus dui ornare elementum. Fusce ante arcu, tincidunt eu ex nec, porttitor tempor odio. Pellentesque tristique lacus in sapien aliquet, non aliquet massa vestibulum. Sed tempor nisl quis risus ullamcorper volutpat. Suspendisse id arcu diam. Sed at congue elit. Phasellus porta feugiat lectus, non ornare velit. Maecenas risus est, ornare ut pretium sit amet, efficitur a erat",
  },
  {
    id: "catimini",
    name: "Catimini",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFfemjsrvPhMg/company-logo_200_200/0/1631336122444?e=1713398400&v=beta&t=vrGWlntLSlXlTfqBOIHZSpoYxEcAiwMxlap3pbZz8ZY",
  },
  {
    id: "kidiliz",
    name: "Kidiliz",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFfemjsrvPhMg/company-logo_200_200/0/1631336122444?e=1713398400&v=beta&t=vrGWlntLSlXlTfqBOIHZSpoYxEcAiwMxlap3pbZz8ZY",
  },
  {
    id: "tartine",
    name: "Tartine et Chocolat",
    logo: "https://media.licdn.com/dms/image/C4D0BAQHhEBcd2jO9nQ/company-logo_200_200/0/1630580947720/tartine_et_chocolat_logo?e=1713398400&v=beta&t=A157pgVjxBzbUlVDjIgOtFhvoQ06Nxd5PUGh5pFyhrU",
  },
  {
    id: "yse",
    name: "Ysé Paris",
    logo: "https://media.licdn.com/dms/image/C4E0BAQERrmiVh1t78w/company-logo_200_200/0/1677084042599?e=1713398400&v=beta&t=vlEZPTjUnwxSaehim0XrBcQc1UNz9SrNSEsqh2JPVoA",
  },
  {
    id: "upd",
    name: "Ultra Premium Direct",
    logo: "https://media.licdn.com/dms/image/C4E0BAQE10q9bFmsnrA/company-logo_200_200/0/1630648967699/natura_plus_ultra_pet_food_logo?e=1713398400&v=beta&t=A30CeZ5q0UI3FEtkBKr8I76ytTRf80W9C1sCLRZtKEc",
  },
  {
    id: "deuslynn",
    name: "Deuslynn Entreprise",
    shortName: "Deuslynn",
    logo: "https://media.licdn.com/dms/image/C560BAQFSAba7Lp-LUA/company-logo_100_100/0/1631341291740?e=1714003200&v=beta&t=G12HGGLtVWkP9g9Tbx8bRctM02w-u1kqd_k3ZnAbr3I",
  },
  {
    id: "alstom",
    name: "Alstom Transport",
    logo: "https://media.licdn.com/dms/image/C4E0BAQHeGrabdKRiig/company-logo_100_100/0/1630578969587/alstom_logo?e=1714003200&v=beta&t=Z7-6ePeUvDA-4X6v1S-s9aiuUHPGYvYGmcx1iIg2-9E",
  },
];

export default CompaniesStatic;
