"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience(){
    return (<div id="experience" className="flex flex-col items-center justify-center mt-32 md:mt-64 h-full">
        <div className="text-5xl font-bold">Experience</div>
        <ExperienceTabs/>
        </div>);
}

const experienceItems = {
    IGBMC2021:{
        jobTitle: "Software developer",
        duration: "September 2021 - Present",
        description: [
            "Lead the development of two fullstack applications for biological data management, integrating unit tests, containerization, and CI/CD.",
            "Coordinated UI design with a web agency, writing a functional specification and delivering a Figma prototype.",
            "Co-mentored two interns, providing training and integration into projects.",
            "Created RESTful APIs in Rust (Actix, Diesel, PostgreSQL) following OpenAPI, with a frontend in Next.js, and features like live updates using websockets, processing batches and email notifications",
            "Managed frontend (Storybook) and backend (Rustdoc) documentation to ensure consistency and accessibility."
        ]
    },
    Davidson: {
        jobTitle: "Software Engineer consultant working for Euro Information Presse",
        duration: "September 2019 - July 2021",
        description: [
            "Maintained and added new features such as Android/IOS In-App subscriptions to the user profiles and the orders of the Ebra Group's news websites such as \"Les Dernières Nouvelles d'Alsace\" or \"Le Progrès\" resulting in 1200 In-App subscriptions in the first 2 months.",
            "Added security features to the frontend like CSRF protection or reCAPTCHA."
        ]
    },
    IGBMC2018:{
        jobTitle: "Continuous Integration Intern",
        duration: "Summer 2018",
        description: ["Developed a Continuous Integration tool similar to TravisCI, in Crystal"]
    },

    IGBMC2017:{
        jobTitle: "Python Developer Intern",
        duration: "Summer 2017",
        description: ["Developed an application in Python to manage and visualize images acquired by their microscope."]
    },
}

function ExperienceTabs() {
    const [activeTab, setActiveTab] = useState<keyof typeof experienceItems>("IGBMC2021")
  
    const handleTabClick = (tab: keyof typeof experienceItems) => {
      setActiveTab(tab)
    }
  
    return (
      <div className="w-full max-w-3xl mx-auto h-100 mt-8">
        <div className="flex space-x-4 border-b mb-4">
          {Object.keys(experienceItems).map((key) => (
            <button
              key={key}
              onClick={() => handleTabClick(key as keyof typeof experienceItems)}
              className={`py-2 px-4 text-sm ${
                activeTab === key
                  ? "border-b-2 border-blue-400 text-blue-400 font-bold"
                  : " hover:text-blue-400"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
  
        <div>
          <h3 className="text-xl font-semibold">{experienceItems[activeTab].jobTitle}</h3>
          <p className="text-sm text-gray-500 mb-4">{experienceItems[activeTab].duration}</p>
          <motion.ul key={activeTab} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="list-disc pl-5 space-y-2">
            {experienceItems[activeTab].description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    )
  }