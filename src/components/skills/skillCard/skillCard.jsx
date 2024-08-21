import React from 'react'

export const SkillCard = ({title,iconUrl,isActive,onClick}) => {

  return (
    <div className="rounded-lg border-solid border-2 border-blue-300 p-8 relative cursor-pointer text-center transition ease-in-out delay-150" onClick={() =>onclick()}>
        
        <div>
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
    </div>
  )
}
