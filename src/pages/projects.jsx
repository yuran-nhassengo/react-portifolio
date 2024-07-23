import React from 'react'
import { Outlet } from 'react-router-dom'


import {Header} from "../components/header"
import {Footer} from "../components/footer"

export const Projects =() =>{
  return (
    <>
      <Header/>
      <main>
        Projects
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
