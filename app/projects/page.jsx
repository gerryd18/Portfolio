"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
const uniqueCategory = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);

  //variable for selected category 
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter(project=>{
    // if category is 'all projects' return all, else filter by category
    return category === 'all projects' ? project : project.category === category;
  })
  
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger key={index} value={category} className='capitalize w-[162px] md:w-auto' onClick={()=>{
                  setCategory(category);
                }}>
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
