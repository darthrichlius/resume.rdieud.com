import type { Metadata } from "next";
import {
  HomeIntroductionSection,
  HomePresentationSection,
  HomeReferencesSection,
  HomeResumeSection,
  HomePortfolioSection,
} from "@@/Home";

export const metadata: Metadata = {
  title:
    "Richard Dieud - Senior Software Engineer & Product Manager — Richard Dieud",
  description:
    "Fullstack Web Engineer & Product Manager passionate about creating application systems and valuable products people love",
};

export default function Home() {
  return (
    <>
      <HomeIntroductionSection />
      <HomePresentationSection />
      <HomeReferencesSection />
      <HomeResumeSection />
      <HomePortfolioSection />
    </>
  );
}
