import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import Ali from '../assets/Ali.png'
import resume from '../assets/resume.pdf'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css' 
import { motion } from 'framer-motion'


const Sidebar = () => {


    const handleEmailMe = () => {
        window.open("mailto:waqarhafiz03@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x:'-20vw',
        },
        visible: {
            x:0,
            transition:{
                delay:0.1,
                duration:0.5,
                type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img 
                src={Ali} 
                alt="Avatar" 
                className="sidebar_avatar"
            />
            <div className="sidebar_name">
                Hafiz Muhammad <span> Waqar Ali </span>
            </div>
            <div className="sidebar_item sidebar_title">
                Front-End Web Developer
            </div>
            <a 
                href={resume} 
                download="resume.pdf"
            >
                <div className="sidebar_item">
                    <img 
                        src={tie} 
                        alt="Resume" 
                        className="sidebar_icon sidebar_resume"
                    /> 
                        Download Resume
                </div>
            </a>
            <figure className="sidebar_socialIcon my-2">
                <a href="https://web.facebook.com/Hafizwaqar927727779/" target="_blank" rel="noreferrer noopener">
                    <img 
                        src={facebook} 
                        alt="facebook" 
                        className="sidebar_icon mr-3"
                    />
                </a>
                <a href="https://www.instagram.com/hafiz_waqar_ali/" target="_blank" rel="noreferrer noopener">
                    <img 
                        src={instagram} 
                        alt="instagram" 
                        className="sidebar_icon mr-3"
                    />
                </a>
                <a href="https://twitter.com/HafizWa97591721" target="_blank" rel="noreferrer noopener">
                    <img 
                        src={twitter} 
                        alt="twitter" 
                        className="sidebar_icon mr-3"
                    />
                </a>
                <a href="https://www.linkedin.com/in/hafiz-muhammad-waqar-ali-qammar-a3305b153/" target="_blank" rel="noreferrer noopener">
                    <img 
                        src={linkedin} 
                        alt="linkedIn" 
                        className="sidebar_icon"
                    />
                </a>
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_item sidebar_github">
                    <a href="https://github.com/Hafiz-Waqar" target="_blank" rel="noreferrer noopener">
                        <img 
                            src={github} 
                            alt="GitHub" 
                            className="sidebar_icon mr-3" 
                        />
                        Git Hub
                    </a>
                </div>
                <div className="sidebar_location">
                    <img 
                        src={pin} 
                        alt="location" 
                        className="sidebar_icon mr-3"
                    />
                    Rahim Yar Khan, Punjab, Pakistan
                </div>
                <div className="sidebar_item">
                    waqarhafiz03@gmail.com
                </div>
                <WhatsAppWidget phoneNumber='+923087519270' className="whatsapp1"/>
            </div>
            <div 
                className="sidebar_item sidebar_email" 
                onClick={handleEmailMe}
            >
                Email
            </div>
        </motion.div>
    )
}

export default Sidebar

