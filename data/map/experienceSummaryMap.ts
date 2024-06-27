import { IExperience } from "@@src/types";

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
        company: "wishibam",
      },
      {
        contract: {
          location: "Paris FR",
          refYear: "2016",
        },
        company: "antilop",
        children: [
          {
            company: "catimini",
          },
          {
            company: "kidiliz",
          },
          {
            company: "tartine",
          },
          {
            company: "yse",
          },
          {
            company: "upd",
          },
        ],
      },
      {
        contract: {
          location: "Lyon FR",
          refYear: "2012",
        },
        company: "deuslynn",
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
        company: "veepee",
      },
      {
        contract: {
          location: "Paris FR",
          refYear: "2022",
        },
        company: "universign",
      },
      {
        contract: {
          location: "Paris FR",
          refYear: "2018",
        },
        company: "wishibam",
      },
      {
        contract: {
          location: "Lyon FR",
          refYear: "2011",
        },
        company: "alstom",
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
        company: "deuslynn",
      },
    ],
  },
];

export default experienceSummaryMap;
