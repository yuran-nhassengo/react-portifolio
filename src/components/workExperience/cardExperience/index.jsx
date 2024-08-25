import React from 'react'

export const ExperienceCard = ({details}) => {
  return (
    <div className="md:m-0 border-solid border-2 rounded-lg p-6 my-0 mx-4">
       <h1 className="md:m-0 text-2xl font-medium mb-3">{details.title}</h1>

       <div className="inline-block text-xs font-normal rounded-md py-2 px-3 mb-6">
            {details.responsibilities.map((item,index) =>(
                <li className="md:text-xs list-none text-xs font-normal relative
                after:content-[''] after:w-2 after:h-2 after:rounded-lg 
                after:absolute after:-left-5 after:top-1" key={index}>{item}</li>
            )

            )}
       </div>
    </div>
  )
}

