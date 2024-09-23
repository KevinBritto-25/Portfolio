import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    tensor,
    java,
    mongodb,
    git,
    figma,
    docker,
    meta,
    orinson,
    tesla,
    shopify,
    carrent,
    jobit,
    commerce,
    weather,
    tripguide,
    itms,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Aspiring AI/ML Developer ",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
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
      name: "TensorFlow",
      icon: tensor,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Development Intern ",
      company_name: "Orinson Technologies Pvt.Ltd",
      icon: orinson,
      iconBg: "#383E56",
      date: "September 2024 (4 weeks) ",
      points: [
        "Engaged in a virtual internship focused on frontend development.",
        "Gained hands-on experience applying theoretical knowledge to real-world challenges.",
        "Contributed to the development of user-friendly web applications, enhancing both skills and industry knowledge.",
        "Collaborated with a team to meet project goals and deliver high-quality work.",
      ],
    },
  ];
  
  const testimonials = [
  ];
  
  const projects = [
    {
      name: "E-commerce Page ",
      description:
      "Designed and developed a dynamic e-commerce landing page. Focused on delivering a seamless user experience with optimized performance and modern web development practices.",  
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "pink-text-gradient",
        },
      ],
      image: commerce,
      source_code_link: "https://github.com/KevinBritto-25/K-ommerce-Landing-Page",
    },
    {
      name: "Weather Dashboard",
      description:
        "Developed a dynamic weather dashboard, integrating external APIs to display real-time weather data. Designed for efficient performance and a seamless user experience. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/KevinBritto-25/Weather-Dashboard",
    },
    // {
    //   name: "Intelligent Traffic Management System ",
    //   description:
    //     "Created an AI system to optimize traffic flow and enhance road safety, utilizing cloud servers for real-time vehicle recognition and traffic analysis through a user-friendly web interface. ",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "YOLOv8",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "TensorFlow",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: itms,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };