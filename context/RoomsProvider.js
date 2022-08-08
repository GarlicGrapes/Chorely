import React, {createContext, useState} from "react";

const RoomsContext = createContext() 

function RoomsProvider({children}) {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/rooms")
          .then((response) => response.json())
          .then((roomData) => setRooms(roomData))
          }, [] );

return (
    <RoomsContext.Provider rooms={rooms}>
        {children}
    </RoomsContext.Provider>

)
}

export {RoomsContext, RoomsProvider}