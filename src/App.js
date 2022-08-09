import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import NewChoreForm from './NewChoreForm';
import NewRoomForm from "./NewRoomForm"
import { Route, Switch,} from "react-router-dom";
import { ChromeReaderModeSharp, RoomService } from '@mui/icons-material';


function App() {

  const [chores, setChores] = useState([])
  const [rooms, setRooms] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then((response) => response.json())
      .then((roomData) => setRooms(roomData))
      fetch("http://localhost:3000/chores")
      .then((response) => response.json())
      .then((choreData) => setChores(choreData))
      }, [] );


  function addChore(newChore) {
    setChores([...chores, newChore])
  }

  function addRoom(newRoom) {
    setRooms([...rooms, newRoom])
  }

  
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

        <Route exact path="/"> 

            <HomePage 
              rooms={rooms}
              chores={chores}
              choreUpdate={setChores}
              roomUpdate={setRooms}
            /> 
          
        </Route>


 
        </Switch> 

      </header>
    </div>
  );
}

export default App;
