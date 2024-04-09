"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({ words: ["Hi, The name is Rayan", "Guy who loves Cars !", "<ButLovestoCodeToo />"], loop: true, delaySpeed: 2000 })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image alt='hello' className='relative rounded-full mx-auto object-cover' src={"/Photo.jpg"} width={100} height={100} />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Engineer
                </h2>
                <h1 className='text-5xl font-semibold lg:text-6xl px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='yellow' />
                </h1>
                <div className='pt-5 '>
                    <Link href={"#about"}><button className='heroButton'>About</button></Link>

                    <Link href={"#experience"}><button className='heroButton'>Experience</button></Link>
                    <Link href={"skills"}><button className='heroButton'>Skills</button></Link>
                    <Link href={"#projects"}><button className='heroButton'>Projects</button></Link>



                </div>


            </div>
        </div>
    )
}

export default Hero