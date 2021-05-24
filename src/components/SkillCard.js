import React from 'react';

const SkillCard = ({ skill: { icon, title, about }}) => 
    <div className="col-lg-6">
    <di className="skill_card">
        <img src={icon} alt="icon" className="skill_card_icon"/>
        <div className="skill_card_body">
            <h6 className="skill_card_title">{title}</h6>
            <h6 className="skill_card_content">{about}</h6>
        </div>
    </di>
    </div>

export default SkillCard;