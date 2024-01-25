'use client'
import React, {useState} from "react"
import {Tabs} from '@/components/ui/tabs'
import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
    image: "/work/1.png",
    category: "PHP Laravel",
    name: "FranchiseKu",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Java Spring",
    name: "Hospital Management System",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React JS",
    name: "GBI Jelambar Timur Portal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS",
    name: "Songtify",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "PHP Laravel",
    name: "FranchiseKu",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Java Spring",
    name: "Hospital Management System",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React JS",
    name: "GBI Jelambar Timur Portal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS",
    name: "Songtify",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
];

//remove duplicates category
const uniqueCategory = [...new Set(projectData.map((item)=>item.category))];
const category2 = projectData.map((item) => item.category);
console.log(uniqueCategory);
console.log("==========================")
console.log(category2);

const Projects = () => {
  return (
    <section className='min-h-screen pt-12'>

    </section>
  )
}

export default Projects