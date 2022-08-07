import React from "react";


function ChoreCard({chore}) {


    return(
        <li>
            <ul>
                <li>{chore.choreName}</li>
                <li>{chore.choreRoom}</li>
                <li>{chore.choreTime + " mins"}</li>
                <li>{chore.choreFrequency + "days"}</li>
                {/* <input type="checkbox">{chore.isCompleted}</input> */}
                
            </ul>        
        </li>
    )
}

export default ChoreCard;
