
 
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

} from "../assets/icons";

console.log(css);
export const skills = [
    {
        imageUrl: 'src/assets/icons/coding.svg',
        name: "C++",
        type: "Coding",
    },
    {
        imageUrl: 'src/assets/icons/c.svg',
        name: "C",
        type: "Coding",
    }, {
        imageUrl: 'src/assets/icons/python.svg',
        name: "Python",
        type: "Backend/ML",
    },
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
        imageUrl: 'src/assets/icons/sql.svg',
        name: "<Sql",
        type: "Database",
    },
    
    {
        imageUrl: mui,
        name: "Material-UI",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl:  'src/assets/icons/salesforce.svg',
        name: "Salesforce",
        type: "Cloud",
    },{
        imageUrl:  'src/assets/icons/firebase.svg',
        name: "Firebase",
        type: "Web",
    },
   
];

export const experiences = [
    {
        title: "Salesforce Developer Intern",
        company_name: "Techila Global Services",
         icon:'src/assets/images/techila.png',
        iconBg: "#accbe1",
        date: "June 2023 - Sept 2023",
        points: [
            "Collaborated with Salesforce Administrator in customizing fields, objects, and layouts, enhancing system functionality.",
            "Enhanced onboarding/offboarding, managing 50+ user profiles, permissions, and roles, cutting setup time by 20%.",
            "Contributed to custom workflow, validation, and automation, reducing errors by 25% for improved data accuracy and workflow efficiency",
        
        ],
    },
    
   
    
];
export const educations = [
    {
        title: 'Bachelor of Technology in Computer Science Engineering',
        company_name: 'Rajiv Gandhi Institute Of Petroleum Technology',
         icon:'src/assets/images/rgipt.png',
        iconBg: "#accbe1",
        date: "Dec 2020 - Jun 2024",
        points: [
            "A final year Computer Science Engineering student at Rajiv Gandhi Institute of Petroleum Technology (an INI).",
            "Coursework:-Data Structures, Algorithms Analysis, Computer Architecture, Artificial Intelligence, Deep Learning, Operating System,  Database Management",
            
        ],
    },
    {
        title: 'Higher Secondary Education(CBSE)',
        company_name: 'Sri Chaitanya Techno School',
         icon:'src/assets/images/sri.jpg',
        iconBg: "#accbe1",
        date: "Jun 2017 - May 2019",
        points: [
            " PCM+IT",
            "82.4%",
            
            
        ],
    },
    {
        title: 'Higher Education(CBSE)',
        company_name: 'Army Public School, Patiala Cantt',
        icon:'src/assets/images/aps.png',
        iconBg: "#accbe1",
        date: "July 2016-May 2017",
        points: [
            "10 CGPA",
            
        ],
    },
   
    
];

export const socialLinks = [
   
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/abhishish3960',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhishekashish01/',
    },
    {
        name: 'Resume',
        iconUrl: 'src/assets/icons/reshot-icon-resume-92U4B7WG8Y.svg',
        link: 'https://drive.google.com/file/d/1F-1I77ox2gg4amTgK9BTJ2VkfOimCAJa/view?usp=sharing',
    }
];

export const projects = [
    {
        iconUrl: 'src/assets/images/aa.png',
        theme: 'btn-back-black',
        name: 'Filmify',
        description: 'Developed a web app which looks near identical in terms of styling to the current version of Netflix. Implemented content updates in real-time by interfacing with the movie database API.Supports trailer playback for titles. Fully Responsive, all the way down to the smallest phone screens.',
        link: 'https://github.com/abhishish3960/Filmify',
    },
    {
        iconUrl: 'src/assets/images/sss.webp',
        theme: 'btn-back-blue',
        name: 'Sanity Test ',
        description: 'Developed a classification model to forecast the likelihood of a sanity test case failure on the platform when a specific file is altered, based on a combination of attributes. Ensemble two models namely Random Forest and Multinomial Logistic regression using soft voting. Got an accuracy of 97.18%.',
        link: 'https://github.com/abhishish3960/Sanity-Test',
    },
    {
        iconUrl: 'src/assets/images/ca.png',
        theme: 'btn-back-green',
        name: 'Crowd Anomaly Detection',
        description: 'Built a machine learning system for fast and precise detection of unusual events in visual surveillance. Introduced the ”Motion Influence Map” approach to represent human activities, significantly improving anomaly detection efficiency.',
        link: 'https://github.com/abhishish3960/Crowd-Anomaly-Detection',
    },
  
    {
        iconUrl: 'src/assets/images/bb.png',
        theme: 'btn-back-red',
        name: 'Hemo Life',
        description: 'Designed a webpage enabling users to locate the nearest blood bank and access information about available blood types at each facility. Incorporated a feature for blood banks to daily update their stock availability on the platform.',
        link: 'https://github.com/abhishish3960/Hemo-Life',
    },
    {
        iconUrl: 'src/assets/images/tt.webp',
        theme: 'btn-back-yellow',
        name: 'Tweets-Clustering',
        description: 'The project includes implementation of K-means algorithm (an unsupervised learning algorithm) without using any libraries. The Objective of this project is to cluster the similar tweets based on similarity of words within the sentences.',
        link: 'https://github.com/abhishish3960/Tweets-Clustering',
    }
];