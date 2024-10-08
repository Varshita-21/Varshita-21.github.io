import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaCloud, FaPuzzlePiece, FaCubes, FaChartBar } from 'react-icons/fa';
import varshitaImage from '../assets/varshita.jpg'; // Import the image

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const legend = {
    language: { color: "bg-blue-100", label: "Programming Languages", icon: <FaCode /> },
    database: { color: "bg-green-100", label: "Databases", icon: <FaDatabase /> },
    tool_or_framework: { color: "bg-yellow-100", label: "Tools & Frameworks", icon: <FaTools /> },
    cloud: { color: "bg-pink-100", label: "Cloud Platforms", icon: <FaCloud /> },
    library: { color: "bg-teal-100", label: "Libraries", icon: <FaCubes /> },
    visualization: { color: "bg-orange-100", label: "Visualization Tools", icon: <FaChartBar /> },
  };
  
  
  const getTypeClass = (type) => {
    return legend[type]?.color || "bg-gray-200";
  };

  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-start mt-12">
          {/* Text Container */}
          <div className="flex-1 md:w-2/3 md:mr-4">
            <motion.div>
              <h4 className="text-3xl font-semibold text-blue-500">
                Bio
              </h4>
              <div
                className={
                  darkMode
                    ? "mt-4 text-xl text-justify text-gray-500"
                    : "mt-4 text-xl text-justify text-white"
                }
              >
                <p className="mb-4">A Data Engineer with a passion for storytelling. I love diving into complex challenges and finding elegant, efficient solutions.</p>
                <p className="mb-4">Currently pursuing a Master’s in Data Engineering from the University of Wisconsin-Madison, I’ve had the opportunity to work on a range of projects that include data analysis, visualization, machine learning, IoT, and Android app development.</p>
                <p>When I'm not deep in data, you might find me cycling through scenic trails, hiking new paths, or catching up on the latest TV shows and movies. I also have a hobby of pretending to be a high-end photographer, capturing the beauty of sunsets and striking skies with my phone. Whether it's solving complex problems or enjoying some downtime, I’m always up for a new adventure.</p>
              </div>
            </motion.div>
          </div>

          {/* Image Container */}
          <div className="flex-1 md:w-1/3 flex justify-end mt-4 md:mt-0">
            <img
              src={varshitaImage}
              alt="Varshita"
              className="w-80 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <motion.div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p
            className={
              darkMode
                ? "mt-4 text-xl text-justify text-gray-500"
                : "mt-4 text-xl text-justify text-white"
            }
          >
          </p>
        </motion.div>
        <div className="mt-8">
          <div className="flex flex-wrap mt-2">
            {Object.keys(legend).map((key) => (
              <div key={key} className="flex items-center mr-4 mb-2">
                <span className={`w-4 h-4 inline-block ${legend[key].color} mr-2 rounded-full`}></span>
                <span className="mr-2">{legend[key].icon}</span>
                <span className={darkMode ? "text-gray-500" : "text-white"}>{legend[key].label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div className="flex flex-wrap mt-8 justify-between">
          {techStack.map((el, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
              className={`py-2 px-4 ${getTypeClass(el.type)} md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40 shadow-lg`}
            >
              <img alt="" src={el.link} className="w-12" />
              <h4 className="text-md ml-4">{el.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
