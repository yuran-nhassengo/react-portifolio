import React from 'react'

export const SkillsInfoCard = ({heading,skills}) => {
  return (
    <div>
        <h3>{heading}</h3>

        <div>
            {skills.map((item,index) => (
                <React.Fragment key={`skill_${index}`}>
                        <div>
                            <p>{item.skill}</p>
                            <p>{item.percentage}</p>
                        </div>

                        <div>
                            <div></div>
                        </div>
                </React.Fragment>
            ) )}
        </div>
    </div>
  )
}

