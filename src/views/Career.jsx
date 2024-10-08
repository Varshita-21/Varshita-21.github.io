import React, { useContext, useState } from 'react';
import { ThemeContext } from "../themeProvider";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import '../Home.css'; // Import a separate CSS file for styles

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [expandedItem, setExpandedItem] = useState(null); // Track the expanded item
  const typeSchool = 'school';
  const typeWork = 'work';

  const timelineData = [
    {
      id: 0,
      date: 'May 2024 - Present',
      title: 'ML Researcher',
      subtitle: 'UW Madison, Wisconsin, USA',
      description: [
        'Developed a Deep Learning model for DNA sequence analysis using CHIP-Seq and ATAC-seq data, advancing cancer research.',
        'Uncovered key biological insights through exploratory analysis of genomic datasets, accelerating research timelines under the guidance of <a href="https://ramanathan.ece.wisc.edu/" target="_blank" rel="noopener noreferrer"><strong>Dr. Parmesh Ramanathan</strong></a>.'
      ],
      type: typeWork,
    },
    {
      id: 1,
      date: 'Aug 2023 - May 2025',
      title: 'MS in Data Engineering',
      subtitle: 'University of Wisconsin-Madison',
      description: ['Coursework: Distributed Systems, Big Data Systems, Database Systems, Data Modeling, Operating Systems, Optimization, Artificial Intelligence.'],
      type: typeSchool,
    },
    {
      id: 2,
      date: 'Sep 2022 - Aug 2023',
      title: 'Software Engineer',
      subtitle: 'Providence Global Center, India',
      description: [
        'Designed and implemented scalable data pipelines on Azure for the Trusana mental wellness platform, optimizing data processing with Azure Data Factory and SQL. Developed interactive Power BI dashboards and integrated machine learning algorithms to enhance data insights and visualizations.'
      ],
      type: typeWork,
    },
    {
      id: 3,
      date: 'Jan 2022 - Jul 2022',
      title: 'Data Engineer Intern',
      subtitle: 'Anheuser-Busch Inbev, India',
      description: ['Delivered KPI dashboards, enhancing decision-making by 70%. Led migration to Azure, cutting costs by $15,000/year and improving scalability. Managed Power BI dashboards and end-to-end data pipelines.'],
      type: typeWork,
    },
    {
      id: 4,
      date: 'Jul 2018 - Jul 2022',
      title: 'Bachelor of Technology in ECE',
      subtitle: 'Vellore Institute of Technology, India',
      description: ['Coursework: Data Structures and Algorithms, Object Oriented Programming, Machine Learning, Internet of Things, Data Analytics.'],
      type: typeSchool,
    },
  ];

  const toggleDescription = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null); // Collapse if the same item is clicked
    } else {
      setExpandedItem(id); // Expand the new item
    }
  };

  return (
    <div id="careers" className="vertical-timeline-container">
      <h2 className="text-5xl font-bold text-center my-career-header mb-8 mt-8">My Journey</h2>
      <VerticalTimeline>
  {timelineData.map((item) => (
    <VerticalTimelineElement
      key={item.id}
      date={item.date}
      iconStyle={{ background: item.type === 'work' ? '#00bfff' : '#e91e63' }}
      icon={item.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
      data-type={item.type} // Add data-type attribute for CSS styling
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
      
      {/* Display the description if the item is expanded */}
      {expandedItem === item.id && (
        <p 
          className="vertical-timeline-element-description" 
          dangerouslySetInnerHTML={{ __html: item.description.join(' ') }} // Use dangerouslySetInnerHTML to render HTML
        />
      )}

      {/* Button to toggle description */}
      <button 
        onClick={() => toggleDescription(item.id)} 
        className="cursor-pointer toggle-btn"
        style={{ 
          position: 'absolute', 
          bottom: '0px', 
          right: '10px', 
          fontSize: '14px', 
          padding: '5px 10px', 
          backgroundColor: 'transparent', 
          border: 'none', 
          color: '#7393B3' // Set the color of the text
        }}
      >
        {expandedItem === item.id ? "Hide Description" : "Show Description"}
      </button>

    </VerticalTimelineElement>
  ))}
</VerticalTimeline>
    </div>
  );
};

export default Home;
