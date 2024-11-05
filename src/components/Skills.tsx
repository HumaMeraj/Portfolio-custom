import React from 'react'

const Skills = () => {
  return (
        <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
          <div data-aos="zoom-in-up">
            <h2 className='text-4xl md:text-4xl'>Competencies I work with </h2>
            <p className='text-neutral-300 pt-2'>
             I have a solid foundation in web development,specializing in HTML,CSS and Java Script,I'm also proficient in Tailwind CSS for efficient styling and design.With a passion of learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to project.

            </p>
          </div>
          <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-2xl'>
              <div className='space-y-2'>
                <h2 data-aos="zoom-in-up">TypeScript</h2>
                <h2 data-aos="zoom-in-up">React.Js</h2>
                <h2 data-aos="zoom-in-up">Next.Js</h2>
              </div>
              <div className='space-y-2'>
                <h2 data-aos="zoom-in-up">Tailwind</h2>
                <h2 data-aos="zoom-in-up">CSS</h2>
                <h2 data-aos="zoom-in-up">Node.Js</h2>
              </div>
            </div>

          </div>
         </div>  
         </div>
  )  
}

export default Skills