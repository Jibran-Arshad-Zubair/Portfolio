import React from "react";
import "../../../styles/About/Route/Experience.scss";

const Experience = () => {

  const projects = [
    {
      title: "Simvictus",
      tasks: [
        "Contributed to a leading U.S.-based ecommerce platform focused on gaming and simulation gear",
        "Built engaging shopping experiences connecting gamers with top hardware brands and accessories",
        "Developed product listing pages, filtering, and community-feel UI components",
        "Ensured responsive design and performance optimization across all device sizes",
      ],
    },
  
    {
      title: "Creyeti",
      tasks: [
        "Contributed to the website of a Sydney-based creative production and brand storytelling studio",
        "Developed visually rich UI components blending creativity with strategic content presentation",
        "Elevated brand presence through polished layouts and responsive media experiences",
        "Ensured cross-platform consistency and smooth performance across all sections",
      ],
    },
    {
      title: "ScoutsCapital",
      tasks: [
        "Contributed to a global football talent discovery platform connecting players, scouts, agents, and clubs",
        "Built profile, showcase, and networking features inspired by professional social platforms",
        "Developed feeds, engagement, and trial access flows to help players increase visibility",
        "Implemented responsive UI to support seamless experience across web and mobile screens",
      ],
    },

      {
      title: "Simvictus Admin Panel",
      tasks: [
        "Built a secured management dashboard for the Simvictus ecommerce platform",
        "Enabled administrators to oversee products, orders, users, and performance analytics",
        "Centralized store control for efficient product updates and operational management",
        "Implemented role-based access control and secure authentication for admin users",
      ],
    },
    {
      title: "AireHealth",
      tasks: [
        "Contributed to the official website of a U.S.-based digital health company specializing in respiratory care",
        "Showcased connected care solutions bridging traditional healthcare with modern digital tools",
        "Highlighted real-time patient insights and provider data support through clear, engaging UI",
        "Focused on accessibility, performance, and patient-centered design across all pages",
      ],
    },
    {
      title: "Dubai Wheels",
      tasks: [
        "Developed a MERN Stack platform for discovering, comparing, and exploring car listings in the UAE",
        "Implemented complete authentication and authorization system for buyers and dealers",
        "Created dashboards for Admins and Dealers to manage listings, prices, and users",
        "Added advanced search and filtering options to streamline the car buying experience",
      ],
    },
    {
      title: "LiftSol",
      tasks: [
        "Developed LiftSol, a web platform for exploring and enrolling in gyms across Pakistan",
        "Implemented features to access gym services and manage memberships seamlessly",
        "Designed and built dedicated dashboards for Gym Owners and Admins",
        "Streamlined operations and user management through optimized workflows",
      ],
    },
    {
      title: "AI-Agent-Calling",
      tasks: [
        "Built an AI calling system where each business has its own dedicated agent",
        "Enabled agents to handle inbound/outbound calls and take orders automatically",
        "Integrated ElevenLabs API for natural, human-like voice interactions",
        "Developed tools to manage campaigns, leads, and agent configurations efficiently",
      ],
    },
    {
      title: "E-Learning Platform",
      tasks: [
        "Developing a full-featured E-learning platform as a personal project",
        "Students can purchase and access teacher-created courses with ease",
        "Designed teacher, student, and admin dashboards for smooth platform management",
        "Integrated an AI chatbot to assist students throughout their learning journey",
      ],
    },
    {
      title: "AI Chatbot Development",
      tasks: [
        "Created an AI-powered chatbot using OpenAI models integrated with LangChain",
        "Enabled intelligent, context-driven conversations with accurate query resolution",
        "Designed smooth conversation flows with fallback handling for edge cases",
        "Demonstrated practical application of modern AI tools to solve real-world problems",
      ],
    },
    {
      title: "Library Management System",
      tasks: [
        "Developed a Library Management System using the MERN stack to streamline library operations",
        "Built features for book cataloging, borrowing, returns, and fine management",
        "Designed separate interfaces for librarians and patrons with role-based access",
        "Improved operational efficiency through an intuitive and user-friendly interface",
      ],
    },
  ];

  return (
    <div className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <h2 className="experience__number">
            0<span>2</span>
          </h2>
          <h1 data-aos="fade-down" data-aos-offset="0">
            E<span>xperience</span>.
          </h1>
        </div>

        <div className="experience__description">
          <div className="experience__main-box">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="experience__box"
              >
                <h2>{project.title}</h2>
                <ul>
                  <p>Responsible for -</p>
                  {project.tasks.map((task, idx) => (
                    <li key={idx} data-aos="fade-right" data-aos-delay={(idx + 1) * 200}>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;