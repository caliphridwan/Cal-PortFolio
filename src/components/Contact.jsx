import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 font-bold text-center text-4xl text-[#001b5e]'>Contact</h1>
      <form action='https://getform.io/f/579f2bdb-5b5d-42a0-9bd5-55a7abfc4cd5' method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'> Name</label> 
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
            </div>
            <div className='flex flex-col'>
            <label className='uppercase text-sm py-2' > Phone Number</label> 
            <input type='text' name='phone'  className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2' > Email</label>
            <input type='email' name='email' className='border-2 rounded-lg p-3 flex border-gray-300'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'> Subject </label>
            <input type='text' name='subject' className='border-2 rounded-lg p-3  flex border-gray-300' />
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'> Message </label>
            <textarea rows='10' name='message' className='border-2 h-48  rounded-lg p-3 flex border-gray-300'></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
            Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
