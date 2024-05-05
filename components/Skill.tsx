'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?: boolean
    src: string,
    percent?: number
}

function Skill({ directionLeft,src ,percent}: Props) {
    return (
        <div className='relative group flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={src}
                className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'
            />
            {/* <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 md:w-28 md:h-28 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100%'>{percent}%</p>
                </div>
            </div> */}
        </div>
    )
}

export default Skill