import skills from './skills.json' with { type: "json" };
import * as Icons from 'react-icons/bi';

import './App.css';

function Skills() {
    return (
        <section className='skills__section'>
            <h1 className="skills__title">
                Habilidades e Ferramentas
            </h1>

            <div className="skills__cards">
                {
                    skills.skills.map((skill, index) => {
                        const Icon = Icons[skill.icon] || Icons["BiCodeAlt"];

                        return (
                            <div className="skill_card" key={index}>
                                {Icon && <Icon className="skill_icon" />}

                                <span className="skill_name">{skill.name}</span>
                                <span className="skill_description">
                                    {skill.description}
                                </span>

                                <div className="skill_footer">
                                    <span className="skill_tag">{skill.tag || "Ferramentas & Habilidades"}</span>
                                    <a
                                        className="skill_readmore"
                                        href={skill.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Saiba Mais
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Skills;