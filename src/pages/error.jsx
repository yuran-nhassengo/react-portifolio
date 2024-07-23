import React from 'react'
import { Outlet } from 'react-router-dom'


import {Header} from "../components/header"
import {Footer} from "../components/footer"

export const Error = () => {
  return (
    <>
    <Header/>
    <main>
      404
    <Outlet/>
    </main>
    <Footer/>
  </>
  )
}

