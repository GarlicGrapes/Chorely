import React from "react";

function RoomCard({room}) {

    const choreList = room.chores.map((chore) => {
        return <ChoreCard key={chore.id} chore={chore}/>
    })

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