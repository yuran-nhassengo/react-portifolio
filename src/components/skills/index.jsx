import React from 'react'
import { SKILLS } from '../../utils/data'
import { SkillCard } from './skillCard/skillCard'

export const Skills = () => {
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
                    />
                ))

                }
            </div>
        </div>
    </section>
  )
}


