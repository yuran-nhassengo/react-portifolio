import React, { useRef } from 'react';
import Slider from 'react-slick';
import { WORK_EXPERIENCE } from '../../utils/data';
import { ExperienceCard } from './cardExperience';

export const WorkExperience = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        if (sliderRef.current) sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        if (sliderRef.current) sliderRef.current.slickPrev();
    };

    return (
        <section className="flex flex-wrap items-center">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <h5 className="text-2xl text-center text-black font-semibold mb-6">Professional Experience</h5>
                <div className="relative flex items-center justify-center">
                 
                    <div
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-gray-100 p-2 rounded-full shadow-lg"
                        onClick={slideLeft}
                    >
                        <i className="bx bx-chevron-left text-4xl text-blue-500"></i>
                    </div>

                   
                    <div className="w-full max-w-screen-lg ">
                        <Slider ref={sliderRef} {...settings}>
                            {WORK_EXPERIENCE.map((item, index) => (
                                <div key={index} className="p-4">
                                    <div className="w-full max-w-xs mx-auto">
                                        <ExperienceCard details={item} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-gray-100 p-2 rounded-full shadow-lg"
                        onClick={slideRight}
                    >
                        <i className="bx bx-chevron-right text-4xl text-blue-500"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};
