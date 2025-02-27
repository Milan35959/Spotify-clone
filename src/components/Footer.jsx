import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <div className='md:h-[350px] bg-[#121212]  text-white p-4 '>
        <div className='grid md:grid-cols-5 gap-8 md:text-lg text-sm grid-cols-1  m-6'>
            <div className='grid-col-1 cursor-pointer'>
                <h2 className='font-semibold '>Company</h2>
                <p className='text-slate-400 mt-1 '>About</p>
                <p className='text-slate-400 mt-1'>Jobs</p>
                <p className='text-slate-400 mt-1'> For the Record</p>
            </div>
            <div className='grid-col-1  cursor-pointer'>
                <h2 className='font-semibold '>Communities</h2>
                <p className='text-slate-400 mt-1 '>For Artists</p>
                <p className='text-slate-400 mt-1'>Developers</p>
                <p className='text-slate-400 mt-1'> Avertising</p>
                <p className='text-slate-400 mt-1'> Investors</p>
                <p className='text-slate-400 mt-1'> Vendors</p>
            </div>
            <div className='grid-col-1  cursor-pointer'>
                <h2 className='font-semibold '>Useful links</h2>
                <p className='text-slate-400 mt-1 '> Support</p>
                <p className='text-slate-400 mt-1'>Free Mobile App</p>
              
            </div>
            <div className='grid-col-1 cursor-pointer'>
                <h2 className='font-semibold '>Spotify Plans</h2>
                <p className='text-slate-400 mt-1 '>Premium Individual</p>
                <p className='text-slate-400 mt-1'>Premium Family</p>
                <p className='text-slate-400 mt-1'> Premium Student </p>
                <p className='text-slate-400 mt-1'> Spotify Free </p>
            </div>
            <div className='flex justify-center text-2xl items-center gap-3 cursor-pointer'>
                 <IoLogoFacebook />
                 <FaInstagram />
                 <FaXTwitter />
            </div>
           


        </div>
        <hr/>
        <div className='flex gap-2 justify-center  mt-9 '>
            <p >{<MdCopyright />}</p>
            <p>2024 Spotify AB </p>
        </div>
    </div>
    
  )
}

export default Footer
