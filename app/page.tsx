import {
  HomeIntroductionSection,
  HomePresentationSection,
  HomeReferencesSection,
} from "@@/Home";

import "./home.css";

export default function Home() {
  return (
    <>
      <HomeIntroductionSection />
      <HomePresentationSection />
      <HomeReferencesSection />
    </>
  );
}
