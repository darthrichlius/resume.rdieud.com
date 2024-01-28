"use client";
import React, { Suspense } from "react";
import { SkillIcon } from "@@src/components";
import { useSearchParams } from "next/navigation";
import { TSkillIconIndex } from "@@src/components/_layout/SkillIcon";

const SandBoxComponentTestPage = () => {
  return (
    <div>
      {/* @see https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
      <Suspense>
        <SearchSkillIcon />
      </Suspense>
    </div>
  );
};

const SearchSkillIcon = () => {
  const params = useSearchParams();
  const qParamIndex = params.get("index");
  const qParamTheme = params.get("theme");

  return (
    <SkillIcon
      index={qParamIndex as TSkillIconIndex}
      theme={qParamTheme as "light" | "dark"}
    />
  );
};

export default SandBoxComponentTestPage;
