"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({ words: ["Hi, The name is Rayan", "Guy who loves Cars !", "<ButLovestoCodeToo />"], loop: true, delaySpeed: 2000 })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-centre overflow-hidden'>
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='yellow' />
            </h1>
        </div>
    )
}

export default Hero