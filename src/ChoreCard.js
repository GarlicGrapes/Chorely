import React from "react";
// import {useState} from "react"

function ChoreCard({chore, deleteChore}) {


    // const [checked, setChecked] = useState(false)

    // function handleCheck(e) {
    //     setChecked(!checked)
    //     console.log(e)
    // }

    function handleDeleteClick(choreId) {
        deleteChore(choreId)
    }


    return(
        <li>
            <ul>
                <li key={chore.id}>
                {chore.choreName}
                <input 
                type="checkbox"
                // checked={checked}
                // onChange={handleCheck}
                /> 
                <button onClick={() => handleDeleteClick(chore.id)}>🗑️</button>
                </li>
            </ul>        
        </li>
    )
}

export default ChoreCard;
