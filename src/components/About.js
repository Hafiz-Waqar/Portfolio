import React from 'react';
import Computer from '../assets/icons/computer.svg'
import SkillCard from './SkillCard';
import blogging from '../assets/icons/blogging.svg'
import { motion } from 'framer-motion'


const skills = [
    {
        icon: Computer,
        title: "Front-End Development",
        about: `I can build a beautiful and scaleable single page applications using React.Js.`
    },
    
]
const blogger = [
    {
        icon: blogging,
        title: "Blogger",
        about: `I can write, edit, post, and optimized the content on client web pages or websites.`
    },
    
]

const about_variant = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity:1,
        transition:{
            delay:0.1,
            duration:0.5,
            type: 'spring'
        }

    },
    exit:{
        opacity:0,
        transition:{
            ease:"easeInOut"
        }
    }
}

const About = () => {
    return (
        <motion.div className="about"
            variants={about_variant}
            initial='hidden'
            animate='visible'
            exit="exit"
        >
            <h6 className="about_intro">
                Myself Hafiz Muhammad Waqar Ali a Front End Developer.
                I have Bachelor's Degree in Computer Science from The Islamia University of Bahawalpur. 
                Also i have 6+ months of experience in Front End Development working on my own projects.
                I describe myself as somone who's persistant, a quick learner and loves problem solving by
                using single and scalable solutions.
                {/* I am very proficient in React and React-Redux. 
                I have done two major projects. I am very passionate about what I do.
                It is important to me to provide exceptional front-end development service by giving personal attention to my clients. */}
            </h6>
            <div className="container about_container">
                <h6 className="about_heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <SkillCard skill={skill} />
                        )
                    }
                    {
                        blogger.map(skill =>
                            <SkillCard skill={skill} />
                        )
                    }
                </div>
                
            </div>
        </motion.div>
    );
};

export default About;