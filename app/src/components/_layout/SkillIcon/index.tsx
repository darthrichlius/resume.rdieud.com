import React, { ReactElement } from "react";
import NextImage from "next/image";

// HAS NO THEME
import css from "@@/assets/images/icons/skills/CSS.svg";
import docker from "@@/assets/images/icons/skills/Docker.svg";
import git from "@@/assets/images/icons/skills/Git.svg";
import gulp from "@@/assets/images/icons/skills/Gulp.svg";
import html from "@@/assets/images/icons/skills/HTML.svg";
import javascript from "@@/assets/images/icons/skills/JavaScript.svg";
import jest from "@@/assets/images/icons/skills/Jest.svg";
import kubernetes from "@@/assets/images/icons/skills/Kubernetes.svg";
import nginx from "@@/assets/images/icons/skills/Nginx.svg";
import photoshop from "@@/assets/images/icons/skills/Photoshop.svg";
import postman from "@@/assets/images/icons/skills/Postman.svg";
import premiere from "@@/assets/images/icons/skills/Premiere.svg";
import prisma from "@@/assets/images/icons/skills/Prisma.svg";
import prometheus from "@@/assets/images/icons/skills/Prometheus.svg";
import redux from "@@/assets/images/icons/skills/Redux.svg";
import sqlite from "@@/assets/images/icons/skills/SQLite.svg";
import sass from "@@/assets/images/icons/skills/Sass.svg";
import selenium from "@@/assets/images/icons/skills/Selenium.svg";
import sentry from "@@/assets/images/icons/skills/Sentry.svg";
import styledcomponents from "@@/assets/images/icons/skills/StyledComponents.svg";
import typescript from "@@/assets/images/icons/skills/TypeScript.svg";
import webflow from "@@/assets/images/icons/skills/Webflow.svg";
import wordpress from "@@/assets/images/icons/skills/Wordpress.svg";
import xd from "@@/assets/images/icons/skills/XD.svg";

