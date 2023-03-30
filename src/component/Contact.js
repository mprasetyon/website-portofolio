import React from "react";
import resume from "../assets/MUHAMMAD PRASETYO NUGROHO CV OKTOBER 2022.pdf";

export default function Contact() {
  return (
    <section className="dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
          Contact Me
        </h2>

        <a
          href="mailto:mprasetyon@gmail.com"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send email
        </a>
        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className=" ml-5 py-3 px-5 text-sm font-medium text-center text-blue-700 hover:text-white rounded-lg bg-white sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-white dark:focus:ring-blue-800"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
