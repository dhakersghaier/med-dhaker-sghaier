import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import atollImg from "@/public/atoll.png";
import kamilexImg from "@/public/kamilex.png";
import crmImg from "@/public/crm.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Licence in Telecommunications",
    location: "ISITCOM Hammam Sousse, Tunisia",
    description:
      "Graduated after 3 years of studying in Telecomunication and It.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Cloud Intern - End of Study internship",
    location: "ADN Expertise, Sousse",
    description:
      "Completed two projects with AWS, demonstrated my expertise in Cloud architecture design, AWS services and data analysis workflow.",
    icon: React.createElement(CgWorkAlt),
    date: "02/2023 - 06/2023",
  },
  {
    title: "DevOps & Cloud Intern ",
    location: "SW Consulting - Monastir",
    description:
      "Setted up cloud infrastructure with Terraform for a single project, automated system configurations using custom Ansible playbooks, utilized Docker for containerization to simplify application deployment, and created a Jenkins CI/CD pipeline for seamless code deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2023 - 09/2023",
  },
  {
    title: "Computer Science Engineering",
    location: "EPI Sousse, Tunisia",
    description:"",
    icon: React.createElement(LuGraduationCap),
    date: "09/2023-07/2026",
  },
  {
    title: "DevOps & Cloud Engineer ",
    location: "SW Consulting - Monastir",
    description:
      "I am currently working as a DevOps & Cloud Engineer, where I leverage my expertise to build and manage scalable cloud infrastructures, streamline automation processes, and optimize deployment pipelines. I am open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Atoll Palm",
    description:
      "I worked as a DevOps developer on this project for 6 months. Implemention of Microservices Architecture with Spring Boot, Eureka,API Gateway and ConfigServer.",
    tags: ["Netflix SpringBoot Stack", "GitOps", "AWS", "Keycloak"],
    imageUrl: atollImg,
  },
  {
    title: "CRM-ILA26",
    description:
      "A CRM web app integration in SaaS ERP project. Developing a Multi-tenant architechture (same Backend multiple databases)",
    tags: ["AZURE CLI", "Bash", "MySQL", "Github Actions","SaaS"],
    imageUrl: crmImg,
  },
  {
    title: "Kamilex",
    description:
      "OCR for construction companies. I was the DevOps & Cloud engineer during 1 year till now. Developing and Deploying scalable and efficient infrastructure following the best-practices.",
    tags: ["AWS ECS", "Terraform","RDS","S3 & CloudFront"],
    imageUrl: kamilexImg,
  },
] as const;

export const skillsData = [
  "Networking",
  "Linux",
  "bash",
  "JavaScript",
  "Python",
  "Git/GitOps",
  "AWS",
  "AZURE",
  "MySQL",
  "Spring Cloud",
  "Docker (compose /Swarm)",
  "Terraform",
  "Ansible",
  "Jenkins",
  "Github Actions",
  "Prometheus & Grafana"
] as const;
