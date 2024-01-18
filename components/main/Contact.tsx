// Adicione os tipos necessários conforme necessário
"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/footer/github-icon.svg";
import LinkedinIcon from "../../public/footer/linkedin-icon.svg";

const Contact: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: (e.target as any).email.value,
      subject: (e.target as any).subject.value,
      message: (e.target as any).message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 py-5 gap-20 mx-auto px-12"
    >
      <div >
        <h5 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 mb-5">
          Vamos nos conectar
        </h5>
        <p className="text-gray-200 mb-5 max-w-md">
          {" "}
          Que tal converter suas ideias em um website ou aplicativo com layout atrativo, responsivo e de fácil interação? Além disso, valorizo as boas práticas de programação e desenvolvo de forma limpa e organizada, facilitando a compreensão. Interessado? Entre em contato!
          </p>
        <div className="socials flex flex-row gap-5">
          <Link href="https://github.com/silvvh">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/victor-hugo-brito-silva-71b564207/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white text-sm font-medium"
              >
                Seu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] mt-2 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  w-full p-2.5"
                placeholder="exemplo@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white text-sm font-medium"
              >
                Conteúdo
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg mt-2 w-full p-2.5"
                placeholder="Bom dia, como vai você?"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white text-sm font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg mt-2 w-full p-2.5"
                placeholder="Vamos falar sobre..."
              />
            </div>
            <button
              type="submit"
              className="py-2 button-primary text-center text-white font-medium px-5 rounded-lg w-full"
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
