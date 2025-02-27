import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";


const DisplayAlbum = () => {
  const { id } = useParams();
  // console.log(id);
  const albumData = albumsData[id];
  // console.log(albumData);

  const {playWithId}=useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="rounded w-48" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlists</p>
          <h2 className="font-bold text-5xl mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="w-5 inline-block"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>. 12,345,678 Likes . <b>50 songs</b> about 2 hrs 30
            mins
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title</p>
          <p>Album</p>
          <p className="hidden sm:block">Date Added</p>
        <img className="m-auto  w-4 " src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {
      songsData.map((item, index) => (
        <div
          onClick={()=>playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 p-2 gap-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer ">
          <p className="text-white ">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className='text-[15px] '>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'>5 days ago </p>
          <p className='text-center text-[15px]'>{item.duration}</p>
        </div>
      ))}

      {/* /////////////////////////////////////////////////
      <table class="table-auto w-full">
        <thead className="border-b-2 border-indigo-300">
          <tr className="">
            <th className="text-left pb-4" width="25%">#</th>
            <th className="text-left pb-4" width="25%">Title</th>
            <th className="text-left pb-4" width="25%">Album</th>
            <th className="text-left pb-4" width="25%">Date Added</th>
            <th className="text-left pb-4" width="25%" >
            <img className="m-auto  w-4 " src={assets.clock_icon} alt="" />
            </th>
           
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
            
          </tr>

          

    
        </tbody>
      </table> */}
    </>
  );
};

export default DisplayAlbum;
