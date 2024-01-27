"use client";
import React from "react";
import { SkillIcon } from "@@src/components";
import { useSearchParams } from "next/navigation";

const SandBoxComponentTestPage = () => {
  const params = useSearchParams();
  const qParamIndex = params.get("index");
  const qParamTheme = params.get("theme");

  return (
    <div>
      <SkillIcon index={qParamIndex} theme={qParamTheme} />
    </div>
  );
};

export default SandBoxComponentTestPage;
