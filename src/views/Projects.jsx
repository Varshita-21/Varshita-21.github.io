import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projectData = [
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=111610&format=png&color=000000", 
      title: "Autonomous Trucking with Remote Monitoring",
      associatedWith: "Current Research",
      skills: "IoT, Mobile Satellites, Network Coverage, Signal Processing, Reinforcement Learning, Python",
      description: [
        "<span class='highlight'>Problem Statement</span>: Ensuring reliable connectivity for autonomous trucks operating in remote and mountainous regions is challenging due to limited network infrastructure, which impacts real-time monitoring, communication, and operational efficiency.",
        "<span class='highlight'>Approach</span>: Developing a solution to integrate IoT technology with mobile satellite networks to provide continuous remote monitoring and control of autonomous trucks. Leveraging reinforcement learning algorithms to dynamically manage workloads, optimize route planning, and enhance decision-making based on real-time data and environmental conditions.",
        "<span class='highlight'>Impact</span>: Enhances the operational reliability and safety of autonomous trucks by ensuring seamless remote monitoring and control capabilities. Reinforcement learning improves workload management and operational efficiency, making autonomous trucking operations more effective even in areas with limited or no network coverage."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=45060&format=png&color=000000", 
      title: "Open-source AI Agent",
      associatedWith: "UW-Madison",
      skills: "Llama 3.1, Groq, LLM Transformation, Python",
      description: [
        "<span class='highlight'>Problem Statement</span>: Modern AI models often struggle with managing both short-term and long-term context effectively, which limits their reasoning capabilities in complex tasks.",
        "<span class='highlight'>Approach</span>: Developed an open-source AI agent utilizing Llama 3.1 and Groq with over 3 LLM transformation features to manage a context window of 10,000 tokens for both short-term and long-term memory. Constructed a full agent workflow including a planner, executor, and evaluator to emulate the reasoning processes of OpenAI's new model, Strawberry.",
        "<span class='highlight'>Impact</span>: Enhanced AI reasoning capabilities by integrating advanced memory management, allowing the agent to handle complex queries and maintain context over extended interactions. This development contributes to more robust and flexible AI systems capable of sophisticated reasoning and decision-making."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=68239&format=png&color=000000",
      title: "LLM-Enhanced Database Query Solution",
      associatedWith: "UW-Madison",
      skills: "Python, GenAI, RAG, LLMs, Prompt Engineering",
      description: [
        "<span class='highlight'>Problem Statement</span>: Organizations often face challenges with accessing data stored in databases due to the need for SQL knowledge, limiting access to technical users.",
        "<span class='highlight'>Approach</span>: Developed a Natural Language Interface (NLI) system using LLM to translate user queries into SQL. Fine-tuned Llama2-7B with QLoRA on the Spider dataset(open source, contains 1032 ), improving SQL query accuracy by 5% and achieving a 0.361 execution accuracy on extra-hard queries, surpassing baseline models by 5% in execution accuracy and 0.5% in exact match.",
        "Implemented LangChain agents to streamline the solution, integrated authentication and chat history, and deployed on Azure Web Apps. Utilized RAG concepts and limited context from the DB schema to ensure privacy and scalability.",
        "<span class='highlight'>Impact</span>: Empowers non-technical users to query databases easily, boosting productivity and decision-making while ensuring secure and scalable data access."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=UKRRxDvDbbdj&format=png&color=000000",
      title: "Brand Performance Analysis Dashboard",
      associatedWith: "Anheuser-Busch Inbev",
      skills: "MySQL, SSIS, Power BI, Snowflake, SAP, Python, Azure",
      description: [
        "<span class='highlight'>Problem Statement</span>: Analyzing brand health and market share in real-time was challenging due to disparate data sources and the need for dynamic KPI analysis.",
        "<span class='highlight'>Approach</span>: Developed interactive dashboards using Power BI and integrated data from SAP and internal sources. Created multi-dimensional visualizations with slicers and filters for in-depth brand performance analysis, including premium brand analysis and global market trends.",
        "Unified Data Integration: Utilized SSIS and Snowflake to streamline data integration, ensuring up-to-date and accurate insights.",
        "<span class='highlight'>Impact</span>: Enhanced decision-making by providing user-friendly, regularly updated dashboards. Contributed to a project consolidating 13 dashboards into a unified Power App, improving data accessibility and uniformity."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=115346&format=png&color=000000",
      title: "Restaurant Recommendation System",
      associatedWith: "Vellore Institute of Technology",
      skills: "Machine Learning, Python, scikit-learn, NLTK, Pandas",
      description: [
        "<span class='highlight'>Approach</span>: Developed a recommendation system using both collaborative and content-based filtering methods, resulting in a 20% improvement in recommendation accuracy and a 15% increase in user engagement.",
        "Data Processing: Processed a dataset of over 100,000 reviews and implemented TF-IDF feature extraction to optimize performance. Reduced processing time by 30% and enhanced system efficiency.",
        "<span class='highlight'>Impact</span>: Improved user satisfaction and engagement by providing more accurate and relevant restaurant recommendations."
      ]
    },
    {
      "url": "",
      imgSrc: "https://img.icons8.com/?size=100&id=NQoLvvpxnQmL&format=png&color=#4E937F",
      title: "Faiss-based Clustering for Efficient IVF Indexing",
      associatedWith: "UW-Madison",
      skills: "Python, Faiss, Clustering Algorithms, Big Data",
      description: [
        "<span class='highlight'>Problem Statement</span>: Managing high-dimensional vector embeddings in LLMs and Generative AI can lead to inefficiencies in search and high computational costs. Traditional methods often struggle with scalability and performance.",
        "<span class='highlight'>Approach</span>: Implemented and evaluated clustering algorithms (K-means variants, DBSCAN, CluStream, STREAM) using Faiss for optimized Inverted File Indexing. Benchmarked based on index build time, search efficiency, and cluster balance.",
        "<span class='highlight'>Impact</span>: Improved search efficiency and retrieval speed for large-scale vector data, enabling scalable and accurate solutions for high-dimensional applications."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=114358&format=png&color=000000",
      title: "Deep Learning ChatBot",
      associatedWith: "Vellore Institute of Technology",
      skills: "Python, Deep Learning, Keras, NLTK, Tkinter",
      description: [
        "<span class='highlight'>Problem Statement</span>: Many personal assistant chatbots lacked natural language understanding and user-friendly interfaces, leading to ineffective interactions and limited user engagement.",
        "<span class='highlight'>Approach</span>: Developed a Python-based personal assistant chatbot with natural language understanding using Keras, allowing for sophisticated interactions and responses.",
        "User Interface: Implemented a Tkinter-based graphical interface for user interaction, enhancing usability and engagement.",
        "Text Processing: Utilized NLTK for text processing and pattern recognition in user queries, improving the chatbot's ability to understand and respond to diverse inputs.",
        "Data Management: Managed data with JSON for user intent recognition and appropriate responses, ensuring accurate and contextually relevant interactions.",
        "<span class='highlight'>Exposure</span>: Python, Deep Learning, Keras."
      ]
    },
    {
      "url": "",
      imgSrc: "https://img.icons8.com/plasticine/100/linux-client.png",
      title: "Custom XV6 Operating System Scheduler",
      associatedWith: "UW-Madison",
      skills: "C, Linux, xv6 Operating System",
      description: [
        "<span class='highlight'>Problem Statement</span>: The default scheduler in the xv6 operating system lacked advanced scheduling features, impacting system performance and responsiveness under varying loads.",
        "<span class='highlight'>Approach</span>: Developed a custom Multi-Level Feedback Queue (MLFQ) scheduler for the xv6 operating system, enhancing process scheduling efficiency and system responsiveness.",
        "Memory Management: Implemented simplified mmap/munmap system calls in xv6, gaining hands-on experience with memory layout and optimizing page fault handling for improved memory management.",
        "System Calls and Context Switching: Proficiently managed context switches and introduced strategically designed system calls to dynamically modify process states, optimizing system performance.",
        "<span class='highlight'>Exposure</span>: C, Linux, xv6 Operating System."
      ]
    }
  ];

  return (
    <div id="projects" className="bg-pink-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Project Gallery</h2>
        <div className="mt-8 flex flex-wrap -mx-4">
          {projectData.map((project, index) => (
            <Card
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              associatedWith={project.associatedWith}
              skills={project.skills}
              description={project.description}
              zoomOutImage={true} // Apply zoom out effect to all cards
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;