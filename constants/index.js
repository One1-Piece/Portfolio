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
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    // job1,
    // job2,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../public/assets";
  
  import job1 from "../public/assets/company/joblogo1.png"
  import job2 from "../public/assets/company/joblogo2.png"
  
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
      title: "Website Design",
      icon: web,
    },
    {
      title: "React/Next.js Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Cen Global",
      icon: job2,
      iconBg: "#383E56",
      date: "November 2021 - Present",
      points: [
        "Played a key role in developing and am now actively enhancing an advanced digital platform to streamline tracking and control of customs operations for logistics companies.",
        "Engineered and launched 2 full-stack websites and an efficient real-time warehouse management system.",
        "Developed tailored automated services, some incorporating a microservice architecture, to enhance and streamline operational processes for our clients.",
        "Optimized the functionality and user experience of existing customs software and website by 20%.",
        "Developed and implemented a digital solution for Al Futtaim, simplifying customs declarations through integration with Dubai customs validation.",
        "Designed and implemented a fully automated EDIFACT EDI message service for a UK client.",
        "Integrated our partner software, Cargo Wise, into the logistics operations of 5 clients, enhancing their operational efficiency.",
        "Created customized SQL reports for clients using our partnered software, Cargo Wise, providing critical insights for decision-making.",
        "Successfully navigated cultural differences and time zone challenges in a remote, international team setting to ensure effective collaboration and meet project goals.",
        "Participating in code reviews and providing constructive feedback to other developers."
      ]
    },
    {
      title: "Next.js Developer",
      company_name: "Al Ebtikhar E Learning Platform",
      icon: job1,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Nov 2021",
      points: [
        "Led the development of a novel CRM system, incorporating new features and personalized business logic to meet specific requirements.",
        "Helped design the CRM in a way that increased all departments satisfaction by 30%.",
        "Enhanced CRM performance by 15%, reducing load times and boosting user experience.",
        "Created a new student portal from scratch, enabling communication between students and teachers, and implemented a custom load distribution algorithm.",
        "Initiated a Quiz module project to facilitate tailor-made quizzes for students, contributing to early-stage development.",
        "Successfully launched 2 distinct websites for a reward-based E-commerce app: an admin panel and a store dashboard for vendors to customize their online storefronts.",
        "Constructed all APIs for the E-Commerce App, boosting the speed of mobile app development by 20% and facilitating faster project delivery.",
        "Acquired and effectively utilized knowledge of geospatial algorithms to enhance the functionality of the reward-based E-commerce App, improving location-based services and user experience.",
        "Developed API Authentication/Authorization protocols and implemented OTP Login systems."
      ]
    }
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Taha proved me wrong.",
      name: "Jenna Ortega",
      designation: "",
      company: "Neutrogena",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Taha does.",
      name: "Chris",
      designation: "CEO",
      company: "DEF Corp",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Taha optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa",
      designation: "CEO",
      company: "456 Enterprises",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CRM",
      description:
        "I created a personalized CRM solution tailored to the needs of an E-Learning platform. This CRM significantly simplifies their sales pipeline while offering additional features like real-time student messaging for seamless communication and feedback collection. Furthermore, I developed a student portal that seamlessly integrates with the CRM, enhancing the platform's overall functionality and providing a comprehensive solution for managing student interactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "AntDesign",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      // source_code_link: "https://github.com/",
    },
    {
      name: "E-Commerce",
      description:
        "Successfully launched 2 distinct websites for a reward-based E-commerce app: an admin panel, and a store dashboard where vendors could customize their online storefronts. Also Built all APIs for the E-Commerce Mobile App.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Customs Platform",
      description:
        "An Advanced digital platform to streamline tracking and control of customs operations for logistics companies.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
        {
          name: "MVC",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Warehouse Management System",
      description:
        "I developed a Real-Time Warehouse System that enables seamless inventory receiving, picking, and an order system that allows customers to place orders in real-time",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
        {
          name: "MVC",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      // source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };