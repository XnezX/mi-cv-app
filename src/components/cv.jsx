import React, { useState } from 'react';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

// Importar las imágenes desde assets
import cssImage from '../assets/css-3.svg';
import gitImage from '../assets/git.svg';
import htmlImage from '../assets/html-1.svg';
import jsImage from '../assets/logo-javascript.svg';
import reactImage from '../assets/react-2.svg';

const CV = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleSection = (setter) => {
    setter((prev) => !prev);
  };

  const isAnySectionVisible = showExperience || showSkills || showEducation || showContact;

  return (
    <div className={`App ${isAnySectionVisible ? 'inverted' : ''}`}>
      <h1>Daniel Molina</h1>
      <h2>Ingeniero en Desarrollo de Software</h2>

      <div className="button-container">
        <div className="button-section">
          <button onClick={() => toggleSection(setShowExperience)}>Experiencia</button>
          <section className={showExperience ? 'show' : ''}>
            <Experience />
          </section>
        </div>

        <div className="button-section">
          <button onClick={() => toggleSection(setShowSkills)}>Habilidades</button>
          <section className={showSkills ? 'show' : ''}>
            <Skills />
          </section>
        </div>

        <div className="button-section">
          <button onClick={() => toggleSection(setShowEducation)}>Educación</button>
          <section className={showEducation ? 'show' : ''}>
            <Education />
          </section>
        </div>

        <div className="button-section">
          <button onClick={() => toggleSection(setShowContact)}>Contacto</button>
          <section className={showContact ? 'show' : ''}>
            <Contact />
          </section>
        </div>
      </div>

      {/* Sección separada para los lenguajes */}
      <div className="languages-container">
        <h3>Experiencia en:</h3>
        <div className="languages">
          <img src={cssImage} alt="CSS" className="language-image" />
          <img src={gitImage} alt="Git" className="language-image" />
          <img src={htmlImage} alt="HTML" className="language-image" />
          <img src={jsImage} alt="JavaScript" className="language-image" />
          <img src={reactImage} alt="React" className="language-image" />
        </div>
      </div>
    </div>
  );
};

export default CV;






