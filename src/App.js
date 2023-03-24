import './App.scss';
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
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
    Jobi
      <ul>
        {jobs.map((job) => {
                  console.log(job.key)
          return (
    
                <HomePage 
                jobDescription = {job}
                key = {job.key} />
          )
        }
      )}
        
      </ul>
    </div>
  );
}

export default App;
