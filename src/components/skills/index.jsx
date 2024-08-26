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
    <section id="skills" className="mt-24 ml-16 relative items-center mb-12">
        

        <div className="flex flex-wrap justify-center items-start  gap-40">

           <div>
            
                    <h3 className="text-2xl mb-24 font-semibold">Technical Proficiency</h3>

                    <div className=" mt-12 grid gap-12 grid-cols-2">
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
            </div> 
            <div className="flex ">
                <SkillsInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.Skills}
                />
            </div>
        </div>
    </section>
  )
}


