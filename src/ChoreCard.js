import React, {useState} from "react";


function ChoreCard({chore, handleDeleteChore}) {
    const [checked, setChecked] = useState(false)

    function handleCheck(e) {
        setChecked(!checked)
        console.log(e)
    }

    function onDeleteClick() {
        handleDeleteChore(chore.id)
    }

    return(
        <li>
            <ul>
                <li key={chore.id}>
                {chore.choreName}
                <input 
                type="checkbox"
                checked={checked}
                onChange={handleCheck}

                /> 
                <button onClick={() => onDeleteClick(chore.id)}>🗑️</button>
                </li>
            </ul>        
        </li>
    )
}

export default ChoreCard;
