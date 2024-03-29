import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
<div
  className="h-52 md:h-65 relative group"
  style={{ background: `url(${imgUrl})`, backgroundSize: "100% 100%" }}
>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link href={gitUrl} passHref className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#020013] group/link">
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#020013]" />
          </Link>
          <Link href={previewUrl} passHref className="h-14 w-14 border-2 relative rounded-full  border-[#ADB7BE]  hover:border-[#020013] group/link">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#020013]" />
          </Link>
        </div>
      </div>
      <div className="text-white bg-[#020013] p-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
