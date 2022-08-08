import React from "react";
import ChoreCard from "./ChoreCard"
import RoomCard from "./RoomCard";
// 
function HomePage({rooms}) {

// function onChoresChange() {
//     console.log(setChores)
//     console.log(chores)
// }

// function listChoresByRoom(chores) {
//     let rooms = []
//     for (let each in chores) {
//       if (!(each.room in rooms)) {
//         rooms = [...rooms, each.room]
//       }
//     }
//     for (let each in rooms) {

    
//     }
// }

const RoomsList = rooms.map(room => {
  console.log(room)
  return <RoomCard key={room.id} room={room}/>
})


  return(
    <div>
        HomePage
        <button onClick={() => console.log(rooms)}
        // onClick={onChoresChange}
        > BUTTON </button>
        <ul>
          {/* {listChoresByRoom(chores)} */}
          {RoomsList}
        </ul>
    </div>
  )
}

export default HomePage;