import expressjs from "@@/assets/images/icons/skills/ExpressJS-Dark.svg";
import expressjs_ from "@@/assets/images/icons/skills/ExpressJS-Light.svg";
import elasticsearch from "@@/assets/images/icons/skills/Elasticsearch-Dark.svg";
import elasticsearch_ from "@@/assets/images/icons/skills/Elasticsearch-Light.svg";
import figma from "@@/assets/images/icons/skills/Figma-Light.svg";
import figma_ from "@@/assets/images/icons/skills/Figma-Light.svg";
import gitlab from "@@/assets/images/icons/skills/GitLab-Dark.svg";
import gitlab_ from "@@/assets/images/icons/skills/GitLab-Dark.svg";
import github from "@@/assets/images/icons/skills/Github-Dark.svg";
import github_ from "@@/assets/images/icons/skills/Github-Light.svg";
import grafana from "@@/assets/images/icons/skills/Grafana-Dark.svg";
import grafana_ from "@@/assets/images/icons/skills/Grafana-Light.svg";
import jenkins from "@@/assets/images/icons/skills/Jenkins-Dark.svg";
import jenkins_ from "@@/assets/images/icons/skills/Jenkins-Light.svg";
import linux from "@@/assets/images/icons/skills/Linux-Dark.svg";
import linux_ from "@@/assets/images/icons/skills/Linux-Light.svg";
import markdown from "@@/assets/images/icons/skills/Markdown-Dark.svg";
import markdown_ from "@@/assets/images/icons/skills/Markdown-Light.svg";
import materialui from "@@/assets/images/icons/skills/MaterialUI-Dark.svg";
import materialui_ from "@@/assets/images/icons/skills/MaterialUI-Dark.svg";
import mysql from "@@/assets/images/icons/skills/MySQL-Dark.svg";
import mysql_ from "@@/assets/images/icons/skills/MySQL-Light.svg";
import nodejs from "@@/assets/images/icons/skills/NodeJS-Dark.svg";
import nodejs_ from "@@/assets/images/icons/skills/NodeJS-Light.svg";
import php from "@@/assets/images/icons/skills/PHP-Dark.svg";
import php_ from "@@/assets/images/icons/skills/PHP-Light.svg";
import planetscale from "@@/assets/images/icons/skills/PlanetScale-Dark.svg";
import planetscale_ from "@@/assets/images/icons/skills/PlanetScale-Light.svg";
import postgresql from "@@/assets/images/icons/skills/PostgreSQL-Dark.svg";
import postgresql_ from "@@/assets/images/icons/skills/PostgreSQL-Light.svg";
import python from "@@/assets/images/icons/skills/Python-Dark.svg";
import python_ from "@@/assets/images/icons/skills/Python-Light.svg";
import rabbitmq from "@@/assets/images/icons/skills/RabbitMQ-Dark.svg";
import rabbitmq_ from "@@/assets/images/icons/skills/RabbitMQ-Light.svg";
import raspberrypi from "@@/assets/images/icons/skills/RaspberryPi-Dark.svg";
import raspberrypi_ from "@@/assets/images/icons/skills/RaspberryPi-Dark.svg";
import react from "@@/assets/images/icons/skills/React-Dark.svg";
import react_ from "@@/assets/images/icons/skills/React-Light.svg";
import redis from "@@/assets/images/icons/skills/Redis-Dark.svg";
import redis_ from "@@/assets/images/icons/skills/Redis-Light.svg";
import sequelize from "@@/assets/images/icons/skills/Sequelize-Dark.svg";
import sequelize_ from "@@/assets/images/icons/skills/Sequelize-Light.svg";
import symfony from "@@/assets/images/icons/skills/Symfony-Dark.svg";
import symfony_ from "@@/assets/images/icons/skills/Symfony-Light.svg";
import tailwind from "@@/assets/images/icons/skills/TailwindCSS-Dark.svg";
import tailwind_ from "@@/assets/images/icons/skills/TailwindCSS-Light.svg";
import threejs from "@@/assets/images/icons/skills/ThreeJS-Dark.svg";
import threejs_ from "@@/assets/images/icons/skills/ThreeJS-Dark.svg";
import vercel from "@@/assets/images/icons/skills/Vercel-Dark.svg";
import vercel_ from "@@/assets/images/icons/skills/Vercel-Light.svg";
import vim from "@@/assets/images/icons/skills/VIM-Dark.svg";
import vim_ from "@@/assets/images/icons/skills/VIM-Light.svg";
import vite from "@@/assets/images/icons/skills/Vite-Dark.svg";
import vite_ from "@@/assets/images/icons/skills/Vite-Light.svg";
import vitest from "@@/assets/images/icons/skills/Vitest-Dark.svg";
import vitest_ from "@@/assets/images/icons/skills/Vitest-Light.svg";
import vscode from "@@/assets/images/icons/skills/VSCode-Dark.svg";
import vscode_ from "@@/assets/images/icons/skills/VSCode-Light.svg";
import webpack from "@@/assets/images/icons/skills/Webpack-Dark.svg";
import webpack_ from "@@/assets/images/icons/skills/Webpack-Light.svg";

export type TSkillIconIndex =
  | "css"
  | "docker"
  | "elasticsearch"
  | "expressjs"
  | "figma"
  | "git"
  | "gitlab"
  | "github"
  | "grafana"
  | "gulp"
  | "html"
  | "javascript"
  | "jenkins"
  | "jest"
  | "kubernetes"
  | "linux"
  | "markdown"
  | "materialui"
  | "mysql"
  | "nginx"
  | "nodejs"
  | "php"
  | "photoshop"
  | "planetscale"
  | "postgresql"
  | "postman"
  | "premiere"
  | "prisma"
  | "prometheus"
  | "python"
  | "rabbitmq"
  | "raspberrypi"
  | "react"
  | "redis"
  | "redux"
  | "sass"
  | "selenium"
  | "sentry"
  | "sqlite"
  | "sequelize"
  | "styledcomponents"
  | "symfony"
  | "tailwind"
  | "threejs"
  | "typescript"
  | "vercel"
  | "vim"
  | "vite"
  | "vitest"
  | "vscode"
  | "webflow"
  | "webpack"
  | "wordpress"
  | "xd";

