import React from 'react'

// const Footer = () => {
//   return (
//     <div className='h-[100px]bg-transparent  border border-accent mt-16 py-6 text-center  '>
//         All rights reserved 2024.
      
//     </div>
//   )
// }

// export default Footer
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 m-top-8" >
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">Azka Kiran</p>
          <p>Student At GIAIC | Passionate About AI, Web 3.0, & The Metaverse</p>
          
          <div className="mt-4 space-x-4">
            <a href="https://github.com/kiranazka/potfolio.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/kiranazka" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="hover:underline">
              Email
            </a>
          </div>
          
          <p className="mt-4 text-black-600 text-sm">
            © {new Date().getFullYear()} Azka Kiran. All Rights Reserved.
          </p>
        </div>
      </footer>
    )
  }
  export default Footer