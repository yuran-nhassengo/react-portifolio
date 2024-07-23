import React from 'react'

export const NavBar =() =>{
  
  
  const activeStyles = "text-yellow-DEFAULT font-bold";
  const inactiveStyles = "text-gray-dark";


  return (
    <>
    <nav className='space-x-4'>
        <NavLink to ={'/'} className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Home</NavLink>

        <NavLink to ={'/portifolio'} className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles}>Projects</NavLink>

        <NavLink to ={'/servicos'} className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles}>About</NavLink>

        <NavLink to ={'/contactos'} className={({ isActive }) =>
          isActive ? activeStyles : inactiveStyles}>Resume</NavLink>

    </nav>
    </>
  )
}
