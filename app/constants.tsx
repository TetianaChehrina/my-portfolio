import { ProjectType } from "../types/projects";
import { Technology } from "../types/technologies";

export const projects: ProjectType[] = [
  {
    id: 1,
    image: "/assets/projects/language-tutor.png",
    name: "Language Tutor",
    webSite: "https://language-tutor-five.vercel.app/",
    description:
      "A Fullstack application that connects students with language teachers online. It provides an intuitive interface for finding, booking, and managing language lessons, with role-based user functionality and a modern UI/UX.",
    projectRepository: "https://github.com/TetianaChehrina/language-tutor",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "Redux Toolkit",
          "Redux Persist",
          "React Router DOM",
          "React Hook Form",
          "Axios",
          "Flatpickr",
          "React Hot Toast",
          "React Icons",
          "React Loader Spinner",
        ],
        tools: ["Vite"],
      },
      backend: {
        core: ["Node.js", "Express", "MongoDB"],
        security: ["bcrypt", "jsonwebtoken", "cookie-parser"],
        cloud: ["Cloudinary", "Multer"],
        utilities: ["cors", "dotenv", "cross-env", "http-errors"],
      },
    },
  },
  {
    id: 2,
    image: "/assets/projects/phone-book.png",
    name: "Phone Book App",
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
          "Redux Toolkit",
          "Redux Persist",
          "React Router DOM",
          "React Icons",
          "React Helmet",
          "React Hot Toast",
          "React Loader Spinner",
          "Axios",
          "Formik",
        ],
        tools: ["Vite"],
      },
      backend: {
        core: ["Node.js", "Express", "MongoDB"],
        libraries: [
          "bcryptjs",
          "Cloudinary",
          "cors",
          "dotenv",
          "Express",
          "Handlebars",
          "http-errors",
          "Joi",
          "jsonwebtoken",
          "Mongoose",
          "Multer",
          "Nodemailer",
        ],
      },
    },
  },
  {
    id: 3,
    image: "/assets/projects/blog-moto-way.png",
    name: "Blog Moto Way",
    webSite: "https://blog-moto-way.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/blog-moto-way",
    description:
      "A Fullstack blog platform with user authentication, post management, filter content by categories, and a responsive UI.",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "Redux Toolkit",
          "Redux Persist",
          "React Router DOM",
          "React Hook Form",
          "React Hot Toast",
          "React Spinners",
          "Axios",
          "@mui/material",
          "@mui/icons-material",
        ],
        tools: ["Vite"],
      },
      backend: {
        core: ["Node.js", "Express", "MongoDB"],
        libraries: [
          "bcryptjs",
          "Cloudinary",
          "cors",
          "dotenv",
          "Express",
          "Handlebars",
          "http-errors",
          "Joi",
          "jsonwebtoken",
          "Mongoose",
          "Multer",
        ],
      },
    },
  },
  {
    id: 4,
    image: "/assets/projects/weather-app.png",
    name: "Weather App",
    webSite: "https://weather-app-gamma-lovat-58.vercel.app/home",
    description:
      "The Weather App is a user-friendly weather application. Users can search weather details in any city, view hourly forecasts, and check a 5-day weather prediction. Additionally, users can manage their favorite cities list and explore a beautiful dynamic background powered by Unsplash, which updates based on the selected city.",
    projectRepository: "https://github.com/TetianaChehrina/weather-app",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "React Router DOM",
          "Axios",
          "React Toastify",
          "React Icons",
          "React Loader Spinner",
        ],
        tools: ["Vite"],
      },
    },
  },
  {
    id: 5,
    image: "/assets/projects/movie-find.png",
    name: "MovieFinder",
    webSite: "https://movies-find-six.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/moviesFind",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "React Router DOM",
          "Formik",
          "React Hot Toast",
          "React Icons",
          "React Loader Spinner",
        ],
        tools: ["Vite"],
      },
    },
  },
  {
    id: 6,
    image: "/assets/projects/travel-truck.png",
    name: "TravelTruck",
    webSite: "https://travel-trucks-weld-six.vercel.app/",
    projectRepository: "https://github.com/TetianaChehrina/travelTrucks",
    technologies: {
      frontend: {
        core: ["HTML", "CSS", "JavaScript", "React"],
        libraries: [
          "React Router DOM",
          "Redux Toolkit",
          "Redux Persist",
          "Formik",
          "React Hot Toast",
          "React Icons",
          "React Loader Spinner",
          "React Datepicker",
          "Yup",
        ],
        tools: ["Vite"],
      },
    },
  },
  {
    id: 7,
    image: "/assets/projects/web-studio.png",
    name: "WebStudio",
    webSite: "https://tetianachehrina.github.io/webStudio/",
    projectRepository: "https://github.com/TetianaChehrina/webStudio",
    technologies: {
      frontend: {
        core: ["HTML", "CSS"],
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
