import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">John Developer.</h1>
          <h2 className="role">I build things for the web.</h2>
          <p className="description">
            I'm a software engineer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on building accessible, 
            human-centered products and dynamic web applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Check out my work <FiArrowRight />
            </a>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
