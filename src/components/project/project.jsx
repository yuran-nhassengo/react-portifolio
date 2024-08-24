

import React from 'react'

export const Project = ({item}) => {
  return (

    <div key={item.id}  className="flex flex-col items-center text-center">
        <div className="mb-8">
            <img className="rounded-2xl" src={item.image} alt="projectImage"/>
        </div>
        <p className="capitalize text-blue-300 text-sm mb-3">{item.category}</p>
        <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
    </div>
  )
}

export default Project
