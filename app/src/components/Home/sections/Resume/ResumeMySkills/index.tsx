import React from "react";
import { SkillIcon } from "@@src/components";
import { TSkillIconIndex } from "@@src/components/_layout/SkillIcon";

const ResumeMySkills = () => {
  return (
    <article id="resume-skills">
      <header>
        <h3 className="section-title-h3">Skills & Tools</h3>
      </header>
      <div className="resume-skills-groups">
        <div className="resume-skills-group">
          <h4>Frontend</h4>
          <div className="resume-skills-line">
            {[
              "react",
              "vite",
              "redux",
              "typescript",
              "tailwind",
              "materialui",
              "javascript",
              "html",
              "css",
              "sass",
            ].map((item, i) => (
              <SkillIcon
                key={`frontend-skillicon-${i}`}
                index={item as TSkillIconIndex}
                className="resume-skills-line-item"
              />
            ))}
          </div>
        </div>
        <div className="resume-skills-group">
          <h4>Backend</h4>
          <div className="resume-skills-line">
            {[
              "symfony",
              "php",
              "wordpress",
              "nodejs",
              "express",
              "postgresql",
              "mysql",
              "sqlite",
            ].map((item, i) => (
              <SkillIcon
                key={`backend-skillicon-${i}`}
                index={item as TSkillIconIndex}
                className="resume-skills-line-item"
              />
            ))}
          </div>
        </div>
        <div className="resume-skills-group">
          <h4>And More</h4>
          <div className="resume-skills-line">
            {[
              "figma",
              "xd",
              "vercel",
              "sentry",
              "linux",
              "git",
              "docker",
              "grafana",
              "nginx",
              "rabbitmq",
              "redis",
              "vim",
              "gulp",
              "vscode",
            ].map((item, i) => (
              <SkillIcon
                key={`other-skillicon-${i}`}
                index={item as TSkillIconIndex}
                className="resume-skills-line-item"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResumeMySkills;
