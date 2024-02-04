import React from 'react'

const ProjectsItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover: bg-gradient-to-r from-gray-200 to-[#001b53]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'> 
       <h3 className='font-bold text-2xl text-white tracking-wider text-center'>
        {title}
        </h3>
        <p className='text-white pb-2 pt-2 font-bold text-center'> React Js Project</p>

        <a href='#'> 
            <p className=' text-gray-700 font-bold bg-white cursor-pointer rounded-lg p-3 text-lg text-center'> More info</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectsItem
