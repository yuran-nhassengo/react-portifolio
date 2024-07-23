import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar =() =>{
  
  
  const activeStyles = "text-yellow-DEFAULT font-bold";
  const inactiveStyles = "text-gray-dark";


  return (
    <>
    <nav className='space-x-4'>
        <NavLink to ={'/'} className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Home</NavLink>

        <NavLink to ={'/projects'} className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles}>Projects</NavLink>

        <NavLink to ={'/about'} className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles}>About</NavLink>

        <NavLink to ={'/resume'} className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles}>Resume</NavLink>

    </nav>
    </>
  )
}
