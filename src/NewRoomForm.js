import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function NewRoomForm({addRoom}) {
    const history = useHistory()

    const blankRoomForm = {
        "roomName": "",
        "chores": []
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
        .then((r) => {
            r.json()
            console.log(r)
        })
        .then((data) => {
            addRoom(data)
            setRoomFormData(blankRoomForm)
            history.push("/")
        })
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