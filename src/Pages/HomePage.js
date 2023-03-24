import { useState } from "react"; 
import JobDescription from "./JobDescription"


function HomePage (props) {

const [showJobDescription, setShowJobDescription] = useState (false);

return (
   <>
      <li 
      key={props.jobDescription.key}
      onClick = {() => {setShowJobDescription(true)}}
      >
         {props.jobDescription.jobTitle}
         {showJobDescription ? <JobDescription/> : null}
      </li>
   </>
)

}

export default HomePage;