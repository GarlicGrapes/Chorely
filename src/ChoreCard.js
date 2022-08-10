import React from "react";

function ChoreCard({chore, deleteChore}) {



    function handleDeleteClick(choreId) {
        deleteChore(choreId)
    }


    return(
        <tr key={chore.id}> 
            <td className="choreText">
            {chore.choreName} 
            </td>

            <td>
            <button className="choreButton" onClick={() => handleDeleteClick(chore.id)}>🗑️</button>
            </td>       
        </tr>
    )
}

export default ChoreCard;
