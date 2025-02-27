import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItems = ({image, name, desc, id}) => {

  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] rounded p-2 px-3 cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt=""/>
      <p className='mt-2 mb-1 font-bold'>{name}</p>
      <p className='font-semibold text-slate-200'>{desc}</p>
    </div>
  )
}

export default AlbumItems
