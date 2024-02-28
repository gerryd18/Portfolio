"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

//swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Jesslyn Danella Jieandy",
    job: "Tax Supervisor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa inventore, voluptatibus est ullam soluta?",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Johnny Sins",
    job: "Back-end Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa inventore, voluptatibus est ullam soluta?",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Gus Fring",
    job: "CEO of PT KTL",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa inventore, voluptatibus est ullam soluta?",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Walter White",
    job: "Scientist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa inventore, voluptatibus est ullam soluta?",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Anton Castillo",
    job: "President of Kara",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa inventore, voluptatibus est ullam soluta?",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Carl Johnson",
    job: "Chinese Lecturer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa inventore, voluptatibus est ullam soluta?",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="mb-12 xl:mb-32 mt-[5rem]">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>

        {/* swiper */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 min-h-[300px] p-2">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
