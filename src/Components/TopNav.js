import { Link } from "react-router-dom"; 

function TopNav () {

   return (
      <nav className="wrapper">
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

      </nav>
   )
}

export default TopNav; 