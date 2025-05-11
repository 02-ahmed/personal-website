import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaTimes,
  FaLanguage,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMui,
  SiNextdotjs,
  SiGooglegemini,
  SiFirebase,
  SiTypescript,
  SiChakraui,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import studymate from "../assets/images/studymate.png";
import chatto from "../assets/images/chatto.png";
import movie from "../assets/images/movie.png";
import aduane from "../assets/images/aduane.png";

interface Tag {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: Tag[];
  liveLink?: string;
  githubLink: string;
  category: string;
}

const Works = () => {
  AOS.init();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when dialog is open
  useEffect(() => {
    if (selectedProject) {
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: "StudyMate",
      description:
        "AI-powered study companion for creating flashcards and organizing study materials",
      longDescription:
        "An all-in-one study tool that helps students create flashcards, generate summaries, and organize their study materials efficiently using Gemini AI. Features secure authentication with Clerk and cloud storage with Firebase.",
      image: studymate,
      tags: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Material UI", icon: <SiMui /> },
        { name: "Gemini AI", icon: <SiGooglegemini /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
      liveLink: "https://studymate.techloft.org/",
      githubLink: "https://github.com/02-ahmed/studymate",
      category: "Web App",
    },
    {
      id: 2,
      title: "Chatto",
      description: "Multilingual chatbot with support for Ghanaian languages",
      longDescription:
        "Chatto is an intelligent chatbot built with Google's Gemini API that uniquely supports local Ghanaian languages through integration with Ghana NLP's API. Users can interact with the AI in languages like Twi, Ga, Ewe, and Hausa, making technology more accessible to local communities.",
      image: chatto,
      tags: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Material UI", icon: <SiMui /> },
        { name: "Gemini AI", icon: <SiGooglegemini /> },
        { name: "Ghana NLP", icon: <FaLanguage /> },
      ],
      liveLink: "https://chatto-ai.techloft.org",
      githubLink: "https://github.com/02-ahmed/ai-support-assistant",
      category: "Web App",
    },
    {
      id: 3,
      title: "Movie Discovery",
      description:
        "Movie recommendation app with advanced filtering capabilities",
      longDescription:
        "A comprehensive movie discovery platform that helps users explore and find new movies based on various criteria including genres, release dates, ratings, popularity, and revenue. Features an intuitive interface for filtering and sorting movies, making it easy to discover unconventional and interesting films.",
      image: movie,
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Chakra UI", icon: <SiChakraui /> },
      ],
      liveLink: "https://02movies-discovery.vercel.app",
      githubLink: "https://github.com/02-ahmed/Movie-Discovery",
      category: "Web App",
    },
    {
      id: 4,
      title: "Aduane Info",
      description: "Nutritional information finder for foods and drinks",
      longDescription:
        "A comprehensive web application that helps users discover detailed nutritional information about various foods and beverages. Users can easily search and find nutritional facts, making it simpler to make informed dietary choices and maintain a healthy lifestyle.",
      image: aduane,
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
      liveLink: "https://aduane-info.netlify.app",
      githubLink: "https://github.com/02-ahmed/aduane-info",
      category: "Web App",
    },
  ];

  return (
    <section id="works" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-3">
              <span className="emoji me-2">🚀</span>
              Featured Projects
            </h2>
            <p className="lead text-secondary mb-5">
              A showcase of my recent work and side projects
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="project-card h-100">
                <div
                  className="project-preview cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="h5 mb-2">{project.title}</h3>
                    <p className="text-secondary small mb-2">
                      {project.description}
                    </p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="badge bg-light text-dark me-1 mb-1"
                        >
                          {tag.icon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Visit Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="project-dialog-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className="project-dialog-header">
                <h2>{selectedProject.title}</h2>
                <div className="tech-stack">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="tech-badge">
                      {tag.icon}
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-dialog-body">
                <div className="project-dialog-image">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid"
                  />
                </div>

                <div className="project-dialog-content">
                  <div className="project-section">
                    <h3>Overview</h3>
                    <p>{selectedProject.description}</p>
                  </div>

                  <div className="project-section">
                    <h3>Key Features</h3>
                    <p>{selectedProject.longDescription}</p>
                  </div>

                  <div className="project-dialog-actions">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button github"
                    >
                      <FaGithub /> View Code
                    </a>
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button demo"
                      >
                        <FaExternalLinkAlt /> Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;
