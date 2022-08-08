import React, {useState} from "react";


function ChoreCard({chore}) {
    const [checked, setChecked] = useState(false)

    function handleCheck() {
        setChecked(!checked)
        console.log(checked)
    }
    return(
        <li>
            <ul>
                <li>
                {chore.choreName}
                <input 
                type="checkbox"
                checked={checked}
                onChange={handleCheck}

                /> 
                <button onClick={() => console.log(checked)}>log</button>
                </li>
                {/* <li>{chore.choreRoom}</li>
                <li>{chore.choreTime + " mins"}</li>
                <li>{chore.choreFrequency + "days"}</li> */}
                {/* <input type="checkbox">{chore.isCompleted}</input> */}
                
            </ul>        
        </li>
    )
}

export default ChoreCard;
