import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl";
import { blue } from "@mui/material/colors";

function NewChoreForm({addChore, rooms}) {
    
    const blankChoreForm = {
        "choreName": "",
        "isCompleted": false,
        "choreRoom": ""
    }

    const [choreFormData, setChoreFormData] = useState(blankChoreForm)

    const roomsMap = rooms.map((room) => {
        return(
            <MenuItem key={room.id} value={room.roomName}>{room.roomName}</MenuItem>
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
        <FormControl onSubmit={handleNewChoreSubmit} sx={{minWidth: 150}} variant="filled">
            <h2>Add a Chore</h2>

            <TextField 
                label = "Chore Name"
                type="text"
                id="choreName"
                value={choreFormData.choreName}
                onChange= {handleChoreChange}
            />

            <br/>

            <InputLabel>Room Name</InputLabel>
            
            <Select class="dropdown" id="choreRoom" label={choreFormData.choreRoom} value={choreFormData.choreRoom} onChange={(e) => handleChoreChange(e)} >
                {roomsMap}
            </Select>

            <br/>

            <input type="submit" value="Add Chore" />

        </FormControl>
    )

}

export default NewChoreForm;