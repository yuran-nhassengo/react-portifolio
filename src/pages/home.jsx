import React from 'react'
import { Outlet } from 'react-router-dom'

import {Header} from "../components/header"
import {Footer} from "../components/footer"

export const Home =() =>{
  return (
    <>
    <Header/>
    <main>
      Home
    <Outlet/>
    </main>
    <Footer/>
  </>
  )
}
