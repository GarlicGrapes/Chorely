import React from "react";
import ChoreCard from "./ChoreCard"
import RoomCard from "./RoomCard";
// 
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
          <button onClick={() => console.log(rooms)}
          > BUTTON </button>
          <ul>
            {RoomsList}
            <button onClick={()=> handleFetchCheck()}>x</button>
          </ul>
      </div>
    )
  }

export default HomePage;