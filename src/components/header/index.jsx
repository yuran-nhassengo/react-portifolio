import React from 'react'
import { NavBar } from './navbar';

export const Header =() =>{
  return (
    
      
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-emerald-400">
          <header className="flex justify-between items-center text-black py-6 px-8
            md:px-32 bg-white drop-shadow-md
          ">
            <a href="#">
              <img src="#" alt="Logo" className="w-52 hover:scale-105 transition-all" />
            </a>

            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
              <li className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">Home</li>
              <li className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">About</li>
              <li className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">Skills</li>
              <li className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">projects</li>
              <li className="p-3 hover:bg-sky-400 hover:text-white rounded transition-all cursor-pointer">Contact</li>

            </ul>

            <div className="relative hidden md:flex items-center justify-center gap-3">
              <i className="bx bx-search absolute left-3 text-gray-500"></i>
              <input type="text" placeholder="Search...."
              className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" />
            </div>

            <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer"></i>
          </header>
        </div>
     
    )
  
}
