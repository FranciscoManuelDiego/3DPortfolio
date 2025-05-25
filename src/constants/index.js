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
    Annotations,
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

// const testimonials = [ { testimonial: } ];

    const projects = [
    {
    name: "E-Commerce",
    description:
        "A sample of a Coderhouse Ecommerce using JS, HTML and CSS.",
    tags: [
        {
        name: "JS",
        color: "text-yellow-300",
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
    {
        name: "Annotations",
        description:
            "A sample of annotations made on React CRUD.",
        tags: [
            {
            name: "React",
            color: "blue-text-gradient",
            },
            {
            name: "HTML",
            color: "orange-text-gradient",
            },
            {
            name: "CSS",
            color: "blue-text-gradient",
            },
            {
            name: "JS",
            color: "text-yellow-300",
            },
        ],
        image: Annotations,
        source_code_link: "https://github.com/FranciscoManuelDiego/PersonalNotes.git",
        },
];

export { services, technologies, experiences,  projects };

// References to ERxperiences, activities and courses done. This is where you update data !