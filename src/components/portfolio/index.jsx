

import React from 'react'
import Projects from '../project'

const Portfolio = () => {
  return (
    <section id="projects" className=" min-h-[1400px]">
        <div className="mx-auto">
            <div className="mt-24 flex flex-col items-center">
                <h2 className=" text-black before:content-portfolio relative 
                before:absolute before:opacity-100 before:-top-[2rem]
                before:-left-3/4 before:hidden before:lg:block font-medium text-2xl">My latest test Work</h2>
            </div>
            <Projects/>
        </div>
    </section>
  )
}

export default Portfolio
