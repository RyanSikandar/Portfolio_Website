'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
type Props = {}

export default function Skills({ }: Props) {
  const skills = [
    { src: '/Cpp.jpg' },
    { src: '/react-1.svg' },
    { src: '/python.jpg' },
    { src: '/typescript.png' },
    { src: '/node.png' },
    { src: '/git.png' },
    { src: '/js.png' },
    { src: '/tailwind.png' },
    { src: '/redux.png' },
    { src: '/mongo.png' },
    { src: '/mysql.png' },
  ];
  return (
    <motion.div
      className='relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-md'>Hover over a skill for a cool effect</h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills.slice(0, skills.length / 2).map((skill, i) => (
          <Skill key={i} src={skill.src} directionLeft={true} />
        ))}
        {skills.slice(skills.length / 2).map((skill, i) => (
          <Skill key={i} src={skill.src} directionLeft={false} />

        ))}
      </div>
    </motion.div>)
}