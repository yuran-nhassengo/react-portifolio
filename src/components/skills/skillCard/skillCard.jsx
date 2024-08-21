import React from 'react'

export const SkillCard = ({title,iconUrl,isActive,onClick}) => {

  return (
    <div className={`rounded-lg border-solid border-2 border-blue-300 p-8 relative cursor-pointer text-center transition ease-in-out delay-150 hover:bg-white ${isActive ?" hover:bg-white":""}`} onClick={() =>onclick()}>
        
        <div className="w-20 h-16 flex items-center justify-center rounded-lg border-solid border-2 border-blue-300 absolute -top-4 -left-4">
            <img className="w-auto h-auto object-contain" src={iconUrl} alt={title} />
        </div>

        <span className="text-base font-medium">{title}</span>
    </div>
  )
}
