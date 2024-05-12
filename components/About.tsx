import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About  </h3>
            <motion.img
                initial={{
                    x: -200,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{
                    once: true
                }}
                src='/Photo.jpg' className='-mb-10 md:-mb-20 flex-shrink-0 w-40 md:w-56 h-40 md:h-56 object-cover rounded-full md:rounded-lg lg:h-[400px] lg:w-[400px]' />

            <div className='px-0 space-y-5 md:px-10 md:space-y-10'>
                <h4 className='text-3xl md:text-4xl font-semibold '>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> Background
                </h4>

                <p className='text-sm md:text-md'>
                I am second year Software Engineering Student at NUST, Islamabad. I love to learn and explore new things, let it be new tech or a new sport or a new cool spot in Islamabad. 
                <br/><br/>I am a passionate developer with a keen interest in solving real-world problems and materializing those solutions into products through code.<br/>
                <br/><br/>Talking about my hobbies, I love cars and motorsport other than that I am a huge fan of FC Barcelona.  
                <br/><br/>Currently, I am working on a startup idea and actively working on my technical and non-technical skills to become a well-rounded Software Engineer.
                </p>
            </div>
        </motion.div>
    )
}
