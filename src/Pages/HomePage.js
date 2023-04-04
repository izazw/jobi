import { useState } from "react"; 
import TopNav from "../Components/TopNav";
import JobDescription from "./JobDescription"
import Header from "../Components/Header";



function HomePage (props) {

const [showJobDescription, setShowJobDescription] = useState (false);

return (
   <div className="homepage">
  
      <Header/>


      {/* <li 
      key={props.jobDescription.key}
      onClick = {() => {setShowJobDescription(true)}}
      >
         {props.jobDescription.jobTitle}
         {showJobDescription ? <JobDescription jobTitle={props.jobDescription}/> : null}
      </li> */}
   </div>
)

}

export default HomePage;