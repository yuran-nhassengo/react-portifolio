import { Carousel } from 'flowbite-react'
import React from 'react'

export const WorkExperience = () => {
  return (
    <div >
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>

       <Carousel className='w-full mx-auto'> 
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
        gap-1 ">

          <div className="bg-green-400">
            <img src="" alt="imagem" />
          </div>

          <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug
                '>Primeiro Titulo </h1>
                <p className='text-neutralGrey text-base mb-8'>Um pequeno paragrafo</p>

                <button className='px-7 py-2 bg-red-300 text-white rounded hover:bg-red-500 transition-all duration-300 
                hover:-translate-y-4'>Register</button>

          </div>
        </div>


        <div className="my-28 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between
        gap-8 bg-blue-700">

          <div>
            <img src="" alt="imagem" />
          </div>



          <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug
                '>Primeiro Titulo</h1>
                <p className='text-pink-600 text-base mb-8'>Um pequeno paragrafo</p>
                <button className='px-7 py-2  text-white rounded hover:bg-black transition-all duration-300 
                hover:-translate-y-4'>Register</button>
          </div>

        </div>
        
      </Carousel>

       </div>
    </div>
  )
}