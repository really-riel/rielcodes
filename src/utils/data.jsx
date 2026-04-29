import GoldenLogin from "../assets/Goldenursh-login.png";
import GoldenHome from "../assets/Goldenursh-Home.png";
import GoldenAdminChatbox from "../assets/Goldenursh-adminChatbox.png";
import GoldenAdmin from "../assets/Goldenursh-admin.png";
import GoldenAdminMessage from "../assets/Goldenursh-admin-message.png";

import SpaceCrew from "../assets/SpaceTourism-Crew.png";
import SpaceDestination from "../assets/SpaceTourism-Destination.png";
import SpaceHome from "../assets/SpaceTourism-home.png";
import SpaceTech from "../assets/SpaceTourismTech.png";

import foodieland1 from "../assets/foodieland1.png";
import foodieland2 from "../assets/foodieland2.png";
import foodieland3 from "../assets/foodieland3.png";
import foodieland4 from "../assets/foodieland4.png";

import dwh1 from "../assets/Data Model.png";
import dwh2 from "../assets/DWH Data Flow Diagram.png";
import dwh3 from "../assets/DWH project architecture.png";

import dwh4 from "../assets/Integration Model Diagram.png";

export const projectsData = [
  {
    type: "web",
    images: [
      GoldenHome,
      GoldenLogin,
      GoldenAdmin,
      GoldenAdminMessage,
      GoldenAdminChatbox,
    ],
    title: "Goldenursh",
    technologies: ["React.js", "Firebase", "SCSS", "easypeasy"],
    description:
      "This is a fully responsive online food delivery service, catering to customers' needs with features including account creation, an intuitive admin interface, and a dedicated chatroom facilitating seamless communication between users and administrators.",
    liveDemo: "https://goldenursh.vercel.app",
    codeLink: "https://github.com/really-riel/goldenursh",
  },

  {
    type: "web",
    images: [SpaceHome, SpaceDestination, SpaceCrew, SpaceTech],
    title: "Space Tourism",
    technologies: ["React.js", "SCSS"],
    description: "This is a front end mentor challenge",
    liveDemo: "https://rielspacetourism.vercel.app",
    codeLink: "https://github.com/really-riel/space-tourism-website",
  },
  {
    type: "web",
    images: [foodieland1, foodieland2, foodieland3, foodieland4],
    title: "Foodieland",
    technologies: ["Next js", "Typescript", "Tailwind"],
    description:
      "A dynamic online food store featuring a diverse selection of healthy foods and recipes. The site is fully mobile-responsive, ensuring a seamless shopping experience on any device.",
    liveDemo: "https://foodieland-tobamstest.vercel.app",
    codeLink: "https://github.com/really-riel/foodieland",
  },

  {
    type: "data",
    images: [dwh1, dwh2, dwh3, dwh4],
    title: "SQL Data WareHouse",
    technologies: ["SQL"],
    description:
      "Designed and implemented a SQL-based data warehouse using a Medallion Architecture (Bronze, Silver, Gold) to ingest, clean, and transform raw ERP and CRM data into a structured star schema for analytics. Built ETL pipelines and executed SQL queries to generate insights on customer behavior, product performance, and sales trends, enabling more informed business decisions.",
    liveDemo: null,
    codeLink: "https://github.com/really-riel/SQL-Data-Warehouse-Project",
  },
];

/* {
    images: [],
    title: "Goldenursh-Version 2",
    technologies: ["React.js, tailwind, redux"],
    description: "online food delivery platform",
    liveDemo: "https://goldernursh-V2.vercel.app",
    codeLink: "https://github.com/really-riel/Goldernursh-V2",
  }, */
