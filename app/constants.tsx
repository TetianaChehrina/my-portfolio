import { ProjectType } from "../types/projects";
import { Technology } from "../types/technologies";

export const projects: ProjectType[] = [
  {
    id: 1,
    image: "/assets/projects/languageTutor.png",
    name: "Language Tutor",
    webSite: "https://language-tutor-five.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/language-tutor",
    technologies: {
      frontend: {
        core: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux Toolkit",
          "Redux Persist",
        ],
        libraries: [
          "React Hook Form",
          "Flatpickr",
          "React Hot Toast",
          "React Icons",
        ],
        tools: ["Vite", "Responsive Design"],
      },
      backend: {
        core: ["Node.js", "Express", "MongoDB", "Mongoose"],
        security: ["bcrypt", "jsonwebtoken", "cookie-parser"],
        cloud: ["Cloudinary", "Multer"],
        utilities: ["cors", "dotenv", "cross-env", "http-errors", "nodemon"],
      },
    },
  },
  {
    id: 2,
    image: "/assets/projects/phoneBook.png",
    name: "Phone book App",
    webSite: "https://phone-book-app-frontend.vercel.app/",
    description:
      "A Fullstack application with user authentication, contact management, and a responsive UI.",
    projectRepository: {
      frontend: "https://github.com/TetianaChehrina/phone-book-app-frontend",
      backend: "https://github.com/TetianaChehrina/phone-book-app-backend",
    },
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "React Icons",

          "React Helmet",
          "React Hot Toast",
          "React Loader Spinner",
          "Redux Toolkit",
          "Redux Persist",
          "React Router Dom",
          "React Toastify",
          "Formik",
          "Yup",
        ],
        tools: ["Vite"],
      },
      backend: {
        core: ["Node.js", "Express", "MongoDB"],
        libraries: [
          "bcryptjs",
          "cloudinary",
          "cors",
          "dotenv",
          "express",
          "handlebars",
          "http-errors",
          "joi",
          "jsonwebtoken",
          "mongoose",
          "multer",
          "nodemailer",
        ],
        tools: ["Nodemon"],
      },
    },
  },
  {
    id: 3,
    image: "/assets/projects/blogMotoWay.png",
    name: "Blog moto way",
    webSite: "https://blog-moto-way.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/blog-moto-way",
    description:
      "A Fullstack blog platform with user authentication, post management,filter content by categories, and a responsive UI.",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "React Icons",
          "React Helmet",
          "React Hot Toast",
          "React Loader Spinner",
          "Redux Toolkit",
          "Redux Persist",
          "React Router Dom",
          "React Toastify",
          "Formik",
          "Yup",
          "@mui/icons-material",
          "@mui/material",
          "axios",
          "react-hook-form",
          "react-spinners",
        ],
        tools: ["Vite"],
      },
      backend: {
        core: ["Node.js", "Express", "MongoDB"],
        libraries: [
          "bcryptjs",
          "cloudinary",
          "cors",
          "dotenv",
          "express",
          "handlebars",
          "http-errors",
          "joi",
          "jsonwebtoken",
          "mongoose",
          "multer",
        ],
        tools: ["Nodemon", "ESLint"],
      },
    },
  },
  {
    id: 4,
    image: "/assets/projects/weatherApp.png",
    name: "Weather App",
    webSite: "https://weather-app-gamma-lovat-58.vercel.app/home",
    projectRepository: "https://github.com/TetianaChehrina/weather-app",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "Axios",
          "React Router Dom",
          "Flatpickr",
          "React toastify",
          "React Icons",
          "React-loader-spinner",
        ],
        tools: ["Vite"],
      },
    },
  },
  {
    id: 5,
    image: "/assets/projects/moviefind.png",
    name: "MovieFinder",
    webSite: "https://movies-find-six.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/moviesFind",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "Formik",
          "React Hot Toast",
          "React Icons",
          "React-loader-spinner",
          "clsx",
        ],
        tools: ["Vite"],
      },
    },
  },
  {
    id: 6,
    image: "/assets/projects/travelTruck.png",
    name: "MovieFinder",
    webSite: "https://travel-trucks-weld-six.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/travelTrucks",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "Formik",
          "React Hot Toast",
          "React Icons",
          "React-loader-spinner",
          "clsx",
        ],
        tools: ["Vite"],
      },
    },
  },
  {
    id: 7,
    image: "/assets/projects/webStudio.png",
    name: "MovieFinder",
    webSite: "https://travel-trucks-weld-six.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/travelTrucks",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "Formik",
          "React Hot Toast",
          "React Icons",
          "React-loader-spinner",
          "clsx",
        ],
        tools: ["Vite"],
      },
    },
  },
];

export const technologies: Technology[] = [
  { name: "HTML5", icon: "/assets/technologies/HTML5.png" },
  { name: "CSS3", icon: "/assets/technologies/CSS3.png" },
  { name: "JavaScript", icon: "/assets/technologies/JS.png" },
  { name: "TypeScript", icon: "/assets/technologies/TS.png" },
  { name: "React", icon: "/assets/technologies/React.png" },
  { name: "Redux", icon: "/assets/technologies/Redux.png" },
  { name: "Next.js", icon: "/assets/technologies/next.jpg" },
  { name: "Node.js", icon: "/assets/technologies/Node.js.png" },
  { name: "Express", icon: "/assets/technologies/expressjs.png" },
  { name: "MongoDB", icon: "/assets/technologies/MongoDB.png" },
  { name: "Postman", icon: "/assets/technologies/Postman.png" },
  { name: "Git", icon: "/assets/technologies/Git.png" },
  { name: "Swagger", icon: "/assets/technologies/Swagger.png" },
  { name: "Figma", icon: "/assets/technologies/Figma.png" },
  { name: "Material UI", icon: "/assets/technologies/Material UI.png" },
  {
    name: "Visual Studio Code (VS Code)",
    icon: "/assets/technologies/Visual Studio Code (VS Code).png",
  },
  { name: "Vite.js", icon: "/assets/technologies/Vite.js.png" },
];
