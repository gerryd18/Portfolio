"use client";
import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";
import Image from "next/image";

//icons
const icons = [
  {
    path: "https://www.linkedin.com/in/gerry-dermawan-4910411b6/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/gerryd18",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/gerry_dermawann/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
