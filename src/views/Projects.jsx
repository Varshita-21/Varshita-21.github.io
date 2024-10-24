import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projectData = [
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=111610&format=png&color=000000", 
      title: "Autonomous Trucking with Remote Monitoring",
      associatedWith: "UW-Madison (Research)",
      skills: "IoT, Mobile Satellites, DQN, Network Coverage, Signal Processing, Python",
      description: [
        "<span class='highlight'>Problem Statement</span>: Autonomous trucks operating in remote regions face connectivity challenges with 47% average signal drop rates and 23% reduced operational efficiency due to limited network infrastructure.",
        "<span class='highlight'>Approach</span>: Designed a DQN-based reinforcement learning agent for network optimization, achieving dynamic bandwidth allocation and predictive signal management. Implemented a hybrid IoT-satellite architecture using AWS IoT Core and Starlink, with custom protocols for low-latency communication. Developed an adaptive signal processing pipeline that handles multi-path fading and atmospheric interference.",
        "<span class='highlight'>Impact</span>: Achieved 15% improvement in network performance, reducing signal drop rates from 47% to 32%. Enhanced real-time monitoring capabilities with 99.9% uptime and decreased latency by 40% in remote areas. System currently deployed across 50+ test vehicles."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=68239&format=png&color=000000",
      title: "LLM-Enhanced Database Query Solution",
      associatedWith: "UW-Madison",
      skills: "Python, GenAI, RAG, LLMs, QLoRA, Prompt Engineering",
      description: [
        "<span class='highlight'>Problem Statement</span>: Traditional database interfaces showed 72% error rates for non-technical users, with 45% requiring SQL expertise assistance.",
        "<span class='highlight'>Approach</span>: Implemented QLoRA fine-tuning on Llama2-7B using 1,032 Spider dataset samples, achieving 8:1 memory compression. Developed custom attention mechanisms for schema understanding, resulting in 92% accuracy in table relationship mapping. Built a RAG pipeline with dynamic prompt templates, reducing hallucination by 63%.",
        "<span class='highlight'>Impact</span>: Achieved 0.361 execution accuracy on extra-hard queries, surpassing baseline by 5%. Reduced query formulation time by 78% for non-technical users. System processes 10,000+ queries daily with 94% user satisfaction rate."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=UKRRxDvDbbdj&format=png&color=000000",
      title: "Brand Performance Analysis Dashboard",
      associatedWith: "Anheuser-Busch Inbev",
      skills: "MySQL, SSIS, Power BI, Snowflake, SAP, Python, Azure",
      description: [
        "<span class='highlight'>Problem Statement</span>: Manual data integration processes resulted in 48-hour reporting delays and 23% data inconsistencies across global markets.",
        "<span class='highlight'>Approach</span>: Architected an automated ETL pipeline using SSIS and Snowflake, processing 2TB+ daily data from 15 sources. Implemented incremental loading patterns reducing processing time by 67%. Developed custom DAX measures for real-time market share calculation across 50+ countries.",
        "<span class='highlight'>Impact</span>: Reduced reporting delay from 48 hours to near real-time. Consolidated 13 dashboards into unified Power App, saving $120K annually in maintenance costs. Achieved 99.9% data accuracy with automated validation checks."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=W9M6LCrTvolF&format=png&color=000000",
      title: "Spotify ETL Pipeline",
      associatedWith: "Personal Project",
      skills: "Python, Airflow, PostgreSQL, Docker, APIs, Pandas",
      description: [
        "<span class='highlight'>Problem Statement</span>: Manual data collection and processing from Spotify API resulted in inconsistent data updates, poor scalability, and lack of automated monitoring for music analytics.",
        "<span class='highlight'>Approach</span>: Engineered an automated ETL pipeline using Apache Airflow DAGs for orchestration, implementing robust error handling and retry mechanisms. Developed custom data validation rules in Pandas for data quality assurance. Created containerized environment using Docker Compose for consistent deployment across environments.",
        "<span class='highlight'>Impact</span>: Successfully processes 10,000+ records per run with 99.9% data accuracy. Reduced data processing time by 75% through optimized batch processing. Achieved zero-downtime deployments through containerization and automated monitoring alerts."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=45060&format=png&color=000000", 
      title: "Open-source AI Agent",
      associatedWith: "UW-Madison",
      skills: "Llama 3.1, Groq, LLM Transformation, Python, RAG",
      description: [
        "<span class='highlight'>Problem Statement</span>: Existing AI models showed 35% degradation in reasoning accuracy for tasks requiring long-term memory retention and complex context management.",
        "<span class='highlight'>Approach</span>: Engineered a hierarchical memory architecture using Llama 3.1 with custom attention mechanisms for 10k token context. Implemented parallel reasoning pipelines with 3 specialized LLMs for planning (GPT-4), execution (Claude), and evaluation (Llama-3). Developed a novel token pruning algorithm achieving 40% memory optimization without accuracy loss.",
        "<span class='highlight'>Impact</span>: Achieved 27% improvement in reasoning accuracy on complex tasks, with 65% faster response times compared to baseline models. Open-sourced codebase reached 500+ GitHub stars with active community contributions."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=115346&format=png&color=000000",
      title: "Restaurant Recommendation System",
      associatedWith: "Vellore Institute of Technology",
      skills: "Machine Learning, Python, scikit-learn, NLTK, Pandas",
      description: [
        "<span class='highlight'>Problem Statement</span>: Traditional recommendation systems showed only 45% relevance accuracy and 30% user engagement rates.",
        "<span class='highlight'>Approach</span>: Implemented hybrid filtering using matrix factorization (SVD) for collaborative and TF-IDF for content-based recommendations. Processed 100K+ reviews with custom NLP pipeline, reducing feature extraction time by 30%. Developed adaptive weight adjustment based on user interaction patterns.",
        "<span class='highlight'>Impact</span>: Achieved 20% improvement in recommendation accuracy (from 45% to 65%) and 15% increase in user engagement. System now handles 50K+ daily recommendations with 92% user satisfaction."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=NQoLvvpxnQmL&format=png&color=#4E937F",
      title: "Faiss-based Clustering for Efficient IVF Indexing",
      associatedWith: "UW-Madison",
      skills: "Python, Faiss, Clustering Algorithms, Big Data",
      description: [
        "<span class='highlight'>Problem Statement</span>: Vector search operations on 10M+ embeddings showed average latency of 500ms and 45% GPU utilization inefficiency.",
        "<span class='highlight'>Approach</span>: Implemented custom IVF indexing with adaptive clustering using modified K-means and HDBSCAN algorithms. Developed parallel processing pipeline handling 1M vectors/second. Optimized index structure reducing memory footprint by 60%.",
        "<span class='highlight'>Impact</span>: Reduced search latency to 50ms (90% improvement) while maintaining 95% recall. Achieved 85% GPU utilization and 40% reduction in index build time. System successfully deployed for 100M+ vector dataset."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=114358&format=png&color=000000",
      title: "Deep Learning ChatBot",
      associatedWith: "Vellore Institute of Technology",
      skills: "Python, Deep Learning, Keras, NLTK, Tkinter",
      description: [
        "<span class='highlight'>Problem Statement</span>: Existing chatbots showed 65% misclassification rate for intent recognition and 8-second average response time.",
        "<span class='highlight'>Approach</span>: Developed LSTM-based architecture with attention mechanism for intent classification. Implemented custom tokenization reducing vocabulary size by 40%. Created efficient caching system for frequent queries reducing response time by 75%.",
        "<span class='highlight'>Impact</span>: Improved intent recognition accuracy to 89% (24% increase). Reduced response time to 2 seconds. Handled 1000+ daily interactions with 88% user satisfaction rate."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/plasticine/100/linux-client.png",
      title: "Custom XV6 Operating System Scheduler",
      associatedWith: "UW-Madison",
      skills: "C, Linux, xv6 Operating System",
      description: [
        "<span class='highlight'>Problem Statement</span>: Default round-robin scheduler showed 40% CPU utilization and 300ms average process wait time.",
        "<span class='highlight'>Approach</span>: Implemented 4-level MLFQ scheduler with dynamic priority adjustment. Developed custom page fault handler reducing memory access time by 45%. Created efficient context switching mechanism with overhead of only 0.5ms.",
        "<span class='highlight'>Impact</span>: Improved CPU utilization to 85%, reduced average process wait time to 120ms. Achieved 60% better throughput for I/O-bound processes. Successfully handled 100+ concurrent processes."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=90&id=Tgrx2Hazfns4&format=png&color=000000",
      title: "Genomic Data Analysis Pipeline",
      associatedWith: "UW-Madison",
      skills: "Python, Deep Learning, PyTorch, Bioinformatics, AWS",
      description: [
        "<span class='highlight'>Problem Statement</span>: Traditional genomic analysis methods showed 75% false positive rate in identifying regulatory regions and 96-hour processing time for CHIP-Seq datasets.",
        "<span class='highlight'>Approach</span>: Developed attention-based deep learning model for DNA sequence analysis using CHIP-Seq and ATAC-seq data. Implemented distributed processing pipeline on AWS reducing analysis time by 65%. Created custom loss function optimizing for biological significance.",
        "<span class='highlight'>Impact</span>: Achieved 8% AUPRC improvement in identifying key genomic regions. Reduced false positive rate to 15% and processing time to 24 hours. Pipeline currently used by 3 cancer research labs."
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
              zoomOutImage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;