import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div
        className='text-[20px] text-gray-200 text-center'
        >
            Desenvolvimento Front-End
        </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-9 items-center py-5">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div
        className='text-[20px] text-gray-200 text-center py-5'
        >
            Desenvolvimento Back-End 
        </div>
      <div className="flex flex-row justify-around flex-wrap gap-6 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div
        className='text-[20px] text-gray-200 text-center py-5'
        >
            Outros
        </div>
      <div className="flex flex-row justify-around flex-wrap gap-7 items-center ">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;