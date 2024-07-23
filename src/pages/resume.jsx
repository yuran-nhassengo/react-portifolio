import React from 'react'
import { Outlet } from 'react-router-dom'


import {Header} from "../components/header"
import {Footer} from "../components/footer"

export const Resume =() =>{
  return (
    <>
    <Header/>
    <main>
      Resume
    <Outlet/>
    </main>
    <Footer/>
  </>
  )
}
