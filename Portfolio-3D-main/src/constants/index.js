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
        name: 'Movie Review Application - Java Fullstack Project.',
        description: ['Developed a full-stack application for browsing movies and viewing reviews using React.js and Java + Spring Boot.', 'Utilized MongoDB for database management and implemented CRUD operations via REST APIs.','Ensured code reliability by integrating unit tests with JUnit'],
        // description: '# Developed a full-stack application for browsing movies and viewing reviews using React.js and Java + Spring Boot.\n Utilized MongoDB for database management and implemented CRUD operations via REST APIs.\n Ensured code reliability by integrating unit tests with JUnit',
        link: 'https://github.com/trojan1771/Movies-and-Reviews---Backend',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'A Collaborative interface design tool - Frontend Project.',
        description: ['A collaborative graphics design too with real-world features like live cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas','Tech stack : Next.js 14, Fabric.js, and Liveblocks'],
        link: 'https://figma-clone-dun-five.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Sociopedia - MERN stack Project.',
        description: ['Full stack based Social Networking website using MERN stack.','Implements features like ”Add friend”, ”Remove friend”, ”Like”, ”Comment”, ”Upload a Post”, ”Delete a post”','Upload image while signing up and various other functionalities using different Data structures'],
        link: 'https://drive.google.com/file/d/1DSX59VsReU-Wag45R_Y1-aGCNaQ8dkk0/view?usp=sharing',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Disney+ clone',
        description: ['A Pixel Perfect clone of Disney+ website showcasing my reactjs and tailwind css skills','SignIn implemented using Firebase.'],
        link: 'https://drive.google.com/file/d/1I7KSCDxOK2_DDFbE-yMK4Tvy7KHRv6mK/view?usp=sharing',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'This Portfolio Website',
        description: ['An interactive 3D website designed to showcase my skills, projects and experiences to someone interested in hiring me.','Includes a Home, About and Prrojects page.','Tech stack : Reactjs, GSAP, ThreeJs'],
        link: 'https://github.com/trojan1771/Portfolio-3D',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Single Input face Recognition system',
        description: ['An awesome ML model which provides facial recognition using a single image input with names stored in cache','Upto 87% accuracy','Uses advanced face landmark estimation','By identifying 68 specific points on each face, we normalize facial orientations, making it simpler for the computer to process'],
        link: 'https://github.com/trojan1771/face_recog_login_system',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Automatic Licence plate detection',
        description: ['Upto 80% Accuracy'],
        link: 'https://github.com/trojan1771/Automatic-licence-plate-detection',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Pneumonia Detection website',
        description: ['Upto 76% Accuracy'],
        link: 'https://github.com/trojan1771/Pneumonia-detection-website',
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
        name: 'Sales Insight - Power BI',
        description: ['A Data Science project that includes cleaning and adjustment of raw sql data and then creation of an informative UI using PowerBI for both desktop and mobile views'],
        link: 'https://github.com/trojan1771/Sales-Insight',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Personal finance dashboard - Power BI',
        description: ['This repository contains a comprehensive personal finance dashboard built using Microsoft Power BI. Take control of your finances by visualizing and analyzing your income, expenses, savings, and investments in an interactive and intuitive way.'],
        link: 'https://github.com/trojan1771/Personal-finance-Dashboard',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'ChetChat - Real time chat app',
        description: ['Real time chat app using MERN stack and Socekt.io'],
        link: 'https://github.com/trojan1771/rtca',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'File compressor',
        description: ['A Real application based on Huffman encoding implemented using c++'],
        link: 'https://github.com/trojan1771/Compressor-App-c--',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Delhi metro helper',
        description: ['A Djkstra algorithm based code which works with the data of Delhi metro connections and provides you the fastest routes either based on time or cost of travel'],
        link: 'https://github.com/trojan1771/Metro-app',
    },
];
