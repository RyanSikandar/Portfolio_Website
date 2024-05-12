import React from 'react';
import { motion } from 'framer-motion';
import { MdDescription } from 'react-icons/md';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Projects({ }: Props) {
    const projects = [
        {
            title: "Smart Management System",
            description: "A complete system for managing the complaints and requests of the residents of a society. It is a web application made for a client in MERN.",
            src: "/smartcontrol.png",
            to: "https://smart-control-app-frontend.vercel.app/"
        },
        {
            title: "An Inventory System",
            description: "A complete system for managing the inventory of a store. Using React, Tailwind, Redux, Node, Express, and MongoDB for a full stack application.",
            src: "/pinvent.png",
            to: "https://inventory-frontend-three-khaki.vercel.app/"
        },
        {
            title: "Google 2.0",
            description: "A complete search engine making use of Data Structures such as Forward Indexing, Inverted Indexing, and Trie Data Structure. An inspiration from Google.",
            src: "/google.png",
            to: "https://github.com/RyanSikandar/DSA-Project"
        }];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-md hidden sm:block'>Click on the name to go to the Project Link</h3>
            <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-500 text-md hidden sm:block'>For more visit my <SocialIcon fgColor='gray' bgColor='transparent' url="https://github.com/RyanSikandar" /></h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-12 md:p-20 lg:p-24 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={project.src} alt="" className="w-3/4 md:w-full lg:w-[40%] lg:mt-16" />
                        <div className='space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Case Study of {i + 1} and {projects.length}:</span>{" "}<Link href={project.to}>{project.title}</Link></h4>
                            <p className='text-md md:text-lg text-center md:text-left'>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px] -skew-y-12 left-0'>

            </div>
        </motion.div>
    )
}

export default Projects;
