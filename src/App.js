import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import NewChoreForm from './NewChoreForm';
import NewRoomForm from "./NewRoomForm"
import LogInPage from './LogInPage';
import {BrowserRouter, Route, NavLink, Switch, Routes} from "react-router-dom";
import { ChromeReaderModeSharp, RoomService } from '@mui/icons-material';


function App() {
  
  const [chores, setChores] = useState([])
  const [rooms, setRooms] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/chores")
      .then((response) => response.json())
      .then((data) => setChores(data))
    fetch("http://localhost:3000/rooms")
      .then((response) => response.json())
      .then((roomData) => setRooms(roomData))
      }, [] );


  function addChore(newChore) {
    setChores([...chores, newChore])
  }

  function addRoom(newRoom) {
    setRooms([...rooms, newRoom])
  }
  
  function deleteChoreApp(choreId, roomId) {
    console.log("in App", choreId)
    console.log("in App", roomId)
  }
//   function deleteChore(id) {
//     const updatedChores = room.chores.filter((chore) => {
//         return chore.id !== id
//     })
//     setRoom([...rooms], rooms.chores = updatedChores)
// }
  
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />

        <Switch>
        
          <Route exact path="/createchore">
           
            <NewChoreForm 
              addChore={addChore}
              rooms={rooms}
            />

          </Route>

          <Route exact path="/createroom">
           
           <NewRoomForm
            addRoom={addRoom}
            rooms={rooms}
           />

         </Route>

          <Route exact path="/login">

            <LogInPage/>

          </Route>
          
          <Route exact path="/">

            <HomePage 
              // room={rooms}
              // addRoom={addRoom}
              chores={chores}
              rooms={rooms}
              deleteChore={deleteChoreApp}
            />
          
          </Route>



        </Switch>

      </header>
    </div>
  );
}

export default App;
