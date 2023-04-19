import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 8,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 0,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Frontend",
    tenure: "85%",
    role: "Frontend Tools",
    detail:
      "HTML, CSS, SCSS, JAVASCRIPT,",
  },
  {
    place: "Framework",
    tenure: "70%",
    role: "Framework Tools",
    detail:
      "BOOTSTRAP, REACT JS",
  },
  {
    place: "Backend, Database",
    tenure: "65%",
    role: "Backend, Database",
    detail:
      "Node.js, FIREBASE, MY SQL, MONGODB",
  },
];

export const comments = [
  {
    name: "Sampal Raj S",
    post: "Fronend",
    comment:
      "We create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.",
    img: "./spr.jpg",
  },
  {
    name: "RAGHUL S",
    post: "UI/UX Desinger",
    comment:
      "We create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.",
    img: "./raghul.jpg",
  },
  {
    name: "SEBASTIN",
    post: "Creative Manager",
    comment:
      "We create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.",
    img: "./seba.png",
  },
  {
    name: "RAJ B",
    post: "Backend",
    comment:
      "We create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.",
    img: "./raj.png",
  },  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
