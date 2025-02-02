import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { FaLinkedin } from 'react-icons/fa';

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
    <div
    className='relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me </h3>
      <div className='flex flex-col space-y-4 lg:mt-24 md:mt-12 lg:px-6'>
        <h4 className='text-lg lg:text-2xl font-semibold text-center md:text-3xl'>I have got just what you need{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s Talk</span>
        </h4>

        <div className='space-y-5 md:space-y-5'>

          <div className='flex items-center space-x-2 md:space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse' />
            <p className='text-base md:text-xl'>NUST, Islamabad</p>
          </div>
          <div className='flex items-center space-x-2 md:space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse' />
            <p className='text-base md:text-xl'>ryansikandar@gmail.com</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 w-full md:w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex-col space-y-2 md:flex-row md:space-x-2'>
            <input {...register('name')} type='text' className='contactInfo' placeholder='Name' />
            <input {...register('email')} type="email" className='contactInfo' placeholder='Email' />
          </div>
          <div className='flex flex-col items-center space-y-2 mx-auto md:mx-0'>
            <input {...register('subject')} type='text' className='contactInfo w-full' placeholder='Subject' />
            <textarea {...register('message')} className='contactInfo w-full' placeholder='Message' />
          </div>
          <button className='bg-[#F7AB0A]/90 py-3 md:py-5 px-6 md:px-10 rounded-md text-black font-bold text-base md:text-lg' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe