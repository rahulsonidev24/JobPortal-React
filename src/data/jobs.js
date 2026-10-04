 import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import amazon from "../assets/amazon.png";
import tcs from "../assets/tcs.png";
import infosys from "../assets/infosys.png";
import wipro from "../assets/wipro.png";
 const jobs = [
        {
            id:1,
            logo:google,
            title:"Frontend Developer",
            company:"Google",
            location:"Bangalore",
            type:"Full Time",
            salary:"12 LPA",
            description:"We are looking for a Frontend Developer who can build responsive and user-friendly web applications using modern frontend technologies.",
            responsibilities:
            [
                "Build responsive and user-friendly web interfaces",
                "Develop reusable React Components",
                "Work with designers and Backend Developers",
                "Fix bugs and improve application performance",
                "Maintain and update existing web application"
            ],
            requirements:
            [
                "Good knowledge of HTML and CSS",
                "Strong Knowledge of Javascript",
                "Basic knowledge of React.js",
                "Understanding of responsive web design",
                "Knowledge of Git and GitHub"
            ]
        },
        {
            id:2,
            logo:microsoft,
            title:"Backend Developer",
            company:"Microsoft",
            location:"Pune",
            type:"Full Time",
            salary:"15 LPA",
            description:"We are looking for a Backend Developer to develop reliable server-side applications,APIs and datebase solutions.",
            responsibilities:
            [
                "Develop and maintain backend applications",
                "Create and maintain REST APIs",
                "Work with databases anf server side-logic",
                "Fix bugs and improve application performance",
                "Work with frontend developers to integrate APIs"
            ],
            requirements:
            [
                "Good knowledge of Java and Node.js",
                "Understanding of REST APIs",
                "Knowledge of MySQL or MangoDB",
                "Understanding of backend development",
                "Knowledge of Git and GitHub"
            ]

        },
        {
            id:3,
            logo:amazon,
            title:"React Developer",
            company:"Amazon",
            location:"Hyderabad",
            type:"Full Time",
            salary:"14 LPA",
            description:"We are looking for a React Developer who can create interactive and scalable user interfaces for web applications.",
            responsibilities:
            [
            "Develop web applications using React.js",
            "Create reusable and maintainable components",
            "Manage application state",
            "Integrate frontend applications with REST APIs",
            "Improve website performance and user experience"
            ],
            requirements: 
            [
            "Strong knowledge of JavaScript",
            "Good knowledge of React.js",
            "Understanding of components and props",
            "Knowledge of useState and useEffect",
            "Understanding of REST APIs",
            "Knowledge of Git and GitHub"
            ]
        },
        {
            id:4,
            logo:tcs,
            title:"Java Developer",
            company:"TCS",
            location:"Mumbai",
            type:"Full Time",
            salary:"10 LPA",
            description:"We are looking for a Java Developer to design, develop, test, and maintain Java-based applications.",
            responsibilities: 
            [
            "Develop and maintain Java applications",
            "Write clean and reusable code",
            "Test and debug applications",
            "Work with databases and SQL queries",
            "Collaborate with other developers and team members"
            ],
            requirements: 
            [
            "Good knowledge of Core Java",
            "Understanding of OOP concepts",
            "Knowledge of SQL",
            "Understanding of data structures",
            "Basic knowledge of Spring Boot",
            "Problem-solving skills"
            ]
        },
        {
            id:5,
            logo:infosys,
            title:"UI/UX Designer",
            company:"Infosys",
            location:"Chennai",
            type:"Full Time",
            salary:"9 LPA",
            description:"We are looking for a UI/UX Designer who can create simple, attractive, and user-friendly designs for web and mobile applications.",
            responsibilities: 
            [
            "Create user-friendly interface designs",
            "Design wireframes and prototypes",
            "Work with developers to implement designs",
            "Conduct user research and understand user needs",
            "Improve the overall user experience"
            ],
            requirements: 
            [
            "Understanding of UI/UX principles",
            "Knowledge of Figma",
            "Understanding of wireframes and prototypes",
            "Good understanding of user experience",
            "Basic knowledge of responsive design",
            "Good communication skills"
            ]
        },
        {
            id:6,
            logo:wipro,
            title:"Software Engineer",
            company:"Wipro",
            location:"Noida",
            type:"Full Time",
            salary:"13 LPA",
            description:"We are looking for a Software Engineer to develop, test, debug, and maintain software applications.",
            responsibilities: 
            [
            "Develop and maintain software applications",
            "Write clean and efficient code",
            "Test and debug software applications",
            "Work with databases and APIs",
            "Collaborate with other team members to solve technical problems"
            ],
            requirements: 
            [
            "Good knowledge of programming fundamentals",
            "Knowledge of C++ or Java",
            "Understanding of data structures and algorithms",
            "Knowledge of SQL",
            "Basic knowledge of web development",
            "Problem-solving skills"
            ]
        }
];
export default jobs;