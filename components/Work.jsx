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
    image: "/work/Franchiseku.png",
    category: "PHP Laravel",
    name: "FranchiseKu",
    description:
      "FranchiseKu is franchise aggregators website that connect investor who wants to invest into business franchises. FranchiseKu also provide several education with many different kind of category like business, investing, and also technology like programming.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/cekfilm.png",
    category: "React JS",
    name: "CekFilm",
    description:
      "CekFilm is your ultimate movie info hub! Powered by the MovieDB API, it's packed with all the details you need. Search for any movie, browse what's currently playing, discover upcoming releases, and find the top-rated films—all in one convenient spot. From searching to exploring, CekFilm has your movie needs covered! 🍿🎬",
    link: "/",
    github: "/",
  },
  {
    image: "/work/musicPlayer.png",
    category: "JavaScript",
    name: "Music Player",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt deserunt reiciendis ipsum accusamus perferendis obcaecati mollitia dolorum nihil temporibus!",
    link: "/",
    github: "/",
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
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section id="work" className="relative mt-12 mb-12 xl:mb-48 min-h-[50vh]">
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
            {/* show only the first 5 projects for the slides */}
            {projectData.slice(0,5).map((project, index) => {
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
