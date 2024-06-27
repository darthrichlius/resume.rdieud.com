import type { Metadata } from "next";
import {
  HomeIntroductionSection,
  HomePresentationSection,
  HomeReferencesSection,
  HomeResumeSection,
  HomePortfolioSection,
} from "@@src/components/Home";

export const metadata: Metadata = {
  title: "Richard Dieud — Senior Software Engineer & Product Manager",
  description:
    "Fullstack Web Engineer & Product Manager passionate by AI & creating valuable application and systems for delighted users",
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
