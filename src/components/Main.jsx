import React from 'react'
import { TypeAnimation } from 'react-type-animation';
// import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedIn} from 'react-icons/fa';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1] '
      src='https://img.freepik.com/premium-photo/laptop-screen-lock-cyber-security-data_941600-20192.jpg?size=626&ext=jpg&ga=GA1.1.1923699397.1673927026&semt=sph'/>
    
    <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>

    <div className=' max-w-[700px] flex justify-center flex-col md:items-center m-auto  h-full w-full lg:items-start items-center'>
        <h1 className='text-5xl font-bold text-gray-600'> Hello! I'm  Caliph Ridwan </h1>
        <h2 > I'm a 
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Developer',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        3000,
        'Tech Enthusiast',
        3000,
        'Software Development Instructor',
        3000,
        'Data Analyst',
        3000,
        'Graphics Designer',
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '13px', color:'black', fontFamily:'sans-serif', fontWeight:'bold' }}
      repeat={Infinity}
    />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full' >   
        <AiOutlineFacebook  className='cursor-pointer' size={20}/>
        <AiOutlineTwitter  className='cursor-pointer' size={20}/>
        <AiOutlineInstagram className='cursor-pointer'  size={20}/>
        <AiOutlineLinkedin className='cursor-pointer'  size={20}/>
        

        </div>
    </div>
    

    </div>
    
    </div>
  )
}

export default Main
