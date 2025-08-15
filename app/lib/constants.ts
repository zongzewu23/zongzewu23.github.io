import {
  ClipboardListIcon,
  Code2Icon,
  DownloadIcon,
  GithubIcon,
  HomeIcon,
  Laptop2Icon,
  LayoutPanelTopIcon,
  LinkedinIcon,
  MailIcon,
  PhoneCallIcon,
  WorkflowIcon,
  icons,
} from "lucide-react";
import Image from "next/image";

export const name = "Zongze Wu";
export const email = "astrowu61@gmail.com";
export const phoneno = "+1 425 766 9136";



export const projectsData = [
  {
  title: "Employee Management System - Enterprise Full Stack",
 description: 
 "A production-grade employee management system independently built from scratch without tutorials, showcasing enterprise-level architecture and DevOps practices. Features a React 18/TypeScript frontend with Ant Design components and a Spring Boot 3.x backend with JWT authentication, serving 25+ RESTful APIs with OpenAPI documentation. Deployed using Docker Compose orchestration with PostgreSQL, Redis caching, and Nginx reverse proxy. Implements comprehensive employee/department CRUD operations, role-based access control, and advanced search capabilities. Includes a complete CI/CD pipeline via GitHub Actions with 90%+ test coverage, health monitoring, and production-ready error handling. This 13-day intensive project demonstrates full ownership of the software development lifecycle, from system design to containerized deployment, with all architectural decisions made independently.",
 tags: ["React 18", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Redis", "Nginx"],
 icons: [
   "logos:react",
   "logos:typescript-icon", 
   "logos:spring-icon",
   "logos:postgresql",
   "logos:docker-icon",
   "logos:redis",
   "logos:nginx",
   "logos:java",
 ],
    imageUrl:  
    "/ems.png",

    dockerLink: "https://hub.docker.com/r/zongzewu/ems",
    githubLink: "https://github.com/zongzewu23/employee-management-system",
  },
    {
  title: "Enterprise IQ - AI Agents Supply Chain Analytics",
  description:
    "Enterprise IQ is an AI-powered supply chain analytics platform developed with a remote Indian team. Built with Next.js, TypeScript, and Python backend using CrewAI framework for intelligent agents. Features predictive analytics for customer insights, inventory optimization, and sales forecasting with interactive Plotly visualizations. Includes comprehensive dashboard system with Redux state management and SQLite database integration for enterprise-scale data processing.",
  tags: ["Next.js", "TypeScript", "Python", "CrewAI", "Redux", "MySQL"],
  icons: [
    "logos:python",
    "logos:sqlite",
    "logos:nextjs-icon",
    "logos:typescript-icon"
  ],
  imageUrl: "/AIAgent.jpg",
  githubLink: "https://github.com/rahil911/multiagent-googleADK"
},
  {
    title: "BetterCallWu - Backend",
    description:
    "BCW is a food delivery platform with a management system and a mobile client built using Java and Spring Boot. It employs MySQL for data storage and Redis for caching email verification codes to ensure efficient authentication. The RESTful backend interacts seamlessly with the frontend and mobile app via AJAX for real-time updates. Maven manages dependencies and build automation, ensuring a robust architecture. The mobile app allows customers to place orders, while the management system handles operations. ",
    tags: ["Java", "Spring Boot", "MySQL", "Maven", "Redis"],
    icons: [
      "logos:java",
      "logos:spring",
      "logos:mysql",
      "logos:maven",
      "logos:redis",
    ],
    imageUrl:   "/BCW.jpeg",
   
    githubLink: "https://github.com/zongzewu23/BetterCallWu-Takeaway",
    demoLink: "",
  },
  {
    title: "GoBangGo! - Full Stack",
    description:
    "GoBangGo! is a web-based Gomoku game with a responsive frontend built using JavaScript, HTML, CSS, and the Canvas API for dynamic rendering. The backend is powered by Node.js and Express, with PostgreSQL managing user data and game statistics. It features advanced AI using the minimax algorithm with caching and board evaluation for optimized performance. The project includes user authentication, avatar uploads, RESTful APIs, and integrates media assets for an interactive experience. Development tools include Visual Studio Code and Git for a modular and maintainable workflow.",
    tags: ["JS", "Node.js", "Express", "HTML", "CSS","PostgreSQL"],
    icons: [
      "logos:javascript",
      "logos:nodejs",
      "logos:express",
      "devicon:html5",
      "devicon:css3",
      "logos:postgresql",
    ],
    imageUrl:  
    "/GoBangGo.jpeg",

    urlLink: "https://gobang-869r.onrender.com/",
    githubLink: "https://github.com/zongzewu23/GoBang",
  },
  {
    title: "Seattle Hotel Explorer - Frontend",
  description:
    "Seattle Hotel Explorer is an interactive hotel discovery platform built with React 18, TypeScript, and Mapbox GL JS. Features intelligent clustering algorithms with K-means optimization, professional filter panels for price/rating/amenities, and smooth water-drop animations powered by Framer Motion. The frontend leverages react-map-gl for WebGL-accelerated map rendering,and Tailwind CSS for responsive design. Includes advanced performance optimizations with debounced clustering, stable component lifecycles, and production-ready TypeScript configurations. Developed using Cursor AI for accelerated development workflow.",
  tags: ["React", "TypeScript", "Mapbox", "Tailwind", "Framer Motion"],
  icons: [
    "logos:react",
    "logos:typescript-icon", 
    "logos:mapbox",
    "logos:tailwindcss-icon",
    "simple-icons:framer",
    "simple-icons:vite",
  ],
    imageUrl:  
    "/she.png",

    githubLink: "https://github.com/zongzewu23/GoBang",
  },

] as const;

export const nav_links = [
  {
    name: "Intro",
    link: "/",
    icon: HomeIcon,
    desc: "A brief overview of who I am.",
  },
  {
    name: "About Me",
    link: "#about",
    icon: ClipboardListIcon,
    desc: "Elaboration on my background and technical skill set.",
  },
  {
    name: "Projects",
    link: "#projects",
    icon: Laptop2Icon,
    desc: "A few notable personal projects of mine",
  },
  {
    name: "Contact",
    link: "#contact",
    icon: PhoneCallIcon,
    desc: "Get in touch with me.",
  },
];



export const contact_links = [
  {
    name: "astrowu61@gmail.com",
    icon: MailIcon,
    link: `mailto:${email}`,
    text: "Email",
  },
  {
    name: "+91 8918829811",
    icon: PhoneCallIcon,
    link: `tel:${phoneno}`,
    text: "Call Me",
  },
];

export const hero_info = {
  hero_text: "Full-Stack Web Developer & Problem Solver",
  hero_desc:
    "I create beautiful things when I have a cup of coffee with me 🍵.",
};



export const skills = [
  {
    label: "Front-end Development",
    icon: LayoutPanelTopIcon,
    desc: "I love to create beautiful responsive websites from scratch",
    skills: [
      {
        name: "HTML",
        icon: "/icons/html3d.png",
      },
      {
        name: "CSS",
        icon: "/icons/css3d.png",
      },
      {
        name: "TailwindCSS",
        icon: "/icons/devicon--tailwindcss.svg",
      },
      {
        name: "Javascript",
        icon: "/icons/js.png",
      },
      {
        name: "Typescript",
        icon: "/icons/ts.png",
      },
      {
        name: "ReactJs",
        icon: "/icons/devicon--react.svg",
      },
      {
        name: "NextJs",
        icon: "/icons/devicon--nextjs.svg",
      },
      {
        name: "Socket.io",
        icon: "/icons/devicon--socketio.svg",
      },
      /*{
        name: "WebRTC",
        icon: "/icons/webrtc.png",
      }, */
    ],
  },
  {
    label: "Back-end & Databases",
    icon: Code2Icon,
    desc: "I design scalable applications and build them with utmost optimisation",
    skills: [
      {
        name: "NodeJS",
        icon: "/icons/node.png",
      },
      {
        name: "Spring Boot",
        icon: "/icons/devicon--spring.svg",
      },
      {
        name: "MySQL",
        icon: "/icons/devicon--mysql.svg",
      },
      {
        name: "Socket.io",
        icon: "/icons/devicon--socketio.svg",
      },
      {
        name: "Redis",
        icon: "/icons/devicon--redis.svg",
      },
      {
        name: "Postgresql",
        icon: "/icons/devicon--postgresql.svg",
      },
      {
        name: "MongoDB",
        icon: "/icons/mongo.png",
      },
      {
        name: "Serverless",
        icon: "/icons/lambda.png",
      },
      {
        name: "Microservices",
        icon: "/icons/microservices.png",
      },
    ],
  },
  {
    label: "DevOps",
    icon: WorkflowIcon,
    desc: "I can automate operations for seamless workflow",
    skills: [
      {
        name: "AWS",
        icon: "/icons/aws.png",
      },
      {
        name: "GitLabCI/CD",
        icon: "/icons/devicon--gitlab.svg",
      },
     /*{
        name: "Github Actions",
        icon: "/icons/gitac.png",
      }, */
      {
        name: "Docker",
        icon: "/icons/docker.png",
      },
      {
        name: "Kubernetes",
        icon: "/icons/kubernetes.png",
      },
      
      {
        name: "Terraform",
        icon: "/icons/devicon--terraform.svg",
      }, 
      {
        name: "Prometheus",
        icon: "/icons/devicon--prometheus.svg",
      }, 
      {
        name: "Helm",
        icon: "/icons/devicon--helm.svg",
      },
      {
        name: "Vault",
        icon: "/icons/devicon--vault.svg",
      },
    ],
  },
];


