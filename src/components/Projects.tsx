import React from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import energieDienste from "@/imgs/energieDienste.png";
import wsp from "@/imgs/wspNrw.png";
import world from "@/imgs/world.jpg";
import shop from "@/imgs/shop.png";
import desk from "@/imgs/desksharing.png";
import zeiterfassung from "@/imgs/zeiterfassung.png";
import companyWebsite from "@/imgs/companyWebsite.png";

const projectData: ProjectProps[] = [
  {
    title: "Energie-Dienste Website",
    description:
      "This website is a German-language energy consulting platform built using WordPress and extended with WooCommerce functionalities. It showcases energy-related services with a clean, responsive design and integrates dynamic content such as embedded videos and product listings.",
    image: energieDienste,
    demoLink: "https://energie-dienste.com/",
    githubLink: "not allowed",
    technologies: ["WordPress", "WooCommerce", "PHP", "jQuery"],
  },
  {
    title: "NRW Service Portal (wirtschaft.nrw)",
    description:
      "I contributed to the development of the official NRW Service Portal as part of a cross-functional team. My main responsibility was building and configuring digital forms for various e-government services using standardized form technologies and accessibility best practices. The goal was to simplify user interaction with government services for businesses and individuals.",
    image: wsp,
    demoLink: "https://service.wirtschaft.nrw/",
    githubLink: "not allowed",
    technologies: [
      "Symfony (PHP Backend)",
      "JavaScript (dynamische Formularlogik)",
      "Next.js",
      "Material-UI",
    ],
  },

  {
    title: "Shoporia E-Commerce ",
    description:
      "A full-featured MERN stack e-commerce platform with user authentication, product management, cart functionality, and secure checkout.",
    image: shop,
    demoLink: "https://shoporia-indol.vercel.app/",
    githubLink: "https://github.com/aboalfadel1/Shoporia",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "TailwindCSS",
      "Stripe",
    ],
  },

  {
    title: "Zeiterfassung App",
    description:
      "A full-stack time tracking application designed for employee working hours management. The system includes a web-based admin dashboard for managing employees, projects, and timesheets, along with a cross-platform mobile app that allows users to clock in/out, track working hours, and submit time entries in real time. Built with a scalable NestJS backend, a modern Next.js admin dashboard, and an Expo React Native mobile application.",
    image: zeiterfassung,
    demoLink: "https://zeiterfassung.baumaach.de",
    githubLink: "not allowed",
    technologies: [
      "NestJS",
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT Authentication",
    ],
  },
  {
    title: "Company Website",
    description:
      "A custom-built corporate website developed with WordPress using a fully customized theme. The project includes tailored frontend components, dynamic content management, and backend integration with a SQL database. The website was designed to provide a responsive, maintainable, and user-friendly experience while matching the company's branding and business requirements.",
    image: companyWebsite,
    demoLink: "https://www.baumaach.de",
    githubLink: "not allowed",
    technologies: [
      "WordPress",
      "Custom Theme",
      "PHP",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-[#607CCD] mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each demonstrates different
            skills and technologies I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
