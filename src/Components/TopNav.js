import { Link } from "react-router-dom"; 
import logo  from "../partials/assets/logo.svg";


function TopNav () {

   return (
      <nav className="wrapper top-nav">
         <div className="logo-container">
            <img src={logo} alt="Jobi logo, two overlapping circles"/>
            <p className="logo">jobi</p>
         </div>
         <div className="navbar-container">
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
         <div className="nav-additions-container">
            <ul>
               <li className="special-white-li">Login/sign up</li>
               <li className="special-green-li">Post a job</li> 
            </ul>
         </div>
      </nav>
   )
}

export default TopNav; 