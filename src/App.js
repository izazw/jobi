import './App.scss';

//fonts
import "./fonts/Gordita Black.otf"
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Routes, Route } from 'react-router';
import firebase  from "./firebase";
import HomePage from './Pages/HomePage';



function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // create a variable that makes reference to our database
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      console.log(response.val())
      
      const newState = [];
      const data = response.val()

      for (let key in data) {
        newState.push(data[key])
      }

      setJobs(newState)
    })
  }, [])

  

  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="/"/>
      
    </Routes>
    </div>
  );
}

export default App;
