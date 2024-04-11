'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
type Props = {}

export default function Skills({ }: Props) {
  return (
    <motion.div 
    className='relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-md'>Hover over a skill for current proficiency</h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
      </div>
    </motion.div>)
}