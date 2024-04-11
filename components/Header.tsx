"use client"
import { motion } from 'framer-motion'
import { SocketAddress } from 'net'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

const Header = (props: Props) => {
  return (

    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-row items-center'>
        <SocialIcon fgColor='gray' bgColor='transparent' url="https://www.linkedin.com/in/rayan-sikandar-638758249/" />
        <SocialIcon fgColor='gray' bgColor='transparent' url="https://github.com/RyanSikandar" />
        <SocialIcon fgColor='gray' bgColor='transparent' url="https://instagram.com/ryansikandar_12" />
      </motion.div>

      <motion.div
        onClick={() => (window.location.href = "#contact")}
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }} className='flex flex-row items-center'>
        <SocialIcon className='cursor-pointer' network="email" fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
      </motion.div>



    </header>
  )
}

export default Header