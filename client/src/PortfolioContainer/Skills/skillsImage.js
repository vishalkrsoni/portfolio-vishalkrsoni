import angular from "../../assets/skills/angular.svg";
import aws from "../../assets/skills/aws.svg";
import azure from "../../assets/skills/azure.svg";
import bootstrap from "../../assets/skills/bootstrap.svg";
import c from "../../assets/skills/c.svg";
import cicd from "../../assets/skills/cicd.svg";
import css from "../../assets/skills/css.svg";
import docker from "../../assets/skills/docker.svg";
import dsa from "../../assets/skills/dsa.svg";
import fastapi from "../../assets/skills/fastapi.svg";
import firebase from "../../assets/skills/firebase.svg";
import gcp from "../../assets/skills/gcp.svg";
import git from "../../assets/skills/git.svg";
import graphql from "../../assets/skills/graphql.svg";
import html from "../../assets/skills/html.svg";
import java from "../../assets/skills/java.svg";
import javascript from "../../assets/skills/javascript.svg";
import kafka from "../../assets/skills/kafka.svg";
import materialui from "../../assets/skills/materialui.svg";
import mongoDB from "../../assets/skills/mongoDB.svg";
import mysql from "../../assets/skills/mysql.svg";
import nodeJs from "../../assets/skills/nodeJs.svg";
import postgresql from "../../assets/skills/postgresql.svg";
import python from "../../assets/skills/python.svg";
import react from "../../assets/skills/react.svg";
// import reactTsx from "../../assets/skills/reactTsx.svg";
import redis from "../../assets/skills/redis.svg";
import springBoot from "../../assets/skills/springBoot.svg";
import storybook from "../../assets/skills/storybook.svg";
import swagger from "../../assets/skills/swagger.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import typescript from "../../assets/skills/typescript.svg";
import vitejs from "../../assets/skills/vitejs.svg";
import vue from "../../assets/skills/vue.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "angular":
      return angular;
    case "aws":
      return aws;
    case "azure":
      return azure;
    case "bootstrap":
      return bootstrap;
    case "c":
      return c;
    case "ci-cd":
      return cicd;
    case "css":
      return css;
    case "docker":
      return docker;
    case "dsa":
      return dsa;
    case "fastapi":
      return fastapi;
    case "firebase":
      return firebase;
    case "gcp":
      return gcp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "html":
      return html;
    case "java":
      return java;
    case "javascript":
      return javascript;
    case "kafka":
      return kafka;
    case "materialui":
      return materialui;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "node js":
      return nodeJs;
    case "postgresql":
      return postgresql;
    case "python":
      return python;
    case "react js":
      return react;
    // case "react tsx":
    //   return reactTsx;
    case "redis":
      return redis;
    case "springboot":
      return springBoot;
    case "storybook":
      return storybook;
    case "swagger":
      return swagger;
    case "tailwind":
      return tailwind;
    case "typescript":
      return typescript;
    case "vite js":
      return vitejs;
    case "vitejs":
      return vitejs;
    case "vue":
      return vue;

    default:
      break;
  }
};
