import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const InfoData = [
  {
    icon: <User2 size={20} />,
    text: "Gerry Dermawan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 812-8484-9822",
  },
  {
    icon: <MailIcon size={20} />,
    text: "gerrydermawan02@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 04 Feb, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Information Systems",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Jakarta Utara",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Java Spring",
      },
      {
        name: "PHP Laravel",
      },
      {
        name: "React JS",
      },
      {
        name: "Next JS",
      },
      {
        name: "Flutter",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Bina Nusantara University",
        qualification: "Bachelor of Information Systems",
        years: "2020 - 2024",
      },
      {
        university: "Bina Nusantara University",
        qualification: "Bachelor of Information Systems",
        years: "2020 - 2024",
      },
      {
        university: "Bina Nusantara University",
        qualification: "Bachelor of Information Systems",
        years: "2020 - 2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "PT Mayora Indah Tbk",
        role: "Full-Stack Engineer Intern",
        years: "2023 - 2024",
      },
      {
        company: "PT Exacode",
        role: "Part Time Software Developer",
        years: "2024 - present",
      },
      {
        company: "Bina Nusantara Computer Club",
        role: "Java Programming Education Mentor",
        years: "2020 - 2021",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  // console.log(getData(qualificationData, "education"));

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 relative">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row justify-between items-center">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1 relative h-[80vh]">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Information
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8 ">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit.Ut?
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Molestias odit nostrum vero quas possimus. Iusto hic in,
                      debitis distinctio dolorem accusantium architecto nesciunt
                      nobis nam, incidunt optio quisquam molestiae voluptatem
                      exercitationem? Quis eum consequuntur nemo dicta eius,
                      commodi nihil rem at pariatur? Modi adipisci fugit ut et?
                      Reprehenderit, iste asperiores.
                    </p>

                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12 mt-4">
                      {InfoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary ">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Indonesia, English</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>

                    {/* experience and education */}
                    <div className="grid md:grid-cols-2 gap-y-8 ">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}

                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData,'tools').data.map((item,index)=>{
                          const {imgPath} = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
