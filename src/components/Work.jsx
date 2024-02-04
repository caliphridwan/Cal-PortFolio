import React from 'react'
import { GrAddCircle } from 'react-icons/gr'

const Work = () => {
  return (
    <div className='w-full h-screen mt-6 md:block md:py-36'  >
    <h1 className='text-blue-800 text-4xl text-center font-bold'> Work </h1>
    <div className='max-w-[90%] m-auto'>
    <div className='flex  max-w-[300] w-full p-4 m-2' >
    <GrAddCircle className=' mt-2 mr-2'/> 
        <button className='text-white p-1 bg-blue-800 font-bold max-w-[200] rounded-xl'> 2023</button>
        <h3 className='text-blue-800 font-bold mx-2 flex justify-center items-center'> Content Creator </h3>
        <p className='text-gray-400 font-bold mx-2 flex justify-center items-center'> 3 years </p>
    </div>
      <div className='flex max-w-[300] w-full p-4 m-2' >
        <p className='m-4 p-2 text-justify'> A content creator is a person who develops and produces creative content, such as articles, blog posts, videos, social media posts, and podcasts. </p>
      </div>
    <div className='flex  max-w-[300] w-full p-4 m-2' >
    <GrAddCircle className=' mt-2 mr-2'/> 
        <button className='text-white p-1 bg-blue-800 font-bold max-w-[200] rounded-xl'> 2020</button>
        <h3 className='text-blue-800 font-bold mx-2 flex justify-center items-center'> Software Developer </h3>
        <p className='text-gray-400 font-bold mx-2 flex justify-center items-center'> 2 years </p>
    </div>
      <div className='flex max-w-[300] w-full p-4 m-2'>
        <p className='m-4 p-2 text-justify'> A professional who designs, develops, and maintains computer software. </p>
      </div>
    <div className='flex  max-w-[300] w-full p-4 m-2' >
    <GrAddCircle className=' mt-2 mr-2'/> 
        <button className='text-white p-1 bg-blue-800 font-bold max-w-[200] rounded-xl'> 2018</button>
        <h3 className='text-blue-800 font-bold mx-2 flex justify-center items-center'> Front-end Engineer </h3>
        <p className='text-gray-400 font-bold mx-2 flex justify-center items-center'> 3 hours </p>
    </div>
      <div className='flex max-w-[300] w-full p-4 m-2'>
        <p className='m-4 p-2 text-justify'> A content creator is a person who develops and produces creative content, such as articles, blog posts, videos, social media posts, and podcasts. </p>
      </div>
    
    </div>
    </div>
  )
}

export default Work
