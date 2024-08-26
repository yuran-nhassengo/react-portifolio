import React from 'react'



export const About = () => {
  return (

        <section id="about" className="mt-24 mb-16 flex flex-wrap items-center justify-center" >
            <div className=" mx-auto">
                  <div className="flex flex-col xl:flex-row gap-24">
                    <img className="object-cover h-full  w-[566px]
                    md:mx-auto lg:mx-0 rounded-2xl" src="./profile.png" alt="Image" />
                    <div className="flex flex-col items-center
                    text-center lg:items-start lg:text-left">
                      <h2 className="mt-16 text-3xl lg:text-3xl
                      font-medium lg:font-extrabold mb-3
                      before:content-about relative before:absolute
                      before:opacity-100 before:-top-[2rem]
                      before:hidden before:lg:block">Yuran Nhassengo</h2>
                      <p className="text-black">Junior Fullstack Developer</p>
                      <hr className="mb-8 opacity-5" />
                      <p className="mb-8 mt-16 pt-2 pb-4 md:pt-4 md:pb-8 max-w-[500px] text-2xl ">Hello, my name is Yuran Oscar Nhassengo.
                         I am a person with a strong sense of responsibility, loyalty, and fairness. I value teamwork and consider myself
                          a natural leader, always seeking to collaborate with and support my colleagues.
                         Committed to continuous growth and the pursuit of new knowledge,
                          I have a passion for facing challenges and achieving collective success.</p>
                      <button className=" btn btn-md border-solid border-2  font-semibold px-4 py-2 rounded-lg bg-blue-300 border-blue-300
                          hover:bg-transparent hover:text-black transition-all">
                          Get in Touch
                      </button>
                    </div>

                  </div>
            </div>
        </section>
  )
}


