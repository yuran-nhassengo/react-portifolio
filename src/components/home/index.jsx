import React from 'react'


export const Home = () => {
  return (
   <section id="home" className="lg:h-[85vh]  flex items-center lg:bg-cover
   lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">

    <div className="container mx-auto h-full">
      <div className=" flex flex-wrap justify-center items-center  h-full pt-8">

          <div className="flex flex-col items-center  lg:items-start">
              <p className="font-medium">Hello, I’m Yuran Nhassengo</p>
              <h1 className="text-3xl leading-[22px]
              md:text-3xl md:leading-tight lg:text-4xl
              lg:leading-[1.2] font-body md:tracking-[-2px">
                Junior Fullstack Developer
              </h1>
              <p className="pt-2 pb-4 md:pt-4 md:pb-8 max-w-[500px] text-lg ">
              I am open to new opportunities and ready to collaborate on projects.
               Thank you for visiting my portfolio, and I look forward to discussing how I can contribute!
              </p>
              <button className=" btn btn-md border-solid border-2  font-semibold px-4 py-2 rounded-lg bg-blue-300 border-blue-300
                hover:bg-transparent hover:text-black transition-all">
                Get in Touch
              </button>
          </div>

          <div className=" lg:flex  justify-center h-full">
                <img src="./profile.png" alt="Picture" />
          </div>
      </div>

    </div>
   </section>
  )
}


