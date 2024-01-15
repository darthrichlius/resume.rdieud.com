import { IExperience } from "@/app/src/types";

const experienceSummaryMap: {
  heading: string;
  list: IExperience[];
}[] = [
  {
    heading: "Software Developer",
    list: [
      {
        contract: {
          location: "Paris FR",
          refYear: "2018",
        },
        company: {
          name: "Wishibam",
        },
      },
      {
        contract: {
          location: "Paris FR",
          refYear: "2016",
        },
        company: {
          name: "Antilop",
        },
        children: [
          {
            company: {
              name: "Catimini",
            },
          },
          {
            company: {
              name: "Kidiliz",
            },
          },
          {
            company: {
              name: "Tartine et Chocolat",
            },
          },
          {
            company: {
              name: "Ysé Paris",
            },
          },
          {
            company: {
              name: "Ultra Premium Direct",
            },
          },
        ],
      },
    ],
  },
  {
    heading: "Product Manager",
    list: [
      {
        contract: {
          location: "Paris FR",
          refYear: "2023",
        },
        company: {
          name: "Veepee",
        },
      },
      {
        contract: {
          location: "Paris FR",
          refYear: "2022",
        },
        company: {
          name: "Universign",
        },
      },
      {
        contract: {
          location: "Paris FR",
          refYear: "2018",
        },
        company: {
          name: "Wishibam",
        },
      },
      {
        contract: {
          location: "Lyon FR",
          refYear: "2011",
        },
        company: {
          name: "Alstom Transport",
        },
      },
    ],
  },
  {
    heading: "Entrepreneur / CPTO",
    list: [
      {
        contract: {
          location: "Lyon FR",
          refYear: "2012",
        },
        company: {
          name: "Deuslynn",
        },
      },
    ],
  },
];

export default experienceSummaryMap;
