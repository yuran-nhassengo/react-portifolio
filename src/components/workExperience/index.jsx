import React, { useRef } from 'react'
import Slider from 'react-slick';
import { WORK_EXPERIENCE } from '../../utils/data';
import { ExperienceCard } from './cardExperience';



export const WorkExperience = () => {

    const sliderRef = useRef();

    const settings = {
      dots:false,
      infinite:true,
      speed:500,
      slidesToShow:2,
      slidesToScroll:1,
      arrows:false,
      responsive:[
        {
          breakpoint:769,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          },
        },
      ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

  return (
   <section className="flex flex-wrap items-center justify-center bg-yellow-200 my-16 h-96 w-1/2 mx-16 relative">
        <h5 className="text-2xl text-black font-normal mb-3">Work Experience</h5>

        <div className=" md:mb-8 md:text-xl w-12 h-12 flex items-center justify-center  
        rounded-lg border-solid border-2 bg-blue-300
        absolute top-1/2  cursor-pointer -right-8 " onClick={slideRight}>
        <i className="bx bx-chevron-right text-4xl"></i>
        </div>

        <div className="md:mb-8 md:text-xl  w-12 h-12 flex items-center justify-center 
        rounded-lg border-solid border-2 bg-blue-300
        absolute top-1/2  cursor-pointer -left-8"  onClick={slideLeft}>
        <i className="bx bx-chevron-left text-4xl">

        </i>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) =>{
          
            <ExperienceCard key={item.title} details={item}/>
          })}
        </Slider>
   </section>
  )
}


