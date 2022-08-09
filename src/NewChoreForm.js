import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl";
import { blue } from "@mui/material/colors";
import Box from "@mui/material/Box"

function NewChoreForm({addChore, rooms}) {
    
    const blankChoreForm = {
        "choreName": "",
        "isCompleted": false,
        "choreRoom": ""
    }

    const [choreFormData, setChoreFormData] = useState(blankChoreForm)

    const roomsMap = rooms.map((room) => {
        console.log(room)
        return <option key={room.id} value={room.roomName}>{room.roomName}</option>
    })



    function handleChoreChange(e) {
        const key = e.target.id
        console.log(e.target.id)
        setChoreFormData({
            ...choreFormData,
            [key]: e.target.value
        })
    }

    // function handleChoreRoomChange(e) {
    //     console.log(e.target.value)
    //     setChoreFormData({...choreFormData, "roomName": e.target.value})
    // }
    
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
            console.log(data)
            addChore(data)
            setChoreFormData(blankChoreForm)
        })

    }



    return(

        <form onSubmit={handleNewChoreSubmit} sx={{minWidth: 250}} variant="filled">
            <h2>Add a Chore</h2>

            <label>Chore Name </label>        
            <input
                sx = {{minWidth: 250}}
                type="text"
                id="choreName"
                value={choreFormData.choreName}
                onChange= {handleChoreChange}
            />

            <br/>

            <label>Room Name </label>

            <select sx={{minWidth: 250}} class="dropdown" id="choreRoom" value={choreFormData.choreRoom} onChange={(e) => handleChoreChange(e)} >
                {roomsMap}
            </select>

            <br/>

            <input type="submit" value="Add Chore" />

        </form>

    )

}

export default NewChoreForm;