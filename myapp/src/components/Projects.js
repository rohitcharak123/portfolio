import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and an admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      external: '#'
    },
    {
      title: 'Task Management App',
      description: 'A beautiful and responsive task management application. Allows users to create boards, lists, and cards to organize their workflow effectively.',
      tech: ['React', 'Firebase', 'TailwindCSS'],
      github: '#',
      external: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard that provides forecasts, historical data, and interactive maps using a third-party weather API.',
      tech: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
      github: '#',
      external: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">Some Things I've Built</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card glass-card" key={index}>
              <div className="project-top">
                <div className="folder-icon">📁</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                  <a href={project.external} target="_blank" rel="noreferrer"><FiExternalLink /></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
