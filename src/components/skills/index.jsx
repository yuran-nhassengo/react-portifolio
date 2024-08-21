import React from 'react'
import { SKILLS } from '../../utils/data'
import { SkillCard } from './skillCard/skillCard'

export const Skills = () => {
  return (
    <section>
        <h3>Technical Proficiency</h3>

        <div>
            <div>
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


