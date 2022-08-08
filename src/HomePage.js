import React from "react";
import ChoreCard from "./ChoreCard"
import RoomCard from "./RoomCard";
// 
function HomePage({rooms, chores, choreUpdate}) {

  const RoomsList = rooms.map(room => {
    // console.log(room)
    return <RoomCard key={room.id} room={room} chores={chores} choreSet={choreUpdate}/>
  })
  
  function handleFetchCheck() {
    const newChoreSheet=[
      {
        "choreName": "Sweep",
        "isCompleted": false,
        "id": 1
      }, {
        "choreName": "Sweep",
        "isCompleted": false,
        "id": 2
      }
    ]
    
  }
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