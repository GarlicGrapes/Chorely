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
        <tr key={chore.id}> 
            <td className="choreText">
            {chore.choreName} 
            </td>
            {/* <input 
            type="checkbox"
            // checked={checked}
            // onChange={handleCheck}
            />  */}
            <td>
            <button className="choreButton" onClick={() => handleDeleteClick(chore.id)}>🗑️</button>
            </td>       
        </tr>
    )
}

export default ChoreCard;
