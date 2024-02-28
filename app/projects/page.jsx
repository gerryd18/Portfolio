"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/Franchiseku.png",
    category: "PHP Laravel",
    name: "FranchiseKu",
    description:
      "FranchiseKu is franchise aggregators website that connect investor who wants to invest into business franchises. FranchiseKu also provide several education with many different kind of category like business, investing, and also technology like programming.",
    link: "https://franchisekuinvest.com",
    github: "https://github.com/gerryd18/Franchiseku",
  },
  {
    image: "/work/cekfilm.png",
    category: "React JS",
    name: "CekFilm",
    description:
      "CekFilm is your ultimate movie info hub! Powered by the MovieDB API, it's packed with all the details you need. Search for any movie, browse what's currently playing, discover upcoming releases, and find the top-rated films—all in one convenient spot. From searching to exploring, CekFilm has your movie needs covered! 🍿🎬",
    link: "/",
    github: "https://github.com/gerryd18/CekFilm",
  },
  {
    image: "/work/cekmobil.png",
    category: "Next JS",
    name: "CekMobil",
    description:
      "Explore comprehensive car specifications and up-to-date pricing at CekMobil, your ultimate destination for informed car buying decisions.",
    link: "/",
    github: "https://github.com/gerryd18/CekMobil",
  },
  {
    image: "/work/3.png",
    category: "PHP Laravel",
    name: "GBI Jelambar Timur Portal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/UWCollege.png",
    category: "CodeIgniter",
    name: "Unlimited Worship College",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "https://college.unlimitedworship.org",
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

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 gap-y-4 gap-x-4 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                  onClick={() => {
                    setCategory(category);
                  }}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
