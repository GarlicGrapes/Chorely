import React from "react";
import ChoreCard from "./ChoreCard"
// 
function HomePage({chores, setChores}) {

function onChoresChange() {
    console.log(setChores)
    console.log(chores)
}

  return(
    <div>
        HomePage
        *ChoreList*
        <button onClick={onChoresChange}> BUTTON </button>
        <ul>
        {chores.map(chore => {
            return <ChoreCard key={chore.id} chore={chore}>{chore.choreName}</ChoreCard>
        })}
        </ul>
    </div>
  )
}

export default HomePage;
