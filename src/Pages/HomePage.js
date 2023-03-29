import { useState } from "react"; 
import TopNav from "../Components/TopNav";
import JobDescription from "./JobDescription"



function HomePage (props) {

const [showJobDescription, setShowJobDescription] = useState (false);

return (
   <>
      <TopNav/>
      {/* <li 
      key={props.jobDescription.key}
      onClick = {() => {setShowJobDescription(true)}}
      >
         {props.jobDescription.jobTitle}
         {showJobDescription ? <JobDescription jobTitle={props.jobDescription}/> : null}
      </li> */}
   </>
)

}

export default HomePage;