import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-socials md-show">
          <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter /></a>
        </div>
        <p>Built with React & Vanilla CSS.</p>
        <p>&copy; {new Date().getFullYear()} John Developer.</p>
      </div>
    </footer>
  );
};

export default Footer;
