import GoldenLogin from "../assets/Goldenursh-login.png";
import GoldenHome from "../assets/Goldenursh-Home.png";
import GoldenAdminChatbox from "../assets/Goldenursh-adminChatbox.png";
import GoldenAdmin from "../assets/Goldenursh-admin.png";
import GoldenAdminMessage from "../assets/Goldenursh-admin-message.png";
import SpaceCrew from "../assets/SpaceTourism-Crew.png";
import SpaceDestination from "../assets/SpaceTourism-Destination.png";
import SpaceHome from "../assets/SpaceTourism-home.png";
import SpaceTech from "../assets/SpaceTourismTech.png";

export const projectsData = [
  {
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
    images: [SpaceHome, SpaceDestination, SpaceCrew, SpaceTech],
    title: "Space Tourism",
    technologies: ["React.js", "SCSS"],
    description: "This is a front end mentor challenge",
    liveDemo: "https://rielspacetourism.vercel.app",
    codeLink: "https://github.com/really-riel/space-tourism-website",
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
