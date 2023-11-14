import {
    backend,
    // creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    // figma
    // docker,
    // starbucks,
    carrent,
    jobit,
    ProyectoCoderhouse,
    threejs,
} from "../assets";

export const navLinks = [
    {
    id: "about",
    title: "About",
    },
    // {
    // id: "work",
    // title: "Work",
    // },
    {
    id: "contact",
    title: "Contact",
    },
];

	const services = [
    {
    title: "Frontend Developer",
    icon: web,
    },
    {
    title: "Backend Developer",
    icon: backend,
    },
];

    const technologies = [
    {
    name: "HTML 5",
    icon: html,
    },
    {
    name: "CSS 3",
    icon: css,
    },
    {
    name: "JavaScript",
    icon: javascript,
    },
    {
    name: "React JS",
    icon: reactjs,
    },
    {
    name: "Redux Toolkit",
    icon: redux,
    },
    {
    name: "Tailwind CSS",
    icon: tailwind,
    },
    {
    name: "Node JS",
    icon: nodejs,
    },
    {
    name: "MongoDB",
    icon: mongodb,
    },
    {
    name: "Three JS",
    icon: threejs,
    },
    {
    name: "git",
    icon: git,
    },
    // {
    // name: "figma",
    // icon: figma,
    // },
    // {
    // name: "docker",
    // icon: docker,
    // },
];

    const experiences = [
    // {
    // title: "React.js Developer",
    // company_name: "Starbucks",
    // icon: starbucks,
    // iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    // points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
    // },
    {
    title: "My professional career will be shown here!",
    icon: reactjs,
    iconBg: "#383E56",
    }
];

    const testimonials = [
    {
    testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
    testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

    const projects = [
    {
    name: "E-Commerce",
    description:
        "A sample of a Coderhouse Ecommerce using JS, HTML and CSS.",
    tags: [
        {
        name: "JS",
        color: "green-text-gradient",
        },
        {
        name: "HTML",
        color: "orange-text-gradient",
        },
        {
        name: "CSS",
        color: "blue-text-gradient",
        },
    ],
    image: ProyectoCoderhouse,
    source_code_link: "https://github.com/FranciscoManuelDiego/CoderHouseJavaScript.git",
    },
];

export { services, technologies, experiences, testimonials, projects };

// References to ERxperiences, activities and courses done. This is where you update data !