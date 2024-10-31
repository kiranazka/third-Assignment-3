import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
          <p className='text-black-400  m-9'>
            I have a Solid Foundation in Web Development, HTML, CSS, and JavaScript. My Experience Extends To Using Frameworks Like React & Next.js To Create Dynamic & User-Friendly Applications. I'M Also Proficient In Tailwind CSS For Efficient Styling & Design. With a Passion For Learning, I Stay Updated On The Latest Technologies To Enhance My Skills Set And Contribute Effectively to Projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2>TypeScript</h2>
              <h2>React.Js</h2>
              <h2>Next.Js</h2>
            </div>
            <div className='space-y-2'>
              <h2>Tailwind</h2>
              <h2>CSS</h2>
              <h2>Node.Js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
