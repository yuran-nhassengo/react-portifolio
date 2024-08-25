import React from 'react'

export const ExperienceCard = ({details}) => {
  return (
    <div className="border-solid border-2 rounded-lg p-6 my-0 mx-4">
       <h1 className="text-2xl font-medium mb-3">{details.title}</h1>

       <div className="inline-block text-xs font-normal rounded-md ">
            {details.responsibilities.map((item,index) =>(
                <li key={index}>{item}</li>
            )

            )}
       </div>
    </div>
  )
}

