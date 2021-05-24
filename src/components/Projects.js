import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'


const Projects = () => {

    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('All')



    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variant = {
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

    return (
        <motion.div className="container projects"
            variants={project_variant}
            initial='hidden'
            animate='visible'
            exit="exit"
        >
            <div className="projects_navbar">
                <div 
                    className = {active === 'All' && 'projects__navbar-active'} 
                    onClick={() => { 
                        setProjects(data_projects) 
                        setActive("All") }
                        }>All</div>
                <div className={active === 'javascript' && 'projects__navbar-active'} onClick={()=>handleFilterCategory('javascript')}>JavaScript</div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={()=>handleFilterCategory('react.js')}>React JS</div>
                {/* <div className={active === 'react.js' && 'projects__navbar-active'} onClick={()=>handleFilterCategory('node.js')}>Node JS</div> */}
            </div>
            <div className="row">
                {
                    projects.map
                    (
                        project =>
                            <ProjectCard key={project.name} project={project} />
                    )
                }
            </div>
        </motion.div>
    );
};

export default Projects;