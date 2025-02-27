import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const SideBar = () => {

    const navigate=useNavigate();

  return (
    <div className='w-[25%]  h-full p-2 flex-col gap-2 text-white hidden lg:flex   '>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-arround'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.home_icon} alt="" />
            <p  className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="" />
            <p className='font-bold'>Search</p>
        </div>

      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img className='w-8' src={assets.stack_icon} alt=""/>
                <p className='font-semibold'>Your Libary</p>
            </div>
            <div className='flex items-center gap-4'>
                <img className='w-8 cursor-pointer' src={assets.arrow_icon} alt=""/>
                <img className='w-8 cursor-pointer' src={assets.plus_icon} alt=""/>
            </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-center  gap-1 pl-4'>
            <h1>
                Create your First playlist
            </h1>
            <p className='font-light'>
                It's easy we will help you
            </p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-center  gap-1 pl-4 mt-4'>
            <h1>
                Let's find some podcate for you
            </h1>
            <p className='font-light'>
                We will keep update on new podcate
            </p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcaste</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
