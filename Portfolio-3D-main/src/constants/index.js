import { meta, shopify, starbucks, tesla } from "../assets/images";
import { 
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
  
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    
    
    {
        title: "Software Development engineer + Instructor",
        company_name: "Newton school of Technology",
        icon: "",
        iconBg: "#b7e4c7",
        date: "February 2024 - February 2025",
        points: [
            "Developed full-stack educational content (HTML, CSS, JavaScript, React.js, Node.js, deployment).",
            "Improved platform functionality by enhancing the notes creation tool",
            "Mentored 100+ students; facilitated hackathon participation and internship placements",
            "Tech Stack: React.js, Django, Java, Spring Boot."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Tata Consultancy Services - Robotics",
        icon: "",
        iconBg: "#fbc3bc",
        date: "May 2023 - December 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies for controlling and diagnosing robots",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "The project got selected as one of the best Robotics projects worldwide and resulted in the team being invited to Roboexpo 2024, Tokyo,Japan",
            "Tech Stack: React.js, Redis, Django, ROS (Robot Operating System), Tailwind CSS.",
            "Checkout the project demo here : https://drive.google.com/file/d/1Cm7E3glv7ODzPpQvojqLzfyG0e8-zzNw/view"
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Daffodil Healths",
        icon: "",
        iconBg: "#accbe1",
        date: "June 2022 - August 2022",
        points: [
            "Enhanced web application features for partner hospitals, improving operational efficiency enhancing customer interaction by 34%",
            "Implemented features like custom form generation and code optimization..",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Tech Stack: React.js, Spring Boot, MongoDB, Postman, Figma."
        ],
    }
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nashriel',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ashrielnhembo/',
    }
];

export const projects = [
     {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'axi - Artificial Expense IntelligenceTracker',
        description: ['An Artificial intelligence expense project that predicts the expenses of a user based on their previous spending habits.','It uses a machine learning model to predict the expenses and then provides a detailed analysis of the spending habits of the user.','The project is built using Django,Html, SQLAlcchemy, Javascript.'],
        link: 'https://github.com/nashriel/axi',
    },
   
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Uniconfesi  - MERN stack Project.',
        description: ['An online platform for students to share their experiences and reviews about their universities.','The project is built using React, Node.js, Express, MongoDB, and Tailwind CSS.','It allows users to create an account, post reviews, and interact with other users.Still in development phase'],
        link: 'https://github.com/nashriel/uniconfesi',
    },
   
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'This Portfolio Website',
        description: ['An interactive 3D website designed to showcase my skills, projects and experiences to someone interested in hiring me.','Includes a Home, About and Prrojects page.','Tech stack : Reactjs, GSAP, ThreeJs'],
        link: 'https://github.com/nashriel/Portifolio',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Single Input face Recognition system',
        description: ['An awesome ML model which provides facial recognition using a single image input with names stored in cache','Upto 87% accuracy','Uses advanced face landmark estimation','By identifying 68 specific points on each face, we normalize facial orientations, making it simpler for the computer to process'],
        link: 'https://github.com/nashriel/face_recog_login_system',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Automatic Licence plate detection',
        description: ['Upto 80% Accuracy' ,'This project is a computer vision-based system that automatically detects and recognizes license plates from images or video streams.','It uses advanced image processing techniques and machine learning algorithms to accurately identify license plates, even in challenging conditions such as low light or occlusion.'],
        link: 'https://github.com/nashriel/Automatic-licence-plate-detection',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Pneumonia Detection website',
        description: ['Upto 76% Accuracy' ,'This project is a web-based application that uses machine learning algorithms to detect pneumonia from chest X-ray images.','It provides a user-friendly interface for uploading images and receiving predictions, making it accessible to healthcare professionals and researchers.'],
        link: 'https://github.com/nashriel/Pneumonia-detection-website',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Online IDE',
        description: ['I have developed a multi language online IDE from scratch. I have used HTML, CSS and jQuery for UI side devlopment and design. In the server side, I have used PHP, just to keep things as simple as possible.'],
        link: 'https://github.com/trojan1771/Online-IDE-',
    },
   
       
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Delhi metro helper',
        description: ['A Djkstra algorithm based code which works with the data of Delhi metro connections and provides you the fastest routes either based on time or cost of travel'],
        link: 'https://github.com/nashriel/Metro-app',
    },
];
