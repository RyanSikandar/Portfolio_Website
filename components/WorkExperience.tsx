'use client'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'

type Props = {}
const WorkExperience = (props: Props) => {
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>


            <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>

        </div>
    )
}

export default WorkExperience