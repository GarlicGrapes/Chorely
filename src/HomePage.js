import { Box } from "@mui/material/";
import React from "react";
import RoomCard from "./RoomCard";

function HomePage({rooms, chores, choreUpdate, roomUpdate}) {

  const RoomsList = rooms.map(room => {
    // console.log(room)
    return (
    <RoomCard 
      key={room.id} 
      room={room} 
      chores={chores} 
      choreSet={choreUpdate}
      deleteRoom = {removeRoomFromList}
    />)
  })

  function removeRoomFromList(roomId) {
    
    console.log(roomId)
    const updatedRooms = rooms.filter((room) => room.id !== roomId)
    roomUpdate(updatedRooms)
  }
     
    return(
      <Box>
      <h2>Welcome to Chorely!</h2>

          <ul>
          Here are your chores:
            {RoomsList}
          </ul>
      </Box>
    )
  }

export default HomePage;