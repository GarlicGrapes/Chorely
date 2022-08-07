import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import NewChoreForm from './NewChoreForm';
import LogInPage from './LogInPage';
import {BrowserRouter, Route, NavLink, Switch, Routes} from "react-router-dom";


function App() {
  
  
  const [chores, setChores] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/chores")
      .then((response) => response.json())
      .then((data) => setChores(data))
      }, [] );

  function addChore(newChore) {
    setChores([...chores, newChore])
  }
  
  
  
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />

        <Switch>
        
          <Route exact path="/createchore">
           
            <NewChoreForm 
              addChore={addChore}
            />

          </Route>

          <Route exact path="/login">

            <LogInPage/>

          </Route>
          
          <Route exact path="/">
'

'
'
            <HomePage 
              chores={chores} 
              setChores={setChores}
            />
          
          </Route>



        </Switch>

      </header>
    </div>
  );
}

export default App;
