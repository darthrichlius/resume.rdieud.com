import {
  HomeIntroductionSection,
  HomePresentationSection,
  HomeReferencesSection,
  HomeWorkExperienceSection,
} from "@@/Home";

import "./home.css";

export default function Home() {
  return (
    <>
      <HomeIntroductionSection />
      <HomePresentationSection />
      <HomeReferencesSection />
      <HomeWorkExperienceSection />
    </>
  );
}
