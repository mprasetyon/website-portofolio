import React from "react";
import ProjectsCard from "./ProjectsCard";
import siasn from "../assets/img/siasn.png";
import rwi from "../assets/img/ray-white-indonesia.png";
import jopex from "../assets/img/JOPEX.png";

export default function Projects() {
  return (
    <div id="projects" className="py-4 text-slate-700">
      <h1 className="text-2xl font-bold text-slate-100">Projects</h1>
      <p className="font-light text-gray-400">
        Here are some of my freelance project and professional project
      </p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectsCard
          name="SIASN - Sistem Informasi Aparatur Sipil Negara"
          issued="Badan Kepegawaian Negara"
          desc="Developed System Information for Government employees. Developed by Next Js, Redux, Tailwind and Ant Design"
          img={siasn}
          link="https://siasn.bkn.go.id/"
        />
        <ProjectsCard
          name="Website Ray White Indonesia"
          issued="Ray White Indonesia"
          desc="Developed website for Ray White Indonesia. Developed by Laravel and Bootstrap 5"
          img={rwi}
          link="https://www.raywhite.co.id/"
        />
        <ProjectsCard
          name="Website Jopex Indonesia"
          issued="Jopex Indonesia"
          desc="Freelance Project for Jopex Indonesia. Developed by Wordpress"
          img={jopex}
          link="https://www.jopex-indonesia.com/"
        />
      </div>
    </div>
  );
}
