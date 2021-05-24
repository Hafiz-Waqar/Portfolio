import React from 'react';
import Bar from './Bar';
import Html from '../assets/icons/html5.svg'
import Css from '../assets/icons/css.svg'
import JavaScript from '../assets/icons/javascript.svg'
import BootStrap from '../assets/icons/bootstrap.svg'
import MaterialUi from '../assets/icons/material.svg'
import react from '../assets/icons/react.ico'
import blogging from '../assets/icons/blogging.svg'
import graphics from '../assets/icons/graphics.svg'
import photoshop from '../assets/icons/photoshop.svg'
import illustrator from '../assets/icons/illustrator.svg'
import xd from '../assets/icons/xd.svg'
import English from '../assets/icons/English.svg'
import Urdu from '../assets/icons/Urdu.svg'
import { motion } from 'framer-motion'


const languages = [
    {
        icon: Html,
        name: 'HTML',
        level: '95' 
    },
    {
        icon: Css,
        name: 'CSS',
        level: '90' 
    },
    {
        icon: JavaScript,
        name: 'JavaScript',
        level: '80' 
    },
    {
        icon: BootStrap,
        name: 'Bootstrap',
        level: '90' 
    },
    {
        icon: MaterialUi,
        name: 'Material UI',
        level: '85' 
    },
    {
        icon: react,
        name: 'React',
        level: '80' 
    }
]



const frameworks = [
    {
        icon: blogging,
        name: 'Blogging',
        level: '90' 
    },
    {
        icon: graphics,
        name: 'Graphic Designing',
        level: '85' 
    },
    {
        icon: photoshop,
        name: 'Adobe Photoshop',
        level: '80' 
    },
    {
        icon: illustrator,
        name: 'Adobe Illustrator',
        level: '80' 
    },
    {
        icon: xd,
        name: 'Adobe XD',
        level: '80' 
    }
]
const Nlanguages = [
    {
        icon:English,
        name:'English',
        level: '85'
    },
    {
        icon:Urdu,
        name:'Urdu',
        level: '95'
    }
]



const resume_variant = {
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

const Resume = () => {
    return (
        <motion.div className="container resume"
            variants={resume_variant}
            initial='hidden'
            animate='visible'
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume_card">
                    <h4 className="resume_card_heading">
                        Education
                    </h4>
                    <div className="resume_card_body">
                        <h5 className="resume_card_title">
                            Bachelor of Science in Computer Science
                        </h5>
                        <p className="resume_card_name">
                            <b>The Islamia University Of Bahwalpur
                            (2017-2021).</b><br/>
                            I Finished My bachelor's degree in Computer Science from IUB.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume_card">
                    <h4 className="resume_card_heading">
                        Experience
                    </h4>
                    <div className="resume_card_body">
                        <h5 className="resume_card_title">
                            Front End Developer
                        </h5>
                        <p className="resume_card_name">
                            I have 6+ months of experience in Front End Development working on own projects.
                            <br/>I have done two major projects in React Js and many minor projects in JavaScript.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume_languages">
                    <h5 className="resume_language_heading">
                        Languages & Frameworks
                    </h5>
                    <div className="resume_language_body mt-3">
                        {
                            languages.map(Language =>
                                <Bar value={Language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume_languages">
                    <h5 className="resume_language_heading">
                        Extra Skills 
                    </h5>
                    <div className="resume_language_body mt-3">
                        {
                            frameworks.map(framework =>
                                <Bar value={framework} />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6 resume_languages">
                    <h5 className="resume_language_heading">
                        Communication 
                    </h5>
                    <div className="resume_language_body mt-3">
                        {
                            Nlanguages.map(Nlanguage =>
                                <Bar value={Nlanguage} />
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;