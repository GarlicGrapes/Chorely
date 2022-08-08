import React from "react";
import ChoreCard from "./ChoreCard";

function RoomCard({room, deleteChore }) {

    const choreList = room.chores.map((chore) => {
        return <ChoreCard key={chore.id} chore={chore} handleDeleteChore={onDelete} room={room}/>
    })

    function onDelete(choreId) {
        console.log("in Room" + choreId, room.id)
        deleteChore(choreId, room.id)
    }

    // function deleteChore(id) {
    //     fetch(`http://localhost:3000/rooms/${room.id}/chores/`, {
    //         method: "PATCH"
    //     })
        
    //     // const updatedChores = room.chores.filter((chore) => {
    //     //     return chore.id !== id
    //     // })

    //     // setRoom([...room], room.chores = updatedChores)
    // }

    // function handleDeleteChore(choreId) {
    //     return [choreId, room.id]
    // }

    return(
        <div>
            <h2>
                {room.roomName}
            </h2>
            <ul>
                {choreList}
            </ul>
        </div>
    )
}

export default RoomCard;