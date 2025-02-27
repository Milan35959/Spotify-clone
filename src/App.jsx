import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Players from './components/Players'
import Display from './components/Display'
import {PlayerContext} from './context/PlayerContext'
import Footer from './components/Footer'

const App = () => {
  const {audioRef,track}=useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
     <div className='h-[90%] flex'>
      <SideBar/>
      <Display/>
     </div>
     <Players/>
     <audio ref={audioRef} src={track.file} preload='auto'></audio>
     <Footer/>
    </div>
  )
}

export default App
