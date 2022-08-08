import React, {useState} from "react";

function NewRoomForm({addRoom}) {
    
    const blankRoomForm = {
        "roomName": ""
    }

    const [roomFormData, setRoomFormData] = useState(blankRoomForm)

    function handleRoomChange(e) {
        const key = e.target.id

        setRoomFormData({
            ...roomFormData,
            [key]: e.target.value
        })
    }
    
    function handleNewRoomSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/rooms", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(roomFormData),
        })
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
            addRoom(data)
            setRoomFormData(blankRoomForm)
        })
        // .then((newChore) => setChores([...chores, newChore]))
    }


    return(
        <form onSubmit={handleNewRoomSubmit}>
            <h2>Add a Room</h2>
            <label htmlFor="roomName">Room Name</label>
            <input 
                type="text"
                id="roomName"
                value={roomFormData.roomName}
                onChange= {handleRoomChange}
            />
            <input type="submit" value="Add Room" />
            <button onClick={() => console.log(roomFormData)}>TEST DATA</button>

        </form>
    )

}

export default NewRoomForm;