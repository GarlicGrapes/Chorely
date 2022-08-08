import React from "react";
import ChoreCard from "./ChoreCard"
// 
function HomePage({chores}) {

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

const ChoreList = chores.map(chore => {
  return <ChoreCard key={chore.id} chore={chore}/>
})


  return(
    <div>
        HomePage
        *ChoreList*
        <button 
        // onClick={onChoresChange}
        > BUTTON </button>
        <ul>
          {/* {listChoresByRoom(chores)} */}
          {ChoreList}
        </ul>
    </div>
  )
}

export default HomePage;
