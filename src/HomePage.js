import React from "react";
import RoomCard from "./RoomCard";

function HomePage({rooms, chores, choreUpdate}) {

  const RoomsList = rooms.map(room => {
    // console.log(room)
    return (
    <RoomCard 
      key={room.id} 
      room={room} 
      chores={chores} 
      choreSet={choreUpdate}
    />)
  })
     
    return(
      <div>
          HomePage
          <ul>
            {RoomsList}
          </ul>
      </div>
    )
  }

export default HomePage;