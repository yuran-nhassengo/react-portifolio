import React, { useState } from 'react'
import { SKILLS } from '../../utils/data'
import { SkillCard } from './skillCard/skillCard'
import { SkillsInfoCard } from './skillsInfoCard/skillsInfoCard'

export const Skills = () => {

    const [selectedSkill,setSelectedSkill] = useState(SKILLS[0])

    const handleSelectSkill = (data) =>{
        setSelectedSkill(data);
    }
  return (
    <section className="ml-16 relative">
        <h3 className="text-2xl mb-12 font-semibold">Technical Proficiency</h3>

        <div className="flex items-start gap-12">
            <div className=" grid gap-12 grid-cols-2">
                {SKILLS.map((item) =>(
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icons}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() =>{
                            handleSelectSkill(item)
                        }}
                    />
                ))

                }
            </div>
            <div className="flex">
                <SkillsInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.Skills}
                />
            </div>
        </div>
    </section>
  )
}


