"use client"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string
}


type Props = {}

function ContactMe({ }: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const bodyMessage = encodeURIComponent(`Hi, My name is ${formData.name}. ${formData.message}`);
    window.location.href = `mailto:ryansikandar@gmail.com?subject=${formData.subject}&body=${bodyMessage}`;
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>


      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>I have got just what you need{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+923377655711</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>NUST, Islamabad</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>ryansikandar@gmail.com</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex space-x-2'>
            <input {...register('name')} type="text" className='contactInfo' placeholder='Name' />
            <input {...register('email')} type="email" className='contactInfo' placeholder='Email' />
          </div>
          <input {...register('subject')} type='text' className='contactInfo' placeholder='Subject' />
          <textarea {...register('message')} className='contactInfo' placeholder='Message' />
          <button className='bg-[#F7AB0A]/90 py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>

        </form>

      </div>


    </div>
  )
}

export default ContactMe