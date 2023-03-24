import './App.scss';
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebase  from "./firebase";


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
          return (
            <li>
              <p>
                {job}
              </p>
            </li>
          )
        })}
        
      </ul>
    </div>
  );
}

export default App;
