import React, {useState} from "react";

function NewChoreForm({addChore, rooms}) {
    
    const blankChoreForm = {
        "choreName": "",
        "isCompleted": false,
        "choreRoom": ""
    }

    const [choreFormData, setChoreFormData] = useState(blankChoreForm)

    const roomsMap = rooms.map((room) => {
        return(
            <option key={room.id} value={room.roomName}>{room.roomName}</option>
            )
    })

    function handleChoreChange(e) {
        const key = e.target.id
        console.log(e.target.id)
        setChoreFormData({
            ...choreFormData,
            [key]: e.target.value
        })
    }

    function handleChoreRoomChange(e) {
        console.log(e.target.value)
        setChoreFormData({...choreFormData, "roomName": e.target.value})
    }
    
    function handleNewChoreSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/chores", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(choreFormData),
        })
        .then((r) => r.json())
        .then((data) => {
            addChore(data)
            setChoreFormData(blankChoreForm)
        })

    }



    return(
        <form onSubmit={handleNewChoreSubmit}>
            <h2>Add a Chore</h2>
            <label htmlFor="choreName">Name</label>
            <input 
                type="text"
                id="choreName"
                value={choreFormData.choreName}
                onChange= {handleChoreChange}
            />

            <br/>

            <label htmlFor="choreRoom">Room</label>

            <select id="choreRoom" value={choreFormData.choreRoom} onChange={(e) => handleChoreChange(e)} >
                {roomsMap}
            </select>

            <br/>

            <input type="submit" value="Add Chore" />

        </form>
    )

}

export default NewChoreForm;