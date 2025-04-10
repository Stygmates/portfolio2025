"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Education(){
    let [active, setActive] = useState("igbmc");
    let buttonBase = "border-blue-400 p-4";
    return (<div id="education" className="flex flex-col items-center justify-center mt-32 md:mt-64 h-full">
        <div className="text-5xl font-bold">Education</div>
        <EducationTabs/>
        </div>);
}

const educationItems = {
    PMMOOC:{
        jobTitle: "Project Management MOOC",
        duration: "Mai 2020",
        description: [
            "MOOC presenting the different concepts involved in the management of a project, such as the stakeholders, the risks and the opportunities that arise when managing a project"
        ]
    },
    Master: {
        jobTitle: "Master degree in Computer Sciences",
        duration: "September 2019 - July 2021",
        description: "Master's degree specialized in Image Processing"
    },
    Bachelor:{
        jobTitle: "Bachelor's degree in Computer Sciences",
        duration: "2012-2016",
        description: "General Computer Science degree with a focus on software development and algorithms"
    },
}

function EducationTabs() {
    const [activeTab, setActiveTab] = useState<keyof typeof educationItems>("Master")
  
    const handleTabClick = (tab: keyof typeof educationItems) => {
      setActiveTab(tab)
    }
  
    return (
      <div className="w-full max-w-3xl mx-auto h-80 mt-8">
        <div className="flex space-x-4 border-b mb-4">
          {Object.keys(educationItems).map((key) => (
            <button
              key={key}
              onClick={() => handleTabClick(key as keyof typeof educationItems)}
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
          <h3 className="text-xl font-semibold">{educationItems[activeTab].jobTitle}</h3>
          <p className="text-sm text-gray-500 mb-4">{educationItems[activeTab].duration}</p>
          <motion.div key={activeTab} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="list-disc space-y-2">
            {educationItems[activeTab].description}
          </motion.div>
        </div>
      </div>
    )
  }