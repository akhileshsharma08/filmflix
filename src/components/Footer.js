import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillGithub,AiFillInstagram,AiFillFacebook,AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <footer className="text-white body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-white">
       
        <span className="ml-3 text-xl"><img src='/img/logo.png' alt='filmflix logo ' className='h-10 w-15'/></span>

      </Link>
      <p className="mt-2 text-sm text-white">Movie Website Made by TMDB API.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10 flex flex-col">
        <Link to="/" className="mb-1 hover:text-red-400">Home</Link>
      <Link to="/popular" className="mb-1 hover:text-red-400">Popular</Link>
      <Link to="/trending" className="mb-1 hover:text-red-400">Trending</Link>
      <Link to="shows" className="mb-1 hover:text-red-400">Shows</Link>
      <Link to="upcoming" className="mb-1 hover:text-red-400">Upcoming</Link>
        </nav>
      </div>
     
  </div>
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 ">
      <h4 className="text-white text-sm text-center sm:text-left mb-2">© 20223 Akhilesh Sharma</h4><br />
      <div className="iconsbox flex flex-wrap justify-center items-center mt-1">
        <h3 className='text-xl'><Link to={'#'}><AiFillInstagram className='text-lg'/></Link></h3>
        <h3 className='text-xl'><Link to={'#'}><AiFillFacebook className='text-lg'/></Link></h3>
        <h3 className='text-xl'><Link to={'#'}><AiFillGithub className='text-lg'/></Link></h3>
        <h3 className='text-xl'><Link to={'#'}><AiOutlineMail className='text-lg'/></Link></h3>
      </div>
      
    </div>
  </div>
  </div>
</footer>
    </>
  )
}

export default Footer
