import React from 'react'
import { Outlet } from 'react-router-dom'


import {Header} from "../components/header"
import {Footer} from "../components/footer"

export const About =() =>{
  return (
    <>
      <Header/>
      <main>
        About
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
