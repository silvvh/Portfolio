"use client";
import React, { FC, ReactNode, useState } from "react";
import Image from "next/image";
import TabButton from "../sub/TabButton";

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection: FC = () => {
  const [tab, setTab] = useState<string>("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-5 py-24 xl:px-16">
        <Image src="/avatar.jpg" width={500} height={500} alt={""}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Quem sou eu?</h2>
          <p className="text-gray-200 lg:text-lg ">
          Atualmente estudante de Ciência da Computação na Universidade Tecnológica Federal do Paraná (UTFPR), venho me dedicando à paixão pela área de engenharia de software, sobretudo com foco no desenvolvimento web. Possuo familiaridade com metodologias ágeis, padrões de organização de projetos e conhecimento geral em sistemas operacionais e infraestrutura de redes. Flexível, proativo e em busca de oportunidades para adquirir mais experiência como programador. 

          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Interests{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Soft Skills
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
