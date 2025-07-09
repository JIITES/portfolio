import express from "./express.png";
import react from "./react.svg";
import node from "./nodejs.svg";
import mongodb from "./mongodb.svg";
import javascript from "./javascript.svg";
import html from "./html-5.png";
import css from "./css-3.png";

import tailwindcss from "./tailwind.png";
import git from "./git.png";
import github from "./github.png";
import Cart from "./cartimage.png";
import Clock from "./Digtalclock.png";
import W from "./Weathers.jpg"
import Shop from "./Shopcart.png";

export const Assets =[
    {
        name: "Express.js",
        image: express,
        alt: "Express.js Logo"
    },
    {
        name: "React",
        image: react,
        alt: "React Logo"
    },
    {
        name: "Node.js",
        image: node,
        alt: "Node.js Logo"
    },
    {
        name: "MongoDB",
        image: mongodb,
        alt: "MongoDB Logo"
    },
    {
        name: "JavaScript",
        image: javascript,
        alt: "JavaScript Logo"
    },
    {
        name: "HTML",
        image: html,
        alt: "HTML Logo"
    },
    {
        name: "CSS",
        image: css,
        alt: "CSS Logo"
    },
    {
        name: "Tailwind CSS",
        image: tailwindcss,
        alt: "Tailwind CSS Logo"
    },
    {
        name: "Git",
        image: git,
        alt: "Git Logo"
    },
    {
        name: "GitHub",
        image: github,
        alt: "GitHub Logo"
    }
]

export const projects = [
  {
    title: "GreenCart Grocery Store",
    description: "An e-commerce grocery store built with React, Tailwind, and Node.js.",
    image: Cart,
    liveLink: "https://greencart.vercel.app",
    codeLink: "https://github.com/jitheshdr/greencart",
  },
  {
    title: "E-commerce Shop mart",
    description: "A personal portfolio website showcasing my projects and skills.",
    image: Shop,
    liveLink: "https://ecommerce-phi-beige.vercel.app/",
    codeLink: "https://github.com/JIITES/Ecommerce"
  },
  {
    title: "Weather App",
    description: "A weather application that provides current weather information using React.",
    image:W,
    liveLink: "https://weatherjithesh.vercel.app/",
    codeLink: "https://github.com/JIITES/Weather"}
];

export const SmallP=[{
title: "Digital Clock",
    description: "A simple digital clock built with HTML, CSS, and JavaScript.",
    image: Clock,
    liveLink: "https://digitalclock-liart-iota.vercel.app", // primary live link
    codeLink: "https://github.com/JIITES/Digitalclock",
},
]