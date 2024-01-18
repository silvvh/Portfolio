"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-5 px-5"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        Meus Projetos
      </h1>
      <ul className="grid md:grid-cols-3 gap-5 md:gap-12">   
      <ProjectCard
          imgUrl="/hms.jpg"
          title="Hospital Appointment Booking"
          gitUrl=""
          previewUrl=""
          description="Plataforma de agendamento de consultas médicas com sistema de autenticação específico para paciente, doutor e administrador. A API foi construída no framework Springboot." />
 <ProjectCard
          imgUrl="/ecomerce.jpg"
          title="E-Commerce Project"
          gitUrl=""
          previewUrl=""
          description="E-commerce construído em Node/Express. Possui produtos de diferentes categorias, a autenticação e funcionalidades do sistema seguem a lógica de experiência desejada para os papéis de usuário, funcionário e admin."/>
 <ProjectCard
          imgUrl="/agency.jpg"
          title="Agency Landing Page"
          gitUrl=""
          previewUrl=""
          description="Landing page responsiva construída sob o uso de SASS, linguagem pré-processadora de CSS." />
      <ProjectCard
          imgUrl="/todo.jpg"
          title="ToDo List"
          gitUrl=""
          previewUrl=""
          description="Aplicativo de gerenciamento de lista de tarefas constrúido com React que utiliza o Firebase para persistência de dados." />
      </ul>
    </div>
  );
};

export default Projects;