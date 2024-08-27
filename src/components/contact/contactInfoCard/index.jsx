import React from 'react'

export const ContactInfoCard = ({text,img}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-blue-300 p-6
    mb-8">
        <div className="w-16 h-16 flex items-center">
      
        <i className={`bx ${img} text-3xl`}></i>
        </div>

        <p className="text-2xl font-normal">{text}</p>

    </div>
  )
}

