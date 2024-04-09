'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='h-screen flex flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center relative'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
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
                src='/Photo.jpg' className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full  
                md:rounded-lg md:w-64 md:h-96 xl:h-[600px] xl:w-[500px]' />


            <div className='px-0 space-y-10 md:px-10'>
                <h4 className='text-4xl font-semibold '>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> Background
                </h4>

                <p className='text-md'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias nobis enim soluta dolor fugit, accusamus exercitationem aliquid reprehenderit iure ut ratione ea repellat nostrum eos repellendus tempore, natus ab!
                </p>
            </div>
        </motion.div>

    )
}