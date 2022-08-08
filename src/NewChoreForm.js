import React, {useState} from "react";

function NewChoreForm({addChore, rooms}) {
    
    const blankChoreForm = {
        "choreName": "",
        "isCompleted": false
    }


    const [choreFormData, setChoreFormData] = useState(blankChoreForm)

    const roomsMap = rooms.map((room) => {
        return(
            <option key={room.id} value={room.roomName}>{room.roomName}</option>
        )
    })

    function handleChoreChange(e) {
        const key = e.target.id

        setChoreFormData({
            ...choreFormData,
            [key]: e.target.value
        })
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
        .then((r) => {
            r.json()
        console.log(r)
    }
            )
        .then((data) => {
            addChore(data)
            setChoreFormData(blankChoreForm)
        })
        // .then((newChore) => setChores([...chores, newChore]))
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
            {/* <input 
                type="text"
                id="choreRoom"
                value={choreFormData.choreRoom}
                onChange= {handleChoreChange}
            /> */}
            <select>
                {roomsMap}
            </select>

            {/* <br/>

            <label htmlFor="choreTime">Time to Complete</label>
            <input 
                type="integer"
                id="choreTime"
                value={choreFormData.choreTime}
                onChange= {handleChoreChange}
            />

            <br/> */}

            {/* <label htmlFor="choreFrequency">How often?</label>
            <input 
                type="integer"
                id="choreFrequency"
                value={choreFormData.choreFrequency}
                onChange= {handleChoreChange}
            /> */}

            <br/>

            <input type="submit" value="Add Chore" />

        </form>
    )

}

export default NewChoreForm;