import React from 'react'

export const ContactInfoCard = ({text}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-blue-300 p-6
    mb-8">
        <div className="w-16 h-16 flex items-center">
            <img className="w-7 h-auto object-contain" src="" alt="Imagem" />
        </div>

        <p className="text-2xl font-normal">{text}</p>

    </div>
  )
}

