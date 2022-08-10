import React from "react";
import ChoreCard from "./ChoreCard";


function RoomCard({room, chores, choreSet, deleteRoom}) {


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
        <div className="roomCard">
            <tr>
                <th>
                    {room.roomName}
                </th>
                <th>
                    <button className="roomButton" onClick={handleRoomDelete}> DELETE ROOM </button>
                </th>
            </tr>
            
                {choresList}           

        </div>
    )
}

export default RoomCard;