import React from 'react'

export const SkillsInfoCard = ({heading,skills}) => {
  return (
    <div className="min-h-96 w-96 mt-12 rounded-lg border-solid border-2 border-blue-300">
        <h3 className="text-2xl mb-12 font-semibold  border-solid border-2 border-blue-300 ">{heading}</h3>

        <div className="p-8">
            {skills.map((item,index) => (
                <React.Fragment key={`skill_${index}`}>
                        <div className="flex items-center justify-between">
                            <p className="text-lg">{item.skill}</p>
                            <p className="text-lg text-blue-300">{item.percentage}</p>
                        </div>

                        <div className="w-full h-2 bg-white rounded-lg mt-4 overflow-hidden">
                            <div className="w-0 h-2 bg-blue-300 rounded-lg transition-all ease-in-out delay-300" style={{width: item.percentage}}></div>
                        </div>
                </React.Fragment>
            ) )}
        </div>
    </div>
  )
}

