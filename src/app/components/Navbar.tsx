import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Azka kiran </div>
         <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><a href='#Hero'>Home</a></li>
            <li className='menuLink'><a href='#About'>About</a></li>
            <li className='menuLink'><a href='#Project'>Project</a></li>
            <li className='menuLink'><a href='#Skills'>Skills</a></li>
            <li className='menuLink'><a href='#Contect'>Contect</a></li>
         </ul>
       
      
       
         
        </div>
      
    </div>
  )
}

export default Navbar;
