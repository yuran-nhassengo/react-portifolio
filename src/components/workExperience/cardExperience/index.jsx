import React from 'react'

export const ExperienceCard = ({details}) => {
  return (
    <div className="md:m-0 border-solid border-2 bg-red-300 rounded-lg p-6 my-0 mx-4">
       <h1 className="md:m-0 text-black text-2xl font-medium mb-3">{details.title} akskalalsl</h1>

       <div className="inline-block text-black text-xs font-normal rounded-md py-2 px-3 mb-6">
            {details.responsabilities.map((item) =>(
                <li className="md:text-xs  text-black  text-xs font-normal 
                            " key={item.title}>{item}</li>
                
                            
            )

            )}
       </div>
    </div>
  )
}

