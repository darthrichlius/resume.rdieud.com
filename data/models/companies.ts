import { ICompany } from "@@src/types";

import VeepeeLogo from "@@/assets/images/companies/veepee_logo.jpeg";
import UniversignLogo from "@@/assets/images/companies/universign_logo.jpeg";
import WishibamLogo from "@@/assets/images/companies/wishibam_logo.jpeg";
import KidilizLogo from "@@/assets/images/companies/kidiliz_logo.jpeg";
import TartineLogo from "@@/assets/images/companies/tartine_et_chocolat_logo.jpeg";
import YseLogo from "@@/assets/images/companies/yse_logo.jpeg";
import UpdLogo from "@@/assets/images/companies/upd_logo.jpeg";
import DeuslynnLogo from "@@/assets/images/companies/deuslynn_logo.jpeg";
import AlstomLogo from "@@/assets/images/companies/alstom_logo.jpeg";
import ETSLogo from "@@/assets/images/companies/ets_logo.jpeg";
import ScrumLogo from "@@/assets/images/companies/scrum_org_logo.jpeg";
import MWMLogo from "@@/assets/images/companies/measure_what_matter_logo.jpeg";
import WhartonLogo from "@@/assets/images/companies/wharton_online_logo.jpeg";
import GoogleLogo from "@@/assets/images/companies/google_logo.jpeg";
import HubvisoryLogo from "@@/assets/images/companies/hubvisory_logo.jpeg";

interface ICompanyModel extends ICompany {
  id: string;
}

const CompaniesStatic: ICompanyModel[] = [
  {
    id: "veepee",
    name: "Veepee",
    description: {
      display:
        "Veepee is an international and European leader in e-commerce, specializing in flash sales",
      full: "Veepee is an international and European leader in e-commerce, specializing in flash sales. For over 20 years, Veepee has served millions of clients worldwide, thanks to the collaboration of over 6000 employees contributing to the company's multi-billion-dollar annual revenue.",
    },
    logo: VeepeeLogo,
  },
  {
    id: "universign",
    name: "Universign",
    description: {
      display:
        "Universign is an eIDAS Trust service that provides electronic signature solutions competing with Docusign",
      full: "Universign specializes in providing electronic signature solutions to businesses and is among the few eIDAS Trust service providers in France. Using advanced cryptographic technologies, Universign ensures compliance with legal regulations. Now part of a European conglomerate, the company aims to compete with the global leader, Docusign.",
    },
    logo: UniversignLogo,
  },
  {
    id: "wishibam",
    name: "Wishibam",
    logo: WishibamLogo,
    description: {
      display:
        "Whishibam specializes in omnichannel solutions, empowering physical shops to seamlessly transition to an omnichannel sales strategy",
      full: "Whishibam is a specialist omnichannel company. It offers a white-label solution for businesses to facilitate their transition to an omnichannel sales model and adapt to the changing consumption habits of consumers, who are increasingly turning to giants like Amazon at the expense of local physical stores.",
    },
  },
  {
    id: "antilop",
    name: "Antilop",
    description: {
      display:
        "Antilop was an IT service company specializing in creating and maintaining e-commerce online shops mainly for premium clothing brands",
      full: "Antilop was an IT service company specializing in creating and maintaining e-commerce online shops for its partners, primarily in the premium clothing sector. Businesses relied on the technical and product expertise of the Antilop team, allowing them to focus on their core operations. Unfortunately, the company did not survive the challenges posed by the COVID-19 pandemic.",
    },
  },
  {
    id: "catimini",
    name: "Catimini",
    description: {
      display: "Catimini, a French premium children's prêt-à-porter brand",
      full: "Catimini, a French premium children's prêt-à-porter brand established in 1972 and owned by the Zannier group, offers its catalog online through its e-shop website and boutiques across France, providing an appreciable omnichannel experience for customers.",
    },
    logo: KidilizLogo,
  },
  {
    id: "kidiliz",
    name: "Kidiliz",
    description: {
      display:
        "A French premium children's prêt-à-porter brand, owned by the Zannier Group, also known as the Kidiliz Group",
    },
    logo: KidilizLogo,
  },
  {
    id: "tartine",
    name: "Tartine et Chocolat",
    description: {
      display:
        "Tartine et Chocolat, a French luxury children's brand synonymous with timeless elegance and sophisticated designs.",
      full: "Tartine et Chocolat is a premium French children's clothing and lifestyle brand. It is known for its high-end and elegant designs for infants and children. The brand offers a range of clothing, accessories, and other products with a focus on quality and sophistication",
    },
    logo: TartineLogo,
  },
  {
    id: "yse",
    name: "Ysé Paris",
    description: {
      display:
        "Ysé is a renowned French lingerie brand based in Paris created in 2012, catering to a chic audience",
      full: "Ysé is a lingerie brand created in 2012. It's a brand that describes itself as inspired by women, for women, embracing all their differences. Their mission: to progress and grow constantly, to continue surprising and making their customers even more beautiful.",
    },
    logo: YseLogo,
  },
  {
    id: "upd",
    name: "Ultra Premium Direct",
    description: {
      display:
        "A renowned French brand of premium food for dogs and cats, regularly listed among the top 120 French Tech companies.",
      full: "Ultra Premium Direct is a notorious French brand of premium food for dogs and cats regularely quoted among the top 120 French Tech companies. Their mission is to assist all dog and cat owners in honoring the genuine bond of trust and love that exists between them and their pets by providing quality food that is easily accessible and perfectly suited to their needs",
    },
    logo: UpdLogo,
  },
  {
    id: "deuslynn",
    name: "Deuslynn Entreprise",
    description: {
      display:
        "A startup specializing in building enjoyable user-centric products based on user feedback",
      full: "DEUSLYNN was a startup specializing in designing, building, and publishing user-centric applications. Their mission was to offer people with values innovative and enjoyable alternatives that catered to their needs and feedback, providing an incredible user experience.",
    },
    shortName: "Deuslynn",
    logo: DeuslynnLogo,
  },
  {
    id: "alstom",
    name: "Alstom Transport",
    description: {
      display:
        "A leading French company specializing in designing and building trains, renowned for its iconic French TGV",
      full: "As the principal subsidiary of Alstom, one of the largest companies globally, Alstom Transport is a leading French company renowned for its expertise in building trains, including the iconic TGV—recognized worldwide as one of the most reliable and efficient high-speed trains. With a rich history and a reputation for competence in high-speed train manufacturing, Alstom has solidified its position as an industry leader.",
    },
    logo: AlstomLogo,
  },
  // CERTIFICATIONS
  {
    id: "ets_global",
    name: "ETS Global",
    logo: ETSLogo,
  },
  {
    id: "scrum_org",
    name: "Scrum.Org",
    logo: ScrumLogo,
  },
  {
    id: "mwm",
    name: "Measure What Matters | OKR Resources",
    logo: MWMLogo,
  },
  {
    id: "wharton_online",
    name: "Wharton Online",
    logo: WhartonLogo,
  },
  {
    id: "google",
    name: "Google",
    logo: GoogleLogo,
  },
  {
    id: "hubvisory",
    name: "Hubvisory",
    logo: HubvisoryLogo,
  },
];

export default CompaniesStatic;
