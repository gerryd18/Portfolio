"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "./ProjectCard";

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
];

const Work = () => {
  return (
    <section id="work" className="relative mt-12 mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas voluptatem odit distinctio quaerat, corporis corrupti.</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[550px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView:2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0,4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;