import React from "react";
import investCalc from "../assets/investCalc.png";
import acme from "../assets/acme.png";

export default function PortfolioProj() {
  const projects = [
    {
      name: "Investment Calculator",
      description:
        "This project is an investment calculator I worked on. It can track how much money you would have if you invested a certain amount of money over a certain period of time. It also takes into account the interest rate and the frequency of the interest compounding.",
      link: "https://investment-calc-khaki.vercel.app/",
      tech: "React, TailwindCSS",
      image: investCalc,
    },
    {
      name: "ACME Dashboard",
      description:
        "This is a simple dashboard that tells you about invoices and payments. Login, authenticate, and see the data.",
      link: "https://acme-dashboard-neon-nine.vercel.app/",
      tech: "React, TailwindCSS, Next.js, TypeScript",
      image: acme,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className=" border-2 border-solid border-zinc-600 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-200 hover:underline"
              >
                Visit Project
              </a>
              <p className="italic text-gray-500">{project.tech}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