// Following the current logic this data is useless
// However, it represents asked to work this out, so as long as the product is not mature we keep it there
/*
const hasNoTheme = [
  "css",
  "docker",
  "git",
  "gulp",
  "html",
  "jest",
  "kubernetes",
  "nginx",
  "photoshop",
  "postman",
  "premiere",
  "prisma",
  "prometheus",
  "redux",
  "sqlite",
  "sass",
  "selenium",
  "sentry",
  "sequelize",
  "styledcomponents",
  "typescript",
  "webflow",
  "wordpress",
  "xd",
];
//*/

const IconsMap: {
  index: TSkillIconIndex;
  element: any;
  title?: string;
  theme?: "dark" | "light";
}[] = [
  { index: "css", title: "CSS", element: css },
  { index: "docker", title: "Docker", element: docker },
  {
    index: "elasticsearch",
    title: "Elasticsearch",
    element: elasticsearch,
    theme: "dark",
  },
  {
    index: "elasticsearch",
    title: "Elasticsearch",
    element: elasticsearch_,
    theme: "light",
  },
  {
    index: "expressjs",
    title: "Express JS",
    element: expressjs,
    theme: "dark",
  },
  {
    index: "expressjs",
    title: "Express JS",
    element: expressjs_,
    theme: "light",
  },
  { index: "figma", title: "Figma", element: figma, theme: "dark" },
  { index: "figma", title: "Figma", element: figma_, theme: "light" },
  { index: "git", title: "Git", element: git },
  { index: "gitlab", title: "Gitlab", element: gitlab, theme: "dark" },
  { index: "gitlab", title: "Gitlab", element: gitlab_, theme: "light" },
  { index: "github", title: "Github", element: github, theme: "dark" },
  { index: "github", title: "Github", element: github_, theme: "light" },
  { index: "grafana", title: "Grafana", element: grafana, theme: "dark" },
  { index: "grafana", title: "Grafana", element: grafana_, theme: "light" },
  { index: "gulp", title: "Gulp", element: gulp },
  { index: "html", title: "HTML", element: html },
  { index: "javascript", title: "Javascript", element: javascript },
  { index: "jenkins", title: "Jenkins", element: jenkins, theme: "dark" },
  { index: "jenkins", title: "Jenkins", element: jenkins_, theme: "light" },
  { index: "jest", title: "Jest", element: jest },
  { index: "kubernetes", title: "Kubernetes", element: kubernetes },
  { index: "linux", title: "Linux", element: linux, theme: "dark" },
  { index: "linux", title: "Linux", element: linux_, theme: "light" },
  { index: "markdown", title: "MarkDown", element: markdown, theme: "dark" },
  { index: "markdown", title: "MarkDown", element: markdown_, theme: "light" },
  {
    index: "materialui",
    title: "Material UI",
    element: materialui,
    theme: "dark",
  },
  {
    index: "materialui",
    title: "Material UI",
    element: materialui_,
    theme: "light",
  },
  { index: "mysql", title: "MySQL", element: mysql, theme: "dark" },
  { index: "mysql", title: "MySQL", element: mysql_, theme: "light" },
  { index: "nginx", title: "NGinx", element: nginx },
  { index: "nodejs", title: "NodeJS", element: nodejs, theme: "dark" },
  { index: "nodejs", title: "NodeJS", element: nodejs_, theme: "light" },
  { index: "php", title: "PHP", element: php, theme: "dark" },
  { index: "php", title: "PHP", element: php_, theme: "light" },
  { index: "photoshop", title: "Photoshop", element: photoshop },
  {
    index: "planetscale",
    title: "PlanetScale",
    element: planetscale,
    theme: "dark",
  },
  {
    index: "planetscale",
    title: "PlanetScale",
    element: planetscale_,
    theme: "light",
  },
  {
    index: "postgresql",
    title: "PostgreSQL",
    element: postgresql,
    theme: "dark",
  },
  {
    index: "postgresql",
    title: "PostgreSQL",
    element: postgresql_,
    theme: "light",
  },
  { index: "postman", title: "Postman", element: postman },
  { index: "premiere", title: "Adobe Premiere", element: premiere },
  { index: "prisma", title: "Prisma", element: prisma },
  { index: "prometheus", title: "Prometheus", element: prometheus },
  { index: "python", title: "Python", element: python, theme: "dark" },
  { index: "python", title: "Python", element: python_, theme: "light" },
  { index: "rabbitmq", title: "RabbitMQ", element: rabbitmq, theme: "dark" },
  { index: "rabbitmq", title: "RabbitMQ", element: rabbitmq_, theme: "light" },
  {
    index: "raspberrypi",
    title: "RasperryPi",
    element: raspberrypi,
    theme: "dark",
  },
  {
    index: "raspberrypi",
    title: "RasperryPi",
    element: raspberrypi_,
    theme: "light",
  },
  { index: "react", title: "React", element: react, theme: "dark" },
  { index: "react", title: "React", element: react_, theme: "light" },
  { index: "redis", title: "Redis", element: redis, theme: "dark" },
  { index: "redis", title: "Redis", element: redis_, theme: "light" },
  { index: "redux", title: "Redux", element: redux },
  { index: "sass", title: "Saas", element: sass },
  { index: "selenium", title: "Selenium", element: selenium },
  { index: "sentry", title: "Sentry", element: sentry },
  { index: "sequelize", title: "Sequelize", element: sequelize, theme: "dark" },
  {
    index: "sequelize",
    title: "Sequelize",
    element: sequelize_,
    theme: "light",
  },
  { index: "sqlite", title: "SQLite", element: sqlite },
  {
    index: "styledcomponents",
    title: "StyledComponents",
    element: styledcomponents,
  },
  { index: "symfony", title: "Symfony", element: symfony, theme: "dark" },
  { index: "symfony", title: "Symfony", element: symfony_, theme: "light" },
  { index: "tailwind", title: "Tailwind", element: tailwind, theme: "dark" },
  { index: "tailwind", title: "Tailwind", element: tailwind_, theme: "light" },
  { index: "threejs", title: "ThreeJS", element: threejs, theme: "dark" },
  { index: "threejs", title: "ThreeJS", element: threejs_, theme: "light" },
  { index: "typescript", title: "TypeScript", element: typescript },
  { index: "vercel", title: "Vercel", element: vercel, theme: "dark" },
  { index: "vercel", title: "Vercel", element: vercel_, theme: "light" },
  { index: "vim", title: "Vim", element: vim, theme: "dark" },
  { index: "vim", title: "Vim", element: vim_, theme: "light" },
  { index: "vite", title: "Vite", element: vite, theme: "dark" },
  { index: "vite", title: "Vite", element: vite_, theme: "light" },
  { index: "vitest", title: "Vitest", element: vitest, theme: "dark" },
  { index: "vitest", title: "Vitest", element: vitest_, theme: "light" },
  { index: "vscode", title: "VSCode", element: vscode, theme: "dark" },
  { index: "vscode", title: "VSCode", element: vscode_, theme: "light" },
  { index: "webflow", title: "WebFlow", element: webflow },
  { index: "webpack", title: "Webpack", element: webpack, theme: "dark" },
  { index: "webpack", title: "Webpack", element: webpack_, theme: "light" },
  { index: "wordpress", title: "Wordpress", element: wordpress },
  { index: "xd", title: "Adode XD", element: xd },
];

/**
 * Return the corresponding element related to the index and to the theme when the icon is themed
 */
const SkillIcon = ({
  index,
  className,
  alt,
  title,
  theme,
  ...rest
}: {
  index: TSkillIconIndex;
  className?: string;
  alt?: string;
  title?: string;
  theme?: "light" | "dark";
  rest?: any;
}) => {
  let found = IconsMap.find((element) => element.index === index);
  const isThemed = !!found?.theme;

  if (!found) return;

  if (theme && isThemed) {
    found = IconsMap.find(
      (element) => element.index === index && element.theme === theme
    );
  }
  if (!found) return;

  return (
    <NextImage
      className={className}
      alt={alt || found.title || index}
      title={title || found.title || index}
      src={found.element}
      {...rest}
    />
  );
};

export default SkillIcon;
