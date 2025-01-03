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
    imageUrl:   "https://i.ibb.co/gJRFJBZ/BCW1.jpg",
   
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
    "https://i.ibb.co/ZhtwxBc/Go-Bang-Go1.jpg",

    urlLink: "https://gobang-869r.onrender.com/",
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
    name: "ayanabha2002@gmail.com",
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

export const projects = [
  {
    name: "MEETUP",
    techs: [
      "HTML",
      "JavaScript",
      "ReactJs",
      "TailwindCSS",
      "NodeJs",
      "MongoDB",
      "WebRTC",
      "Docker",
      "Github Actions",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS S3",
      "AWS Cloudfront",
    ],
    images: [
      "https://i.ibb.co/ZhtwxBc/Go-Bang-Go1.jpg",
"https://i.ibb.co/zVfTpt1/Go-Bang-Go3.jpg",
"https://i.ibb.co/55jbss2/Go-Bang-Go2.jpg",
"https://i.ibb.co/XbkLdBf/Go-Bang-Go4.jpg",
   
    ],
    git: "https://github.com/zongzewu23/GoBang",
    link: "https://gobang-869r.onrender.com/",
    description:
      "MeetUp is a WebRTC-based video conferencing app that allows users to create rooms with multiple people and chat in real-time.",
  },
  
];



