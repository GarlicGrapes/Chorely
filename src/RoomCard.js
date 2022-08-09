import React from "react";
import ChoreCard from "./ChoreCard";


function RoomCard({room, chores, choreSet, deleteRoom}) {

    // const choreList = room.chores.map((chore) => {
    //     return <ChoreCard key={chore.id} chore={chore} room={room}/>
    // })

    function handleRoomDelete() {
        fetch(`http://localhost:3000/rooms/${room.id}`, {
            method: "DELETE"
        })
        deleteRoom(room.id)
    }

    function choreRemove(choreId){
        fetch(`http://localhost:3000/chores/${choreId}`, {
        method : "DELETE"
        })

        const choreMap = chores.filter(chore => chore.id !== choreId)
        console.log(choreMap)
        choreSet(choreMap)

    }


    const choresList = chores.map((chore) => {
        console.log(chore.choreName)
        console.log(room.roomName)
        if(chore.choreRoom == room.roomName) {
            return (
                <ChoreCard key={chore.id} chore={chore} deleteChore={choreRemove}/>
            )
        }
    })

    return(
        <div>
            <h2>
                {room.roomName}
                <button onClick={handleRoomDelete}> DELETE ROOM </button>
            </h2>
            <ul>
                {choresList}
            </ul>
        </div>
    )
}

export default RoomCard;