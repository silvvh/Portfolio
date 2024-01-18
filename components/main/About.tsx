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
    title: "Interests",
    id: "interests",
    content: (
      <ul className="list-disc pl-2">
        <li>Desenvolvimento Web</li>
        <li>Desenvolvimento Mobile</li>
        <li>Ciência de Dados</li>
        <li>Engenharia de Software</li>
        <li>Inteligência Artificial</li>
        <li>Aprendizagem de Máquina</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ciência da Computação - UTFPR</li>
        <li>Análise & Desenvolvimento de Sistemas - Unicesumar</li>
      </ul>
    ),
  },
];

const AboutSection: FC = () => {
  const [tab, setTab] = useState<string>("interests");

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
              selectTab={() => handleTabChange("interests")}
              active={tab === "interests"}
            >
              {" "}
              Interesses{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
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
