import React, { useState } from 'react'

import { Link } from 'react-scroll';
import { SearchComponent } from './search';

export const Header =() =>{

    const [ isMenuOpen,setIsMenuOpen] = useState(false)

  return (
    
      
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-emerald-400">
          <header className="flex justify-between items-center text-black py-6 px-8
            md:px-32 bg-white drop-shadow-md
          ">
            <a href="#">
              <img src="#" alt="Logo" className="w-52 hover:scale-105 transition-all" />
            </a>

            <div className="hidden xl:flex items-center gap-12 font-semibold text-base">
              <Link className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">Home</Link>
              <Link className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">About</Link>
              <Link className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">Skills</Link>
              <Link className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">projects</Link>
              <Link className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">Contact</Link>

            </div>

            <div className="relative hidden md:flex items-center justify-center gap-3">
              {/* <i className="bx bx-search absolute left-3 text-gray-500"></i>
              <input type="text" placeholder="Search...."
              className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" /> */}
              <SearchComponent/>
            </div>



            <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

            <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg
              transform transition-transform ${isMenuOpen ? "opacity-100":"opacity-0"}`}
              style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>

                <Link className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Home</Link>
                <Link className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">About</Link>
                <Link className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Skills</Link>
                <Link className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Projects</Link>
                <Link className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Contact</Link>
              </div>
          </header>
        </div>
     
    )
  
}
