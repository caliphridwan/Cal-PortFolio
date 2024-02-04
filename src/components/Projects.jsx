import React from 'react'
import ProjectsItem from './ProjectsItem'
import imageOne from '../assets/prog2.webp'
import imageTwo from '../assets/prog1.webp'
import imageThree from '../assets/prog3.webp'
import imageFour from '../assets/hero-banner.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto py-32 md:pl-20 md:px-40 '>
    <h1 className='text-center text-4xl text-[#001b5e] font-bold  p-4'> Projects </h1>
    <p className='py-8 text-center'> A content creator is a person who develops and produces creative content, such as articles, blog posts, videos, social media posts, and podcasts. Content creators use their creativity and skills to produce content 
        that is informative, engaging, and relevant to their target audience. </p>

        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectsItem  img={imageOne} title="Twitch" />
            <ProjectsItem  img={imageThree} title="Twitter"/>
            <ProjectsItem  img={imageTwo} title="NetFlix"/>
            <ProjectsItem  img={imageFour} title="Instagram"/>
        </div>
    </div>


  )
}

export default Projects
