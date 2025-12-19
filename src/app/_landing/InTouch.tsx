import React from 'react'
import Button from '@/components/ui/Button';
const InTouch = () => {
  return (
    <div>
      <div className="px-8 lg:layout-padding flex items-center justify-center gap-25 bg-black pb-14 lg:py-30">
        <div className="hidden lg:inline w-[541px]">
          <img src="./images/globe.png" alt="globe_img" className="w-full " />
        </div>
        <div className="flex flex-col items-left justify-center gap-3 text-white poppins w-[500px]">
          <h1 className=" font-semibold lg:py-6 text-3xl lg:text-5xl">Get In Touch</h1>
          <p className='text-[#9E9E9E] mb-4 lg:mb-2'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
          <input type="email" name="email" id="" placeholder='Your email' className='px-3 py-4 bg-[#18181c] w-80 rounded-sm outline-none' />
          <input type="text" name="name" id="" placeholder='Name'className='px-3 py-4 bg-[#18181c] w-80 rounded-sm outline-none'/>
          <textarea name="" id="" cols={8} rows={4} placeholder='Message'className='px-3 py-4 bg-[#18181c] w-80 rounded-sm resize-none outline-none ' ></textarea>
          <Button className='w-40 py-4 px-3 mt-4'> Get In Touch</Button>
        </div>
      </div>
    </div>
  )
}

export default InTouch
