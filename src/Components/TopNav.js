import { Link } from "react-router-dom"; 
import logo  from "../partials/assets/logo.svg";


function TopNav () {

   return (
      <nav className="wrapper">
         <div className="logo-container">
            <img src={logo} alt="Jobi logo, two overlapping circles"/>
            <p className="logo">jobi</p>
         </div>
         <div>
            <ul>
               <li>
                  <Link to="/">home</Link>
               </li>
               <li>
                  <Link to="/job">job</Link>
               </li>
               <li>
                  <Link to="/explore">explore</Link>
               </li>
               <li>
                  <Link to="/pages">pages</Link>
               </li>
            </ul>
         </div>
         <div>
            <ul>
               <li>Login/sign up</li>
               <li>Post a job</li> 
            </ul>
         </div>
      </nav>
   )
}

export default TopNav; 