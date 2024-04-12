
import web from "../assets/lc.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";

import starbucks from "../assets/javascript.png";

import threejs from "../assets/threejs.svg";

import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mnnit from "../assets/b.png";
import lpu from "../assets/a.png";
import ccb from "../assets/c.png";

import pj3 from "../assets/pj3.jpg";
import pj1 from "../assets/pj1.png";
import pj2 from "../assets/pj2.jpg";

import ll from "../assets/ln.png";


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "HIRE ME",
    },
  ];
  
  const services = [
    {
      title: "Leetcode",
      icon: web,
      link: "https://leetcode.com/rohan_cs/",
    },
    {
      title: "GitHub",
      icon: git,
      link: "https://github.com/rohan-algorithm",
    },
    {
      title: "LinkedIn",
      icon: ll,
      link: "https://www.linkedin.com/in/rohan-algorithms/",
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
    {
      title: "National Institute of Technology Allahabad (MNNIT)",
      company_name: "Master of Computer Application (MCA)",
      icon: mnnit,
      iconBg: "#383E56",
      date: "Augest 2022 - May 2025",
     
    },
    {

      title: "Lovely Professional University",
      company_name: " Bachelor of Computer Application (BCA)",
      icon: lpu,
      iconBg: "#383E56",
      date: "Augest 2019 - July 2022",
     
    },
    {

      title: "Christ Church Boys' Senior Secondary School, Jabalpur",
      company_name: "",
      icon: ccb,
      iconBg: "#383E56",
      date: "2003 - 2019",
     
    },
  ];
  const educations = [
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
     
    },
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
     
    },
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
    },
    {
      institutionName: "React.js Developeer",
      iconBg: "383E56",
      icon: starbucks,
      startYear: "March 2020 - April 2021",
      endYear: "March 2020 - April 2021",
      degree:"MCA",
    },
  ];
  

  
  const projects = [
    {
      name: "ExpenditureXpert",
      description:
        "ExpenditureXpert is an MERN Stack financial management app simplifies daily transactions, offering diverse expense categories for meticulous tracking. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pj1,
      source_code_link: "https://github.com/",
    },
    {
      name: "AromaMarket",
      description:
        "A e-commerce Website dedicated to the Purchase and Sale of Premium Deodorants and Perfumes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pj2,
      source_code_link: "https://github.com/",
    },
    {
      name: "College Niwas",
      description:
        "College Niwas is an Android app designed to help college students find and list rooms and PG accommodations near their respective colleges.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Dart",
          color: "pink-text-gradient",
        },
      ],
      image: pj3,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects,educations };