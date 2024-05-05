"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
        md:w-[600px] lg:w-[900px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration:200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                alt='hello' src={'/Inlights.png'}
                className='
            h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Web Dev Intern</h4>
                <p className='font-bold text-2xl mt-1'>InLights</p>
                <div className='flex space-x-2 my-2'>
                    {/* TECH STACK */}
                    <SiTailwindcss size={25} />
                    <IoLogoJavascript size={25} />
                    <IoLogoFigma size={25} />
                    <FaReact size={25} />
                </div>
                <p className='uppercase py-5 text-gray-300'>Nov '23 - Feb '24</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Developed a web portal for InLights, company focused on automating traffic signals in Islamabad.</li>
                    <li>Responsible for translating Figma design to code with the use of React and Tailwind ensuring seamless integration with UI elements.</li>
                    <li>Created custom components to enhance functionality and user experience.</li>
                    <li>Collaborated in a team environment, actively participated in the design process.</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard;