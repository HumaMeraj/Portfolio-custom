import React from 'react';
import '../app/styles/skills.css';

const Skills = () => {
  return (
        <div id='skills' className='skills-container'>
        <div className='skills-grid '>
          <div data-aos="zoom-in-up"className='skills-left'>
            <h2 className='skills-heading'>Competencies I work with </h2>
            <p className='skills-text'>
             I have a solid foundation in web development,specializing in HTML,CSS and Java Script,I am also proficient in Tailwind CSS for efficient styling and design.With a passion of learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to project.

            </p>
          </div>
          <div>
            <div className='skills-right'>
              <div className='skills-icon-grid'>
               <div className='skills-space'>
                <h2 data-aos="zoom-in-up">TypeScript</h2>
                <h2 data-aos="zoom-in-up">React.Js</h2>
                <h2 data-aos="zoom-in-up">Next.Js</h2>
              </div>
              <div className='skills-space'>
                <h2 data-aos="zoom-in-up">Tailwind</h2>
                <h2 data-aos="zoom-in-up">CSS</h2>
                <h2 data-aos="zoom-in-up">Node.Js</h2>
                </div>
              </div>
            </div>

          </div>
         </div>  
         </div>
  ); 
};

export default Skills;