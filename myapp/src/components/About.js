import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 
    'TypeScript', 'HTML & CSS', 'Git & GitHub', 
    'TailwindCSS', 'Figma'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2018 when I decided to try editing 
              custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about 
              the web!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences for a variety 
              of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper glass-card">
              <div className="placeholder-avatar">
                 <span className="initials">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
